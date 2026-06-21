"""
Step 2 of the PCL rating pipeline.
Run AFTER update_stats.py whenever player stats change.

Recalculates all ratings from scratch:
  1. Pool-normalise raw form scores (best player = 1000)
  2. Apply most-recent-tournament placement bonuses
  3. Sync and re-sort Bowling_Ranked / AllRounders_Ranked

Update CHAMPION / RUNNER_UP / PARTICIPANT sets after each new tournament.
"""
import json, re, math

HTML_PATH = r"c:\Users\abral\Desktop\Product\PotsdamCL\index.html"

# ── PCL4 results (update these for each new tournament) ──────────────────────
CHAMPION    = {'Hasibul Hasan Shanto', 'Ataullah Khan Rifat', 'Dipta Roy',
               'Ejajur Rahman Redoy', 'Sazzad Tanveer', 'Imtiaz Ahmed',
               'Md Nahian Imtiaz Hasan'}
RUNNER_UP   = {'Nahid Hasan', 'Hasibur Rahman', 'Md Khalid Mahfuz', 'Md Noman',
               'Shahriar Ahmed', 'Sufian Ahmed', 'Nahid Hasan (Junior)'}
PARTICIPANT = {'Mohammad Akash', 'Amam ul Hasan', 'Borshon Gomes', 'GR Pranto',
               'Iftekhar A', 'Jayed Akbar Sumon', 'Tanzim Ahmed'}
# Players not in any set get the inactive penalty (-4%)
# ─────────────────────────────────────────────────────────────────────────────

BONUS = {
    'champion':    1.08,
    'runner_up':   1.06,
    'participant': 1.04,
    'inactive':    0.96,
}

def pcl_factor(name):
    if name in CHAMPION:    return BONUS['champion']
    if name in RUNNER_UP:   return BONUS['runner_up']
    if name in PARTICIPANT: return BONUS['participant']
    return BONUS['inactive']

def stability(m):
    if m < 4:  return 0.30
    if m < 8:  return 0.52
    if m < 12: return 0.70
    if m < 20: return 0.82
    if m < 30: return 0.92
    return 1.0

def raw_bat(p):
    m   = p.get('Bat_Matches', 0) or 0
    inn = p.get('Bat_Innings', 0) or 0
    if m < 2 or inn < 2:
        return (p.get('Bat_Runs', 0) or 0) * 0.03
    avg = p.get('Bat_Avg', 0) or 0
    sr  = p.get('Bat_SR', 0) or 0
    if not avg or not sr:
        return 0
    srF      = (sr / 150) ** 1.5
    msRate   = ((p.get('Bat_30s', 0) or 0) * 0.4 +
                (p.get('Bat_50s', 0) or 0) * 1.0 +
                (p.get('Bat_100s', 0) or 0) * 2.5) / inn
    duckRate = min(0.4, (p.get('Bat_Ducks', 0) or 0) / inn)
    return (avg * srF * (1 - duckRate) + msRate * 50) * stability(m)

def raw_bowl(p):
    m    = p.get('Bowl_Matches', 0) or 0
    wkts = p.get('Bowl_Wkts', 0) or 0
    if m < 2 or wkts < 3:
        return 0
    avg  = p.get('Bowl_Avg', 99) or 99
    econ = p.get('Bowl_Econ', 12) or 12
    sr   = p.get('Bowl_SR', 99) or 99
    qNorm = (15 / max(avg, 5)) + (7 / max(econ, 3)) + (12 / max(sr, 4))
    volF  = min(1.5, math.sqrt(wkts / 10))
    haulR = ((p.get('Bowl_3w', 0) or 0) * 0.3 +
             (p.get('Bowl_5w', 0) or 0) * 1.0) / max(m, 1)
    return (qNorm * 100 * volF + haulR * 50) * stability(m)

# ── Load ──────────────────────────────────────────────────────────────────────
with open(HTML_PATH, encoding='utf-8') as f:
    html = f.read()

match = re.search(r'const RAW=(\{.*?\});', html, re.DOTALL)
raw = json.loads(match.group(1))
players = raw['Batting_Ranked']

# ── 1. Raw scores ─────────────────────────────────────────────────────────────
bat_scores  = [(p, raw_bat(p)) for p in players]
bowl_elig   = [(p, raw_bowl(p)) for p in players
               if (p.get('Bowl_Wkts', 0) or 0) >= 3 and (p.get('Bowl_Matches', 0) or 0) >= 2]

max_bat  = max(s for _, s in bat_scores)
max_bowl = max((s for _, s in bowl_elig), default=1)

# ── 2. Base ratings (pool-normalised, best = 1000) ───────────────────────────
for p, s in bat_scores:
    p['Bat_Rating'] = round(s / max_bat * 1000)

for p in players:
    p.pop('Bowl_Rating', None)   # clear so non-eligible have no bowling rating
for p, s in bowl_elig:
    p['Bowl_Rating'] = round(s / max_bowl * 1000)

for p in players:
    b = p.get('Bat_Rating', 0) or 0
    w = p.get('Bowl_Rating', 0) or 0
    p['AllRound_Rating'] = round(b * w / 1000) if b > 0 and w > 0 else 0

# ── 3. Apply tournament placement bonuses ─────────────────────────────────────
for p in players:
    f = pcl_factor(p['Player'])
    p['Bat_Rating'] = round((p.get('Bat_Rating', 0) or 0) * f)
    if (p.get('Bowl_Rating', 0) or 0) > 0:
        p['Bowl_Rating'] = round((p.get('Bowl_Rating', 0) or 0) * f)
    b = p.get('Bat_Rating', 0) or 0
    w = p.get('Bowl_Rating', 0) or 0
    p['AllRound_Rating'] = round(b * w / 1000) if b > 0 and w > 0 else 0

# ── 4. Sync Bowling_Ranked / AllRounders_Ranked ───────────────────────────────
br_map = {p['Player']: p for p in players}
for b in raw['Bowling_Ranked']:
    p = br_map.get(b['Player'])
    if p:
        b['Bowl_Rating'] = p.get('Bowl_Rating', 0) or 0
for ar in raw['AllRounders_Ranked']:
    p = br_map.get(ar['Player'])
    if p:
        ar['Bat_Rating']      = p.get('Bat_Rating', 0) or 0
        ar['Bowl_Rating']     = p.get('Bowl_Rating', 0) or 0
        ar['AllRound_Rating'] = p.get('AllRound_Rating', 0) or 0

# ── 5. Re-sort ────────────────────────────────────────────────────────────────
raw['Batting_Ranked']     = sorted(players,
    key=lambda p: p.get('Bat_Rating', 0) or 0, reverse=True)
raw['Bowling_Ranked']     = sorted(raw['Bowling_Ranked'],
    key=lambda p: p.get('Bowl_Rating', 0) or 0, reverse=True)
raw['AllRounders_Ranked'] = sorted(raw['AllRounders_Ranked'],
    key=lambda p: p.get('AllRound_Rating', 0) or 0, reverse=True)

# ── Save ──────────────────────────────────────────────────────────────────────
new_raw_str = 'const RAW=' + json.dumps(raw, separators=(',', ':'), ensure_ascii=False) + ';'
new_html = re.sub(r'const RAW=\{.*?\};', new_raw_str, html, flags=re.DOTALL)
with open(HTML_PATH, 'w', encoding='utf-8') as f:
    f.write(new_html)

# ── Print summary ─────────────────────────────────────────────────────────────
print("Ratings recalculated.\n")
print("BATTING")
for i, p in enumerate(raw['Batting_Ranked'][:10], 1):
    print(f"  {i:2}. {p['Player']:<35} {p.get('Bat_Rating', 0)}")
print("\nBOWLING")
for i, p in enumerate(raw['Bowling_Ranked'][:10], 1):
    print(f"  {i:2}. {p['Player']:<35} {p.get('Bowl_Rating', 0)}")
print("\nALL-ROUND")
for i, p in enumerate(raw['AllRounders_Ranked'][:5], 1):
    print(f"  {i:2}. {p['Player']:<35} {p.get('AllRound_Rating', 0)}")

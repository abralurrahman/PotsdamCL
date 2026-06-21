"""
Updates player stats in index.html RAW data based on PCL4 tournament scorecards.
Teams: The Sage Warriors (SW), The Spectators of the Grand Finale (SOTGF), Sony's Seven (SS)
Matches: M1 (SOTGF vs SS), M2 (SW vs SOTGF), M3 (SW vs SS), Final (SW vs SOTGF)
Champion: The Sage Warriors | Runner-up: SOTGF | Participant: Sony's Seven
"""
import json, re

HTML_PATH = r"c:\Users\abral\Desktop\Product\PotsdamCL\index.html"

with open(HTML_PATH, encoding="utf-8") as f:
    html = f.read()

m = re.search(r'const RAW=(\{.*?\});', html, re.DOTALL)
raw = json.loads(m.group(1))
BR = {p["Player"]: p for p in raw["Batting_Ranked"]}
BW = {p["Player"]: p for p in raw["Bowling_Ranked"]}
AR = {p["Player"]: p for p in raw["AllRounders_Ranked"]}

def safe_round(v, d=2):
    return round(v, d)

def add_new_player(name):
    entry = {
        "Player": name,
        "Bat_Rating": 0, "Bowl_Rating": 0, "AllRound_Rating": 0,
        "Bat_Matches": 0, "Bat_Innings": 0, "Bat_NotOut": 0,
        "Bat_Runs": 0, "Bat_SR": 0, "Bat_Avg": None,
        "Bat_HS": "0", "Bat_4s": 0, "Bat_6s": 0,
        "Bat_30s": 0, "Bat_50s": 0, "Bat_100s": 0, "Bat_Ducks": 0,
        "Bowl_Matches": 0, "Bowl_Innings": 0, "Bowl_Overs": 0,
        "Bowl_RunsConceded": 0, "Bowl_Wkts": 0, "Bowl_Econ": 0,
        "Bowl_SR": None, "Bowl_Avg": None, "Bowl_Best": None,
        "Bowl_Wides": 0, "Bowl_NoBalls": 0, "Bowl_3w": 0, "Bowl_5w": 0,
    }
    bw_entry = dict(entry)
    ar_entry = dict(entry)
    raw["Batting_Ranked"].append(entry)
    raw["Bowling_Ranked"].append(bw_entry)
    raw["AllRounders_Ranked"].append(ar_entry)
    BR[name] = entry
    BW[name] = bw_entry
    AR[name] = ar_entry

def update_bat(name, add_m, add_inn, add_no, add_runs, add_balls,
               add_4s=0, add_6s=0, add_30s=0, add_50s=0, add_100s=0, add_ducks=0, new_hs=None):
    p = BR[name]
    old_balls = round(p["Bat_Runs"] * 100 / p["Bat_SR"]) if p.get("Bat_SR") and p["Bat_SR"] > 0 else 0
    new_runs  = p["Bat_Runs"] + add_runs
    new_balls = old_balls + add_balls
    new_inn   = p["Bat_Innings"] + add_inn
    new_no    = p["Bat_NotOut"] + add_no
    p["Bat_Matches"]  = p["Bat_Matches"] + add_m
    p["Bat_Innings"]  = new_inn
    p["Bat_NotOut"]   = new_no
    p["Bat_Runs"]     = new_runs
    p["Bat_SR"]       = safe_round(new_runs * 100 / new_balls) if new_balls else 0
    p["Bat_Avg"]      = safe_round(new_runs / (new_inn - new_no)) if (new_inn - new_no) > 0 else None
    p["Bat_4s"]       = p["Bat_4s"] + add_4s
    p["Bat_6s"]       = p["Bat_6s"] + add_6s
    p["Bat_30s"]      = p.get("Bat_30s", 0) + add_30s
    p["Bat_50s"]      = p.get("Bat_50s", 0) + add_50s
    p["Bat_100s"]     = p.get("Bat_100s", 0) + add_100s
    p["Bat_Ducks"]    = p.get("Bat_Ducks", 0) + add_ducks
    if new_hs is not None:
        p["Bat_HS"] = new_hs

def overs_to_balls(ov):
    full = int(ov)
    part = round((ov - full) * 10)
    return full * 6 + part

def balls_to_overs(b):
    return float(f"{b // 6}.{b % 6}")

def update_bowl(name, add_m, add_inn, add_overs, add_runs, add_wkts,
                add_wd=0, add_nb=0, add_3w=0, add_5w=0, new_best=None):
    p = BR[name]
    old_balls = overs_to_balls(p.get("Bowl_Overs", 0))
    new_balls = old_balls + overs_to_balls(add_overs)
    new_wkts  = p.get("Bowl_Wkts", 0) + add_wkts
    new_runs  = p.get("Bowl_RunsConceded", 0) + add_runs
    new_ov    = balls_to_overs(new_balls)
    p["Bowl_Matches"]       = p.get("Bowl_Matches", 0) + add_m
    p["Bowl_Innings"]       = p.get("Bowl_Innings", 0) + add_inn
    p["Bowl_Overs"]         = new_ov
    p["Bowl_RunsConceded"]  = new_runs
    p["Bowl_Wkts"]          = new_wkts
    p["Bowl_Econ"]          = safe_round(new_runs / (new_balls / 6)) if new_balls else 0
    p["Bowl_SR"]            = safe_round(new_balls / new_wkts) if new_wkts else None
    p["Bowl_Avg"]           = safe_round(new_runs / new_wkts) if new_wkts else None
    p["Bowl_Wides"]         = p.get("Bowl_Wides", 0) + add_wd
    p["Bowl_NoBalls"]       = p.get("Bowl_NoBalls", 0) + add_nb
    p["Bowl_3w"]            = p.get("Bowl_3w", 0) + add_3w
    p["Bowl_5w"]            = p.get("Bowl_5w", 0) + add_5w
    if new_best is not None:
        p["Bowl_Best"] = new_best
    if name in BW:
        b = BW[name]
        b["Bowl_Wkts"] = new_wkts
        b["Bowl_Overs"] = new_ov
        b["Bowl_Econ"]  = p["Bowl_Econ"]
        b["Bowl_Avg"]   = p["Bowl_Avg"]
        b["Bowl_SR"]    = p["Bowl_SR"]
        if new_best is not None:
            b["Bowl_Best"] = new_best

# ── Add new players ───────────────────────────────────────────────────────────
for name in ["Imtiaz Ahmed", "Md Nahian Imtiaz Hasan",
             "Md Khalid Mahfuz", "GR Pranto", "Iftekhar A", "Amamul Hasan"]:
    add_new_player(name)

# ─── THE SAGE WARRIORS (Champion) ────────────────────────────────────────────

# Hasibul Hasan Shanto
# bat: M2(2,5b,OUT), M3(0,1b,duck), Final(2,4b,OUT)
update_bat("Hasibul Hasan Shanto", add_m=3, add_inn=3, add_no=0,
           add_runs=4, add_balls=10, add_ducks=1)
# bowl: M2(2ov,15r,1w,1wd), M3(2ov,24r,2w,4wd), Final(2ov,23r,1w,1wd)
update_bowl("Hasibul Hasan Shanto", add_m=3, add_inn=3,
            add_overs=6.0, add_runs=62, add_wkts=4, add_wd=6)

# Ataullah Khan Rifat
# bat: M2(0,1b,duck), M3(60,20b,1×4s,8×6s,50s), Final(28,13b,2×4s,2×6s)
update_bat("Ataullah Khan Rifat", add_m=3, add_inn=3, add_no=0,
           add_runs=88, add_balls=34, add_4s=3, add_6s=10, add_ducks=1, add_50s=1,
           new_hs="60")
# bowl: M2(3ov,31r,0w,1wd), M3(2.4ov,13r,4w,2wd), Final(3ov,35r,0w,1wd)
update_bowl("Ataullah Khan Rifat", add_m=3, add_inn=3,
            add_overs=8.4, add_runs=79, add_wkts=4, add_wd=4)

# Dipta Roy
# bat: M2(49,28b,5×4s,3×6s,30s), M3(14,5b,2×6s), Final(24,13b,1×4s,2×6s)
update_bat("Dipta Roy", add_m=3, add_inn=3, add_no=0,
           add_runs=87, add_balls=46, add_4s=6, add_6s=7, add_30s=1)
# bowl: DNB all 3 matches — no bowling update

# Ejajur Rahman Redoy
# bat: M2(1,1b,NO), M3(6,4b,1×6s,OUT), Final(8,7b,1×6s,OUT)
update_bat("Ejajur Rahman Redoy", add_m=3, add_inn=3, add_no=1,
           add_runs=15, add_balls=12, add_6s=2)
# bowl: M2(1ov,23r,0w,5wd,2nb), M3(DNB), Final(2ov,16r,3w,3w-haul)
update_bowl("Ejajur Rahman Redoy", add_m=3, add_inn=2,
            add_overs=3.0, add_runs=39, add_wkts=3, add_wd=5, add_nb=2, add_3w=1,
            new_best="3/16")

# Sazzad Tanveer
# bat: M2(2,1b,NO), M3(7,3b,1×6s,OUT), Final(4,2b,1×4s,NO)
update_bat("Sazzad Tanveer", add_m=3, add_inn=3, add_no=2,
           add_runs=13, add_balls=6, add_4s=1, add_6s=1)
# bowl: DNB — no bowling update

# Imtiaz Ahmed (NEW)
# bat: M2(8,7b,1×6s,OUT), M3(20,16b,2×4s,1×6s,NO), Final(12,7b,1×4s,1×6s,OUT)
update_bat("Imtiaz Ahmed", add_m=3, add_inn=3, add_no=1,
           add_runs=40, add_balls=30, add_4s=3, add_6s=3, new_hs="20*")
# bowl: M2(1ov,18r,1w), Final(1ov,5r,0w,1nb)
update_bowl("Imtiaz Ahmed", add_m=3, add_inn=2,
            add_overs=2.0, add_runs=23, add_wkts=1, add_nb=1, new_best="1/18")

# Md Nahian Imtiaz Hasan (NEW)
# bat: M2(8,9b,1×4s,OUT), M3(0,1b,NO), Final(1,3b,NO)
update_bat("Md Nahian Imtiaz Hasan", add_m=3, add_inn=3, add_no=2,
           add_runs=9, add_balls=13, add_4s=1, new_hs="8")
# bowl: DNB — no bowling update

# ─── THE SPECTATORS OF THE GRAND FINALE (Runner-up) ──────────────────────────

# Hasibur Rahman
# bat: M1(25,11b,5×4s), M2(42,21b,4×4s,2×6s,30s), Final(52,28b,4×4s,3×6s,NO,50s)
update_bat("Hasibur Rahman", add_m=3, add_inn=3, add_no=1,
           add_runs=119, add_balls=60, add_4s=13, add_6s=5, add_30s=1, add_50s=1)
# bowl: M1(0.1ov,1r,0w), M2(1ov,15r,0w,1wd), Final(1ov,7r,1w)
update_bowl("Hasibur Rahman", add_m=3, add_inn=3,
            add_overs=2.1, add_runs=23, add_wkts=1, add_wd=1)

# Nahid Hasan (captain — the registered system player)
# bat: M1(5,7b,OUT), M2(12,4b,2×6s,NO), Final(6,6b,1×4s,OUT)
update_bat("Nahid Hasan", add_m=3, add_inn=3, add_no=1,
           add_runs=23, add_balls=17, add_4s=1, add_6s=2)
# bowl: M1(3ov,38r,0w,2wd,1nb), M2(2ov,20r,1w,2wd,1nb), Final(3ov,30r,2w,4wd,1nb)
update_bowl("Nahid Hasan", add_m=3, add_inn=3,
            add_overs=8.0, add_runs=88, add_wkts=3, add_wd=8, add_nb=3)

# Sufian Ahmed
# bat: M1(32,14b,1×4s,4×6s,OUT,30s), M2(DNB), Final(1,3b,OUT)
update_bat("Sufian Ahmed", add_m=3, add_inn=2, add_no=0,
           add_runs=33, add_balls=17, add_4s=1, add_6s=4, add_30s=1)
# bowl: M1(2ov,37r,0w,3wd,1nb), M2(3ov,25r,3w,5wd,2nb), Final(2ov,17r,1w,1wd)
update_bowl("Sufian Ahmed", add_m=3, add_inn=3,
            add_overs=7.0, add_runs=79, add_wkts=4, add_wd=9, add_nb=3)

# Md Noman — M1(DNB), M2(0,2b,NO), Final(DNB)
update_bat("Md Noman", add_m=3, add_inn=1, add_no=1,
           add_runs=0, add_balls=2)

# Shahriar Ahmed — M1(8,5b,1×6s,OUT), M2(DNB), Final(2,2b,NO)
update_bat("Shahriar Ahmed", add_m=3, add_inn=2, add_no=1,
           add_runs=10, add_balls=7, add_6s=1)

# Md Khalid Mahfuz (NEW)
# bat: M1(26,13b,3×6s,NO), M2(24,17b,2×6s,OUT), Final(9,8b,OUT)
update_bat("Md Khalid Mahfuz", add_m=3, add_inn=3, add_no=1,
           add_runs=59, add_balls=38, add_6s=5, new_hs="26*")
# bowl: DNB — no bowling update

# ─── SONY'S SEVEN (Participant) ───────────────────────────────────────────────

# Mohammad Akash — M1(DNB), M3(0,1b,duck)
update_bat("Mohammad Akash", add_m=2, add_inn=1, add_no=0,
           add_runs=0, add_balls=1, add_ducks=1)
# bowl: M1(1ov,17r,0w,0wd,1nb), M3(1ov,12r,2w,3wd)
update_bowl("Mohammad Akash", add_m=2, add_inn=2,
            add_overs=2.0, add_runs=29, add_wkts=2, add_wd=3, add_nb=1)

# Jayed Akbar Sumon — M1(31,14b,4×6s,retired hurt/NO,30s), M3(14,5b,2×6s,OUT)
update_bat("Jayed Akbar Sumon", add_m=2, add_inn=2, add_no=1,
           add_runs=45, add_balls=19, add_6s=6, add_30s=1)

# Tanzim Ahmed — M1(DNB), M3(9,8b,1×4s,OUT)
update_bat("Tanzim Ahmed", add_m=2, add_inn=1, add_no=0,
           add_runs=9, add_balls=8, add_4s=1)
# bowl: M1(3ov,26r,2w), M3(3ov,35r,3w,1wd)
update_bowl("Tanzim Ahmed", add_m=2, add_inn=2,
            add_overs=6.0, add_runs=61, add_wkts=5, add_wd=1)

# Borshon Gomes — M1(DNB), M3(1,6b,OUT)
update_bat("Borshon Gomes", add_m=2, add_inn=1, add_no=0,
           add_runs=1, add_balls=6)
# bowl: M1(1ov,23r,0w,2wd,1nb), M3(1ov,21r,0w,1wd)
update_bowl("Borshon Gomes", add_m=2, add_inn=2,
            add_overs=2.0, add_runs=44, add_wkts=0, add_wd=3, add_nb=1)

# GR Pranto (NEW)
# bat: M1(66,29b,4×4s,6×6s,NO,50s), M3(7,3b,1×6s,OUT)
update_bat("GR Pranto", add_m=2, add_inn=2, add_no=1,
           add_runs=73, add_balls=32, add_4s=4, add_6s=7, add_50s=1, new_hs="66*")
# bowl: M1(2ov,22r,1w,1wd), M3(2ov,35r,0w,1wd,1nb)
update_bowl("GR Pranto", add_m=2, add_inn=2,
            add_overs=4.0, add_runs=57, add_wkts=1, add_wd=2, add_nb=1, new_best="1/22")

# Iftekhar A (NEW) — M1(0,2b,NO), M3(0,3b,NO)
update_bat("Iftekhar A", add_m=2, add_inn=2, add_no=2,
           add_runs=0, add_balls=5, new_hs="0*")

# Amamul Hasan (NEW) — M1(DNB), M3(0,2b,duck)
update_bat("Amamul Hasan", add_m=2, add_inn=1, add_no=0,
           add_runs=0, add_balls=2, add_ducks=1, new_hs="0")
# bowl: M1(1ov,19r,1w,2wd,3nb), M3(1ov,15r,0w,3wd,1nb)
update_bowl("Amamul Hasan", add_m=2, add_inn=2,
            add_overs=2.0, add_runs=34, add_wkts=1, add_wd=5, add_nb=4, new_best="1/19")

# ─── Rebuild sorted lists ─────────────────────────────────────────────────────
raw["Batting_Ranked"]     = sorted(BR.values(), key=lambda p: p.get("Bat_Rating", 0), reverse=True)
raw["Bowling_Ranked"]     = sorted(BW.values(), key=lambda p: p.get("Bowl_Rating", 0), reverse=True)
raw["AllRounders_Ranked"] = sorted(AR.values(), key=lambda p: p.get("AllRound_Rating", 0), reverse=True)

new_raw_str = "const RAW=" + json.dumps(raw, separators=(',', ':'), ensure_ascii=False) + ";"
new_html = re.sub(r'const RAW=\{.*?\};', new_raw_str, html, flags=re.DOTALL)

with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Done. Players updated:")
for name in [
    "Hasibul Hasan Shanto", "Ataullah Khan Rifat", "Dipta Roy",
    "Ejajur Rahman Redoy", "Sazzad Tanveer", "Imtiaz Ahmed", "Md Nahian Imtiaz Hasan",
    "Hasibur Rahman", "Nahid Hasan", "Sufian Ahmed", "Md Noman", "Shahriar Ahmed", "Md Khalid Mahfuz",
    "Mohammad Akash", "Jayed Akbar Sumon", "Tanzim Ahmed", "Borshon Gomes",
    "GR Pranto", "Iftekhar A", "Amamul Hasan"
]:
    p = BR[name]
    print(f"  {name}: {p['Bat_Runs']}r avg={p.get('Bat_Avg')} sr={p.get('Bat_SR')} | {p.get('Bowl_Wkts','—')}w avg={p.get('Bowl_Avg','—')}")

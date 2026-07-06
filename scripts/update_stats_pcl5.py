"""
Updates player stats in index.html RAW data based on PCL5 tournament scorecards.
Teams: Team Padma (TP), Team Jamuna (TJ), Team Meghna (TM)
Matches: M1 (Padma vs Jamuna, Jamuna won), M2 (Meghna vs Padma, Padma won),
         M3 (Meghna vs Jamuna, Meghna won), Final (Jamuna vs Padma, Padma won)
Champion: Team Padma | Runner-up: Team Jamuna | Participant: Team Meghna
Note: "Amamul Hasan" on scorecard = "Amam ul Hasan" in database (same player, name variant)
Note: "Gr Pranto" on scorecard = "GR Pranto" in database (same player)
Note: "Md Shafayet Hossen Chowdhury" appears on BOTH Padma's and Meghna's squad sheets
      throughout PCL5. Per user confirmation, the Meghna-side player is the real one in
      the database; Padma's stat lines for this name (M1 0*(1), M2 34*(19) bat,
      M2 1-0-14-0 bowl) are a scorekeeping duplication error and are intentionally
      NOT credited to anyone.
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

# ─── TEAM PADMA (Champion) ───────────────────────────────────────────────────

# Dipta Roy (c, M1/M2)
# bat: M1(27,19b,1x4,3x6,OUT), M2(54,24b,2x4,4x6,NO), Final(26,15b,1x4,2x6,NO)
# M2's 54 > existing HS 51* -> update HS
update_bat("Dipta Roy", add_m=3, add_inn=3, add_no=2,
           add_runs=107, add_balls=58, add_4s=4, add_6s=9, add_50s=1,
           new_hs="54*")

# Ataullah Khan Rifat
# bat: M1(13,12b,1x4,OUT), M2(DNB), Final(37,17b,5x4,1x6,NO)
update_bat("Ataullah Khan Rifat", add_m=3, add_inn=2, add_no=1,
           add_runs=50, add_balls=29, add_4s=6, add_6s=1, add_30s=1)
# bowl: M1(3ov,7r,1w), M2(3ov,23r,1w,1wd), Final(3ov,16r,3w,2wd,1nb,3w-haul)
# existing best 5/14 (5w) beats new 3/16 (3w) -> no update
update_bowl("Ataullah Khan Rifat", add_m=3, add_inn=3,
            add_overs=9.0, add_runs=46, add_wkts=5, add_wd=3, add_nb=1, add_3w=1)

# Ejajur Rahman Redoy
# bat: M1(4,8b,NO), M2(DNB), Final(DNB)
update_bat("Ejajur Rahman Redoy", add_m=3, add_inn=1, add_no=1,
           add_runs=4, add_balls=8)
# bowl: M1(2ov,35r,1w,6wd,2nb), M2(1ov,20r,0w,7wd,2nb), Final(2ov,13r,0w,2wd)
update_bowl("Ejajur Rahman Redoy", add_m=3, add_inn=3,
            add_overs=5.0, add_runs=68, add_wkts=1, add_wd=15, add_nb=4)

# Md Shafiul Haque Ankon (wk, captain in Final)
# bat: M1(12,15b,OUT), M2(DNB), Final(DNB)
update_bat("Md Shafiul Haque Ankon", add_m=3, add_inn=1, add_no=0,
           add_runs=12, add_balls=15)

# Sazzad Tanveer
# bat: M1(9,6b,1x6,OUT), M2(DNB), Final(DNB)
update_bat("Sazzad Tanveer", add_m=3, add_inn=1, add_no=0,
           add_runs=9, add_balls=6, add_6s=1)
# bowl: M1(1ov,26r,0w), M2(2ov,19r,1w,2wd,1nb), Final(1.1ov,13r,1w,1wd)
update_bowl("Sazzad Tanveer", add_m=3, add_inn=3,
            add_overs=4.1, add_runs=58, add_wkts=2, add_wd=3, add_nb=1)

# Tanzim Ahmed
# bat: M1(0,1b,duck,OUT), M2(1,3b,OUT), Final(DNB)
update_bat("Tanzim Ahmed", add_m=3, add_inn=2, add_no=0,
           add_runs=1, add_balls=4, add_ducks=1)
# bowl: M1(3ov,11r,1w,2wd,1nb), M2(3ov,20r,1w,1wd), Final(3ov,27r,2w,1nb)
update_bowl("Tanzim Ahmed", add_m=3, add_inn=3,
            add_overs=9.0, add_runs=58, add_wkts=4, add_wd=3, add_nb=2)

# ─── TEAM JAMUNA (Runner-up) ──────────────────────────────────────────────────

# Bayazid Bostame Sony (c)
# bat: M1(DNB), M3(0,0b,run out,duck), Final(2,3b,OUT)
update_bat("Bayazid Bostame Sony", add_m=3, add_inn=2, add_no=0,
           add_runs=2, add_balls=3, add_ducks=1)
# bowl: M1(2ov,12r,1w), M3(2ov,17r,1w), Final(1ov,17r,0w,1nb)
update_bowl("Bayazid Bostame Sony", add_m=3, add_inn=3,
            add_overs=5.0, add_runs=46, add_wkts=2, add_nb=1)

# Amam ul Hasan (= "Amamul Hasan" on scorecard)
# bat: M1(2,4b,NO), M3(DNB), Final(15,18b,2x6,OUT)
update_bat("Amam ul Hasan", add_m=3, add_inn=2, add_no=1,
           add_runs=17, add_balls=22, add_6s=2)
# bowl: M1(1ov,4r,1w), M3(1ov,36r,1w,3wd,1nb), Final(DNB bowl)
update_bowl("Amam ul Hasan", add_m=3, add_inn=2,
            add_overs=2.0, add_runs=40, add_wkts=2, add_wd=3, add_nb=1)

# Jayed Akbar Sumon
# bat: M1(52,34b,6x6,NO,50s), M3(13,10b,1x4,1x6,OUT), Final(41,26b,2x4,3x6,OUT,30s)
update_bat("Jayed Akbar Sumon", add_m=3, add_inn=3, add_no=1,
           add_runs=106, add_balls=70, add_4s=3, add_6s=10, add_50s=1, add_30s=1)

# Md Nahian Imtiaz Hasan
# bat: M1(2,4b,OUT), M3(0,0b,NO), Final(0,2b,NO)
# existing HS 8 > 2, no update
update_bat("Md Nahian Imtiaz Hasan", add_m=3, add_inn=3, add_no=2,
           add_runs=2, add_balls=4)

# Mohammed Ridowan
# bat: M1(DNB), M3(9,10b,1x4,OUT), Final(3,3b,OUT)
update_bat("Mohammed Ridowan", add_m=3, add_inn=2, add_no=0,
           add_runs=12, add_balls=13, add_4s=1)
# bowl: M1(1ov,21r,0w,3wd,1nb), M3(1ov,7r,2w,1wd), Final(0.5ov,18r,0w,2wd,1nb)
# existing best 3/13 (3w) beats new 2/7 (2w) -> no update
update_bowl("Mohammed Ridowan", add_m=3, add_inn=3,
            add_overs=2.5, add_runs=46, add_wkts=2, add_wd=6, add_nb=2)

# Nahid Hasan
# bat: M1(3,7b,OUT), M3(34,17b,1x4,3x6,NO,30s), Final(0,1b,duck,OUT)
update_bat("Nahid Hasan", add_m=3, add_inn=3, add_no=1,
           add_runs=37, add_balls=25, add_4s=1, add_6s=3, add_30s=1, add_ducks=1)
# bowl: M1(3ov,17r,0w,2wd), M3(3ov,19r,1w,1wd), Final(1ov,20r,0w,2wd)
update_bowl("Nahid Hasan", add_m=3, add_inn=3,
            add_overs=7.0, add_runs=56, add_wkts=1, add_wd=5)

# Sufian Ahmed
# bat: M1(9,8b,1x6,OUT), M3(40,26b,3x6,OUT,30s), Final(1,4b,OUT)
update_bat("Sufian Ahmed", add_m=3, add_inn=3, add_no=0,
           add_runs=50, add_balls=38, add_6s=4, add_30s=1)
# bowl: M1(3ov,23r,3w,5wd,1nb,3w-haul), M3(3ov,29r,1w,4wd,2nb), Final(2ov,18r,0w,3wd,1nb)
# M1's 3/23 beats existing best 3/25 (same wkts, fewer runs) -> update
update_bowl("Sufian Ahmed", add_m=3, add_inn=3,
            add_overs=8.0, add_runs=70, add_wkts=4, add_wd=12, add_nb=4, add_3w=1,
            new_best="3/23")

# ─── TEAM MEGHNA (Participant) ────────────────────────────────────────────────

# Hasibul Hasan Shanto (c)
# bat: M2(38,20b,1x4,3x6,OUT,30s), M3(23,13b,1x4,2x6,OUT)
update_bat("Hasibul Hasan Shanto", add_m=2, add_inn=2, add_no=0,
           add_runs=61, add_balls=33, add_4s=2, add_6s=5, add_30s=1)
# bowl: M2(2ov,25r,0w,2wd), M3(2ov,22r,0w,1wd,1nb)
update_bowl("Hasibul Hasan Shanto", add_m=2, add_inn=2,
            add_overs=4.0, add_runs=47, add_wkts=0, add_wd=3, add_nb=1)

# GR Pranto (= "Gr Pranto" on scorecard)
# bat: M2(16,14b,2x4,NO), M3(22,16b,2x4,1x6,OUT)
update_bat("GR Pranto", add_m=2, add_inn=2, add_no=1,
           add_runs=38, add_balls=30, add_4s=4, add_6s=1)
# bowl: M2(2ov,21r,0w), M3(3ov,27r,0w,1wd,1nb)
update_bowl("GR Pranto", add_m=2, add_inn=2,
            add_overs=5.0, add_runs=48, add_wkts=0, add_wd=1, add_nb=1)

# Iftekhar A
# bat: M2(DNB), M3(1,4b,OUT)
update_bat("Iftekhar A", add_m=2, add_inn=1, add_no=0,
           add_runs=1, add_balls=4)

# Imtiaz Ahmed
# bat: M2(15,10b,1x6,NO), M3(44,18b,2x4,5x6,OUT,30s)
# M3's 44 > existing HS 30* -> update HS
update_bat("Imtiaz Ahmed", add_m=2, add_inn=2, add_no=1,
           add_runs=59, add_balls=28, add_4s=2, add_6s=6, add_30s=1,
           new_hs="44")
# bowl: M2(DNB bowl), M3(1ov,14r,0w,1nb)
update_bowl("Imtiaz Ahmed", add_m=2, add_inn=1,
            add_overs=1.0, add_runs=14, add_wkts=0, add_nb=1)

# Mohammad Akash
# bat: M2(1,2b,OUT), M3(4,8b,OUT)
update_bat("Mohammad Akash", add_m=2, add_inn=2, add_no=0,
           add_runs=5, add_balls=10)
# bowl: M2(2.4ov,35r,1w,6wd), M3(3ov,24r,2w,0wd)
update_bowl("Mohammad Akash", add_m=2, add_inn=2,
            add_overs=5.4, add_runs=59, add_wkts=3, add_wd=6)

# Shahriar Ahmed
# bat: M2(10,17b,OUT), M3(2,3b,NO)
update_bat("Shahriar Ahmed", add_m=2, add_inn=2, add_no=1,
           add_runs=12, add_balls=20)

# Md Shafayet Hossen Chowdhury (real player = Team Meghna; Padma-side lines ignored)
# bat: M2(DNB), M3(0,1b,duck,OUT)
update_bat("Md Shafayet Hossen Chowdhury", add_m=2, add_inn=1, add_no=0,
           add_runs=0, add_balls=1, add_ducks=1)
# bowl: M2(1ov,16r,0w), M3(1ov,14r,1w)
update_bowl("Md Shafayet Hossen Chowdhury", add_m=2, add_inn=2,
            add_overs=2.0, add_runs=30, add_wkts=1)

# ─── Rebuild sorted lists ─────────────────────────────────────────────────────
raw["Batting_Ranked"]     = sorted(BR.values(), key=lambda p: p.get("Bat_Rating", 0), reverse=True)
raw["Bowling_Ranked"]     = sorted(BW.values(), key=lambda p: p.get("Bowl_Rating", 0), reverse=True)
raw["AllRounders_Ranked"] = sorted(AR.values(), key=lambda p: p.get("AllRound_Rating", 0), reverse=True)

new_raw_str = "const RAW=" + json.dumps(raw, separators=(',', ':'), ensure_ascii=False) + ";"
new_html = re.sub(r'const RAW=\{.*?\};', new_raw_str, html, flags=re.DOTALL)

with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Done. PCL5 stats applied on top of full history.")
for name in [
    "Dipta Roy", "Ataullah Khan Rifat", "Ejajur Rahman Redoy", "Md Shafiul Haque Ankon",
    "Sazzad Tanveer", "Tanzim Ahmed",
    "Bayazid Bostame Sony", "Amam ul Hasan", "Jayed Akbar Sumon", "Md Nahian Imtiaz Hasan",
    "Mohammed Ridowan", "Nahid Hasan", "Sufian Ahmed",
    "Hasibul Hasan Shanto", "GR Pranto", "Iftekhar A", "Imtiaz Ahmed", "Mohammad Akash",
    "Shahriar Ahmed", "Md Shafayet Hossen Chowdhury"
]:
    p = BR[name]
    print(f"  {name}: {p['Bat_Matches']}mat {p['Bat_Runs']}r avg={p.get('Bat_Avg')} | {p.get('Bowl_Wkts','-')}w avg={p.get('Bowl_Avg','-')}")

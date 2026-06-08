# PCL Rating Update Pipeline

Run these steps **in order** after every tournament.

---

## Step 1 — Update stats (`update_stats.py`)

Edit `scripts/update_stats.py` with the new tournament's scorecard data, then run:

```
python scripts/update_stats.py
```

This updates all batting/bowling raw stats (runs, balls, SR, avg, wickets, overs, econ, etc.) in the `const RAW={...}` block of `index.html`. It does **not** touch ratings.

---

## Step 2 — Recalculate all ratings (`recalc_ratings.py`)

```
python scripts/recalc_ratings.py
```

This does three things in one pass:
1. **Pool-normalise** — compute each player's raw form score, then scale so the best = 1000
2. **Apply tournament placement bonuses** — based on the most recent tournament result
3. **Sync** Bowling_Ranked and AllRounders_Ranked, re-sort all three lists

Ratings are always recomputed **from current stats**, never accumulated on top of old ratings.

### Bonus table (update in `recalc_ratings.py` after each tournament)

| Result      | Factor |
|-------------|--------|
| Champion    | ×1.08  |
| Runner-up   | ×1.06  |
| Participant | ×1.04  |
| Inactive    | ×0.96  |

---

## Step 3 — Bump storage key

In `index.html`, find the line:
```
const SK='pcl26d_...',LK='pcl26l',TK='pcl26tr_...',PRK='pcl26pr_...';
```

Update the date and version in all three keys (SK, TK, PRK) so all users' browsers reload fresh data. Example:
```
const SK='pcl26d_20260608_pcl4_v1',LK='pcl26l',TK='pcl26tr_20260608_pcl4_v1',PRK='pcl26pr_20260608_pcl4_v1';
```

---

## Step 4 — Push to live

```
git add index.html
git commit -m "PCL4: update stats and recalculate ratings"
git push
```

Vercel auto-deploys on push to `main`.

---

## Files

| File | Purpose |
|------|---------|
| `scripts/update_stats.py` | Add new tournament scorecard data |
| `scripts/recalc_ratings.py` | Recalculate all ratings (run after update_stats) |
| `tournaments.js` | Full scorecard display data |
| `index.html` | Single-page app — contains `const RAW={...}` and all JS/CSS |

---

## Rating formula reference

**Batting** (pool-normalised, best = 1000 before bonus):
```
srF      = (Bat_SR / 150) ^ 1.5
msRate   = (30s×0.4 + 50s×1 + 100s×2.5) / innings
duckRate = min(0.4, ducks / innings)
rawScore = (avg × srF × (1 − duckRate) + msRate × 50) × stability
```

**Bowling** (pool-normalised, best = 1000 before bonus):
```
qNorm    = (15/avg) + (7/econ) + (12/SR)   # lower is better → invert
volF     = min(1.5, sqrt(wickets/10))
haulR    = (3w×0.3 + 5w×1) / matches
rawScore = (qNorm×100×volF + haulR×50) × stability
```

**Stability** (reduces weight for low-match-count players):
```
matches:  <4 → 0.30 | <8 → 0.52 | <12 → 0.70 | <20 → 0.82 | <30 → 0.92 | 30+ → 1.0
```

**All-round**: `round(Bat_Rating × Bowl_Rating / 1000)`

const TOURNAMENT_SCORECARDS = [
  {
    id: 't1',
    name: 'PBDCL Tournament 1 - 2026',
    date: '3 May 2026',
    format: '3 Teams - Super Three + Final',
    winner: 'Runner-Up Beaters',
    teams: [
      { name: 'Runner-Up Beaters', place: 1, players: ['GR Pranto', 'Mohammad Akash', 'Jayed Akbar Sumon', 'Nahid Hasan (Junior)', 'Aftab Uddin', 'Ejajur Rahman Redoy', 'Md Shafiul Haque Ankon'] },
      { name: 'The Lethal Force', place: 2, players: ['Hasibur Rahman', 'Nahid Hasan', 'Dipta Roy', 'Bayazid Bostame Sony', 'Sazzad Tanveer', 'Md Abdul Aziz', 'Md Borhan'] },
      { name: 'The Sovereign Seven', place: 3, players: ['Tanzim Ahmed', 'Samit Chowdhury', 'Sufian Ahmed', 'Mohammed Ridowan', 'Shahriar Ahmed', 'Md Noman', 'Md Shafayet Hossen Chowdhury'] }
    ],
    matches: [
      {
        label: 'Match 1', date: '2026-05-03, 07:34 UTC', team1: 'Runner-Up Beaters', team2: 'The Lethal Force',
        score1: '92/2 (9.0 Ov)', score2: '87/3 (9.0 Ov)', winner: 'Runner-Up Beaters', result: 'Runner-Up Beaters won by 5 runs', toss: 'The Lethal Force opted to field',
        bestBat: [['Nahid Hasan', '54 (35), 6 sixes'], ['Jayed Akbar Sumon', '30 (24)'], ['GR Pranto', '18* (3)']],
        bestBowl: [['Bayazid Bostame Sony', '1/11 (2.0)'], ['GR Pranto', '1/21 (3.0)'], ['Ejajur Rahman Redoy', '1/16 (2.0)']],
        squads: { 'Runner-Up Beaters': ['Aftab Uddin (c)', 'Ejajur Rahman Redoy', 'GR Pranto', 'Jayed Akbar Sumon', 'Md Shafiul Haque Ankon (wk)', 'Mohammad Akash', 'Nahid Hasan (Junior)'], 'The Lethal Force': ['Dipta Roy (c)', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Md Abdul Aziz (wk)', 'Md Borhan', 'Nahid Hasan', 'Sazzad Tanveer'] },
        innings: [
          { team: 'Runner-Up Beaters', score: '92/2 (9.0 Ov)', extras: '10 (wd 10)', fow: '30-1 (Mohammad Akash, 5 ov), 74-2 (Jayed Akbar Sumon, 8.3 ov)', bat: [['Jayed Akbar Sumon', 'b Nahid Hasan', 30, 24, 2, 0, '125.00'], ['Mohammad Akash', 'b Bayazid Bostame Sony', 16, 17, 2, 0, '94.12'], ['Aftab Uddin (c)', 'not out', 18, 10, 2, 1, '180.00'], ['GR Pranto', 'not out', 18, 3, 0, 3, '600.00']], bowl: [['Hasibur Rahman', '1.0', 9, 0, '9.00'], ['Bayazid Bostame Sony', '2.0', 11, 1, '5.50'], ['Nahid Hasan', '3.0', 35, 1, '11.67'], ['Sazzad Tanveer', '2.0', 14, 0, '7.00'], ['Md Abdul Aziz', '1.0', 23, 0, '23.00']] },
          { team: 'The Lethal Force', score: '87/3 (9.0 Ov)', extras: '8 (nb 4, wd 4)', fow: '4-1 (Hasibur Rahman, 1 ov), 25-2 (Md Abdul Aziz, 3.3 ov), 54-3 (Dipta Roy, 6.1 ov)', bat: [['Hasibur Rahman', 'c Md Shafiul Haque Ankon b GR Pranto', 3, 4, 0, 0, '75.00'], ['Nahid Hasan', 'not out', 54, 35, 0, 6, '154.29'], ['Md Abdul Aziz (wk)', 'c Md Shafiul Haque Ankon b Ejajur Rahman Redoy', 7, 7, 1, 0, '100.00'], ['Dipta Roy (c)', 'b Mohammad Akash', 9, 7, 0, 1, '128.57'], ['Bayazid Bostame Sony', 'not out', 6, 5, 1, 0, '120.00']], bowl: [['GR Pranto', '3.0', 21, 1, '7.00'], ['Nahid Hasan (Junior)', '2.0', 30, 0, '15.00'], ['Mohammad Akash', '2.0', 20, 1, '10.00'], ['Ejajur Rahman Redoy', '2.0', 16, 1, '8.00']] }
        ]
      },
      {
        label: 'Match 2', date: '2026-05-03, 09:36 UTC', team1: 'Runner-Up Beaters', team2: 'The Sovereign Seven',
        score1: '111/5 (9.0 Ov)', score2: '91/5 (9.0 Ov)', winner: 'Runner-Up Beaters', result: 'Runner-Up Beaters won by 20 runs', toss: 'Runner-Up Beaters opted to bat',
        bestBat: [['Mohammed Ridowan', '31* (19)'], ['Jayed Akbar Sumon', '30 (14)'], ['GR Pranto', '27 (19)']],
        bestBowl: [['Mohammed Ridowan', '3/32 (2.0)'], ['Md Shafayet Hossen Chowdhury', '2/7 (1.0)'], ['Ejajur Rahman Redoy', '2/7 (1.0)']],
        squads: { 'Runner-Up Beaters': ['Aftab Uddin (c)', 'Ejajur Rahman Redoy', 'GR Pranto', 'Jayed Akbar Sumon', 'Md Shafiul Haque Ankon (wk)', 'Mohammad Akash', 'Nahid Hasan (Junior)'], 'The Sovereign Seven': ['Samit Chowdhury (c)', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Mohammed Ridowan', 'Shahriar Ahmed (wk)', 'Sufian Ahmed', 'Tanzim Ahmed'] },
        innings: [
          { team: 'Runner-Up Beaters', score: '111/5 (9.0 Ov)', extras: '15 (nb 6, wd 9)', fow: '61-1 (GR Pranto, 4.2 ov), 66-2 (Jayed Akbar Sumon, 4.5 ov), 93-3 (Nahid Hasan (Junior), 7 ov), 104-4 (Md Shafiul Haque Ankon, 8.1 ov), 104-5 (Ejajur Rahman Redoy, 8.2 ov)', bat: [['Jayed Akbar Sumon', 'c Shahriar Ahmed b Mohammed Ridowan', 30, 14, 4, 1, '214.29'], ['GR Pranto', 'hit wkt b Mohammed Ridowan', 27, 19, 2, 2, '142.11'], ['Md Shafiul Haque Ankon (wk)', 'b Md Shafayet Hossen Chowdhury', 4, 9, 0, 0, '44.44'], ['Nahid Hasan (Junior) (wk)', 'c Samit Chowdhury b Mohammed Ridowan', 22, 8, 3, 1, '275.00'], ['Mohammad Akash', 'not out', 12, 7, 3, 0, '171.43'], ['Ejajur Rahman Redoy', 'c Shahriar Ahmed b Md Shafayet Hossen Chowdhury', 0, 1, 0, 0, '0.00'], ['Aftab Uddin (c)', 'not out', 1, 2, 0, 0, '50.00']], bowl: [['Sufian Ahmed', '1.0', 16, 0, '16.00'], ['Tanzim Ahmed', '3.0', 40, 0, '13.33'], ['Samit Chowdhury (c)', '2.0', 16, 0, '8.00'], ['Mohammed Ridowan', '2.0', 32, 3, '16.00'], ['Md Shafayet Hossen Chowdhury', '1.0', 7, 2, '7.00']] },
          { team: 'The Sovereign Seven', score: '91/5 (9.0 Ov)', extras: '11 (wd 10, nb 1)', fow: '17-1 (Sufian Ahmed, 1.5 ov), 23-2 (Tanzim Ahmed, 2.1 ov), 30-3 (Shahriar Ahmed, 2.5 ov), 45-4 (Samit Chowdhury, 4.2 ov), 87-5 (Md Shafayet Hossen Chowdhury, 8 ov)', bat: [['Tanzim Ahmed', 'c Jayed Akbar Sumon b Ejajur Rahman Redoy', 15, 8, 0, 1, '187.50'], ['Sufian Ahmed', 'c Md Shafiul Haque Ankon b Mohammad Akash', 1, 4, 0, 0, '25.00'], ['Shahriar Ahmed (wk)', 'c Nahid Hasan (Junior) b Ejajur Rahman Redoy', 6, 2, 0, 1, '300.00'], ['Samit Chowdhury (c)', 'b Mohammad Akash', 14, 8, 0, 2, '175.00'], ['Md Shafayet Hossen Chowdhury', 'b GR Pranto', 11, 12, 1, 0, '91.67'], ['Mohammed Ridowan', 'not out', 31, 19, 2, 2, '163.16'], ['Md Noman', 'not out', 2, 2, 0, 0, '100.00']], bowl: [['GR Pranto', '2.0', 15, 1, '7.50'], ['Mohammad Akash', '3.0', 24, 2, '8.00'], ['Ejajur Rahman Redoy', '1.0', 7, 2, '7.00'], ['Aftab Uddin (c)', '1.0', 11, 0, '11.00'], ['Md Shafiul Haque Ankon', '1.0', 12, 0, '12.00'], ['Nahid Hasan (Junior)', '1.0', 22, 0, '22.00']] }
        ]
      },
      {
        label: 'Match 3', date: '2026-05-03, 11:26 UTC', team1: 'The Sovereign Seven', team2: 'The Lethal Force',
        score1: '91/4 (9.0 Ov)', score2: '96/3 (8.3 Ov)', winner: 'The Lethal Force', result: 'The Lethal Force won by 3 wickets', toss: 'The Lethal Force opted to field',
        bestBat: [['Hasibur Rahman', '61* (27)'], ['Samit Chowdhury', '18 (9)'], ['Mohammed Ridowan', '17* (9)']],
        bestBowl: [['Md Shafayet Hossen Chowdhury', '3/24 (2.0)'], ['Nahid Hasan', '1/24 (3.0)'], ['Md Abdul Aziz', '1/8 (1.0)']],
        squads: { 'The Sovereign Seven': ['Samit Chowdhury (c)', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Mohammed Ridowan', 'Shahriar Ahmed', 'Sufian Ahmed', 'Tanzim Ahmed'], 'The Lethal Force': ['Dipta Roy (c)', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Md Abdul Aziz', 'Md Borhan', 'Nahid Hasan', 'Sazzad Tanveer'] },
        innings: [
          { team: 'The Sovereign Seven', score: '91/4 (9.0 Ov)', extras: '11 (wd 9, nb 2)', fow: '36-1 (Samit Chowdhury, 3.1 ov), 41-2 (Tanzim Ahmed, 3.3 ov), 54-3 (Md Noman, 5.4 ov), 86-4 (Sufian Ahmed, 8.3 ov)', bat: [['Tanzim Ahmed', 'run out Hasibur Rahman', 16, 11, 1, 0, '145.45'], ['Samit Chowdhury (c)', 'b Sazzad Tanveer', 18, 9, 0, 2, '200.00'], ['Md Noman', 'st Md Abdul Aziz b Nahid Hasan', 11, 12, 2, 0, '91.67'], ['Sufian Ahmed', 'c Nahid Hasan b Md Abdul Aziz', 15, 13, 0, 0, '115.38'], ['Mohammed Ridowan', 'not out', 17, 9, 2, 1, '188.89'], ['Shahriar Ahmed', 'not out', 3, 2, 0, 0, '150.00']], bowl: [['Hasibur Rahman', '1.0', 12, 0, '12.00'], ['Bayazid Bostame Sony', '2.0', 16, 0, '8.00'], ['Nahid Hasan', '3.0', 24, 1, '8.00'], ['Sazzad Tanveer', '2.0', 31, 1, '15.50'], ['Md Abdul Aziz', '1.0', 8, 1, '8.00']] },
          { team: 'The Lethal Force', score: '96/3 (8.3 Ov)', extras: '10 (wd 8, nb 2)', fow: '38-1 (Nahid Hasan, 3.2 ov), 39-2 (Md Borhan, 3.3 ov), 63-3 (Dipta Roy, 6 ov)', bat: [['Hasibur Rahman', 'not out', 61, 27, 3, 6, '225.93'], ['Nahid Hasan', 'c Samit Chowdhury b Md Shafayet Hossen Chowdhury', 13, 10, 1, 1, '130.00'], ['Md Borhan', 'b Md Shafayet Hossen Chowdhury', 0, 1, 0, 0, '0.00'], ['Dipta Roy (c)', 'c Tanzim Ahmed b Md Shafayet Hossen Chowdhury', 5, 8, 0, 0, '62.50'], ['Bayazid Bostame Sony', 'not out', 7, 7, 0, 0, '100.00']], bowl: [['Tanzim Ahmed', '3.0', 30, 0, '10.00'], ['Samit Chowdhury (c)', '2.0', 15, 0, '7.50'], ['Sufian Ahmed', '1.0', 19, 0, '19.00'], ['Md Shafayet Hossen Chowdhury', '2.0', 24, 3, '12.00'], ['Mohammed Ridowan', '0.3', 8, 0, '16.00']] }
        ]
      },
      {
        label: 'Final', date: '2026-05-03, 13:18 UTC', team1: 'Runner-Up Beaters', team2: 'The Lethal Force',
        score1: '117/1 (9.0 Ov)', score2: '105/4 (9.0 Ov)', winner: 'Runner-Up Beaters', result: 'Runner-Up Beaters won by 12 runs', toss: 'Runner-Up Beaters opted to bat',
        bestBat: [['GR Pranto', '70* (30)'], ['Dipta Roy', '50* (21)'], ['Hasibur Rahman', '18 (11)']],
        bestBowl: [['Aftab Uddin', '2/16 (2.0)'], ['Ejajur Rahman Redoy', '2/25 (2.0)'], ['Nahid Hasan', '1/30 (3.0)']],
        squads: { 'Runner-Up Beaters': ['Aftab Uddin (c)', 'Ejajur Rahman Redoy', 'GR Pranto', 'Jayed Akbar Sumon', 'Md Shafiul Haque Ankon (wk)', 'Mohammad Akash', 'Nahid Hasan (Junior)'], 'The Lethal Force': ['Dipta Roy (c)', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Md Abdul Aziz', 'Md Borhan', 'Nahid Hasan', 'Sazzad Tanveer'] },
        innings: [
          { team: 'Runner-Up Beaters', score: '117/1 (9.0 Ov)', extras: '20 (wd 17, nb 3)', fow: '7-1 (Jayed Akbar Sumon, 1.1 ov), 43-1 (Nahid Hasan (Junior), 5 ov - retired hurt)', bat: [['Jayed Akbar Sumon', 'c Dipta Roy b Nahid Hasan', 6, 6, 1, 0, '100.00'], ['GR Pranto', 'not out', 70, 30, 3, 7, '233.33'], ['Nahid Hasan (Junior)', 'retired hurt', 7, 13, 0, 0, '53.85'], ['Mohammad Akash', 'not out', 14, 9, 0, 1, '155.56']], bowl: [['Hasibur Rahman', '1.0', 7, 0, '7.00'], ['Nahid Hasan', '3.0', 30, 1, '10.00'], ['Bayazid Bostame Sony', '2.0', 19, 0, '9.50'], ['Sazzad Tanveer', '2.0', 25, 0, '12.50'], ['Md Abdul Aziz', '1.0', 36, 0, '36.00']] },
          { team: 'The Lethal Force', score: '105/4 (9.0 Ov)', extras: '11 (wd 10, nb 1)', fow: '24-1 (Nahid Hasan, 2.5 ov), 26-2 (Sazzad Tanveer, 3.4 ov), 45-3 (Hasibur Rahman, 5 ov), 105-4 (Bayazid Bostame Sony, 9 ov)', bat: [['Hasibur Rahman', 'c Md Shafiul Haque Ankon b Ejajur Rahman Redoy', 18, 11, 1, 1, '163.64'], ['Nahid Hasan', 'c Md Shafiul Haque Ankon b Ejajur Rahman Redoy', 10, 11, 0, 1, '90.91'], ['Sazzad Tanveer', 'c Nahid Hasan (Junior) b Aftab Uddin', 0, 4, 0, 0, '0.00'], ['Dipta Roy (c)', 'not out', 50, 21, 0, 6, '238.10'], ['Bayazid Bostame Sony', 'b Aftab Uddin', 16, 8, 2, 1, '200.00']], bowl: [['GR Pranto', '3.0', 31, 0, '10.33'], ['Mohammad Akash', '2.0', 33, 0, '16.50'], ['Ejajur Rahman Redoy', '2.0', 25, 2, '12.50'], ['Aftab Uddin (c)', '2.0', 16, 2, '8.00']] }
        ]
      }
    ]
  },
  {
    id: 't2',
    name: 'PBDCL Tournament 2 - 2026',
    date: '17 May 2026',
    format: '3 Teams - Super Three + Final',
    winner: 'House of Retired Hurt',
    teams: [
      { name: 'House of Retired Hurt', place: 1, players: ['Abdullah Al Noman', 'Ejajur Rahman Redoy', 'GR Pranto', 'Hasibur Rahman', 'Iftekhar A', 'Md Shafiul Haque Ankon', 'Nahid Hasan (Junior)', 'Sufian Ahmed'] },
      { name: 'House of Lords', place: 2, players: ['Sazzad Tanveer', 'Ataullah Khan Rifat', 'Biplob Hossain', 'Borshon Gomes', 'Dipta Roy', 'Md Noman', 'Mohammad Akash', 'S M Kamrul Hasan Manik'] },
      { name: 'Murobbis Dream', place: 3, players: ['Tanzim Ahmed', 'Bayazid Bostame Sony', 'Jayed Akbar Sumon', 'Md Abdul Aziz', 'Mohammed Ridowan', 'Nahid Hasan', 'Sir Hossain', 'Sopon Ahmed'] }
    ],
    matches: [
      {
        label: 'Match 1', date: '2026-05-17, 08:00 UTC', team1: 'House of Lords', team2: 'Murobbis Dream',
        score1: '81/4 (10.0 Ov)', score2: '82/4 (9.0 Ov)', winner: 'Murobbis Dream', result: 'Murobbis Dream won by 3 wickets', toss: 'Murobbis Dream opted to field',
        bestBat: [['Nahid Hasan', '24 (21)'], ['Sazzad Tanveer', '23 (27)'], ['Dipta Roy', '21* (10)']],
        bestBowl: [['Borshon Gomes', '2/24 (2.0)'], ['Tanzim Ahmed', '1/9 (3.0)'], ['Biplob Hossain', '1/6 (1.0)']],
        squads: { 'House of Lords': ['Sazzad Tanveer (c)', 'Ataullah Khan Rifat', 'Biplob Hossain', 'Borshon Gomes', 'Dipta Roy', 'Md Noman', 'Mohammad Akash', 'S M Kamrul Hasan Manik'], 'Murobbis Dream': ['Tanzim Ahmed (c)', 'Bayazid Bostame Sony', 'Jayed Akbar Sumon', 'Md Abdul Aziz', 'Mohammed Ridowan', 'Nahid Hasan', 'Sir Hossain', 'Sopon Ahmed'] },
        innings: [
          { team: 'House of Lords', score: '81/4 (10.0 Ov)', extras: '22 (wd 15, nb 7)', fow: '47-1 (Mohammad Akash, 6 ov), 47-2 (Md Noman, 6.3 ov), 56-3 (Ataullah Khan Rifat, 7.3 ov), 77-4 (Sazzad Tanveer, 9 ov)', bat: [['Mohammad Akash', 'b Bayazid Bostame Sony', 12, 20, 0, 1, '60.00'], ['Sazzad Tanveer (c)', 'c Mohammed Ridowan b Nahid Hasan', 23, 27, 1, 1, '85.19'], ['Md Noman', 'b Sir Hossain', 0, 3, 0, 0, '0.00'], ['Ataullah Khan Rifat', 'b Tanzim Ahmed', 3, 3, 0, 0, '100.00'], ['Dipta Roy', 'not out', 21, 10, 1, 2, '210.00'], ['Biplob Hossain', 'not out', 0, 4, 0, 0, '0.00']], bowl: [['Tanzim Ahmed (c)', '3.0', 9, 1, '3.00'], ['Bayazid Bostame Sony', '2.0', 16, 1, '8.00'], ['Nahid Hasan', '2.0', 36, 1, '18.00'], ['Sir Hossain', '2.0', 13, 1, '6.50'], ['Mohammed Ridowan', '1.0', 7, 0, '7.00']] },
          { team: 'Murobbis Dream', score: '82/4 (9.0 Ov)', extras: '22 (wd 18, nb 4)', fow: '42-1 (Nahid Hasan, 4.2 ov), 43-2 (Md Abdul Aziz, 4.3 ov), 53-3 (Tanzim Ahmed, 5.5 ov), 80-4 (Jayed Akbar Sumon, 8.5 ov)', bat: [['Jayed Akbar Sumon', 'b Biplob Hossain', 19, 20, 1, 0, '95.00'], ['Nahid Hasan', 'c Dipta Roy b Borshon Gomes', 24, 21, 2, 2, '114.29'], ['Md Abdul Aziz', 'b Borshon Gomes', 0, 1, 0, 0, '0.00'], ['Tanzim Ahmed (c)', 'c Dipta Roy b Sazzad Tanveer', 5, 5, 0, 0, '100.00'], ['Bayazid Bostame Sony', 'not out', 10, 10, 0, 1, '100.00'], ['Mohammed Ridowan', 'not out', 2, 1, 0, 0, '200.00']], bowl: [['Mohammad Akash', '2.0', 12, 0, '6.00'], ['Ataullah Khan Rifat', '2.0', 17, 0, '8.50'], ['Sazzad Tanveer (c)', '2.0', 23, 1, '11.50'], ['Borshon Gomes', '2.0', 24, 2, '12.00'], ['Biplob Hossain', '1.0', 6, 1, '6.00']] }
        ]
      },
      {
        label: 'Match 2', date: '2026-05-17, 09:41 UTC', team1: 'House of Retired Hurt', team2: 'House of Lords',
        score1: '76/5 (10.0 Ov)', score2: '77/5 (8.5 Ov)', winner: 'House of Lords', result: 'House of Lords won by 2 wickets', toss: 'House of Lords opted to field',
        bestBat: [['Hasibur Rahman', '34 (29)'], ['Dipta Roy', '33* (32)'], ['GR Pranto', '16 (16)']],
        bestBowl: [['Ataullah Khan Rifat', '2/11 (3.0)'], ['Hasibur Rahman', '2/4 (0.5)'], ['GR Pranto', '2/17 (2.0)']],
        squads: { 'House of Retired Hurt': ['Abdullah Al Noman (c)', 'Ejajur Rahman Redoy', 'GR Pranto', 'Hasibur Rahman', 'Iftekhar A', 'Md Shafiul Haque Ankon', 'Nahid Hasan (Junior)', 'Sufian Ahmed'], 'House of Lords': ['Sazzad Tanveer (c)', 'Ataullah Khan Rifat', 'Biplob Hossain', 'Borshon Gomes', 'Dipta Roy', 'Md Noman', 'Mohammad Akash', 'S M Kamrul Hasan Manik'] },
        innings: [
          { team: 'House of Retired Hurt', score: '76/5 (10.0 Ov)', extras: '11 (wd 10, nb 1)', fow: '11-1 (Sufian Ahmed, 2 ov), 12-2 (Md Shafiul Haque Ankon, 2.1 ov), 55-3 (GR Pranto, 7.2 ov), 66-4 (Nahid Hasan (Junior), 8.3 ov), 69-5 (Hasibur Rahman, 9.1 ov)', bat: [['Hasibur Rahman', 'b Sazzad Tanveer', 34, 29, 2, 2, '117.24'], ['Sufian Ahmed', 'c S M Kamrul Hasan Manik b Ataullah Khan Rifat', 2, 4, 0, 0, '50.00'], ['Md Shafiul Haque Ankon', 'run out Ataullah Khan Rifat / Mohammad Akash', 0, 0, 0, 0, '0.00'], ['GR Pranto', 'b Biplob Hossain', 16, 16, 1, 1, '100.00'], ['Nahid Hasan (Junior)', 'b Ataullah Khan Rifat', 9, 5, 0, 1, '180.00'], ['Abdullah Al Noman (c)', 'not out', 2, 3, 0, 0, '66.67'], ['Ejajur Rahman Redoy', 'not out', 2, 4, 0, 0, '50.00']], bowl: [['Mohammad Akash', '2.0', 17, 0, '8.50'], ['Ataullah Khan Rifat', '3.0', 11, 2, '3.67'], ['Sazzad Tanveer (c)', '2.0', 22, 1, '11.00'], ['Biplob Hossain', '2.0', 19, 1, '9.50'], ['Borshon Gomes', '1.0', 7, 0, '7.00']] },
          { team: 'House of Lords', score: '77/5 (8.5 Ov)', extras: '13 (wd 7, nb 6)', fow: '9-1 (Sazzad Tanveer, 0.3 ov), 9-2 (S M Kamrul Hasan Manik, 0.4 ov), 46-3 (Mohammad Akash, 6 ov), 73-4 (Ataullah Khan Rifat, 8.2 ov), 73-5 (Md Noman, 8.3 ov)', bat: [['Sazzad Tanveer (c)', 'b GR Pranto', 8, 3, 0, 1, '266.67'], ['Dipta Roy', 'not out', 33, 32, 1, 3, '103.12'], ['S M Kamrul Hasan Manik', 'b GR Pranto', 0, 1, 0, 0, '0.00'], ['Mohammad Akash', 'b Abdullah Al Noman', 15, 14, 1, 1, '107.14'], ['Ataullah Khan Rifat', 'b Hasibur Rahman', 4, 6, 0, 0, '66.67'], ['Md Noman', 'b Hasibur Rahman', 0, 1, 0, 0, '0.00'], ['Biplob Hossain', 'not out', 4, 2, 0, 0, '200.00']], bowl: [['GR Pranto', '2.0', 17, 2, '8.50'], ['Sufian Ahmed', '3.0', 24, 0, '8.00'], ['Nahid Hasan (Junior)', '2.0', 14, 0, '7.00'], ['Abdullah Al Noman (c)', '1.0', 18, 1, '18.00'], ['Hasibur Rahman', '0.5', 4, 2, '4.80']] }
        ]
      },
      {
        label: 'Match 3', date: '2026-05-17, 11:27 UTC', team1: 'Murobbis Dream', team2: 'House of Retired Hurt',
        score1: '73/6 (10.0 Ov)', score2: '74/4 (8.4 Ov)', winner: 'House of Retired Hurt', result: 'House of Retired Hurt won by 3 wickets', toss: 'House of Retired Hurt opted to field',
        bestBat: [['Hasibur Rahman', '57* (29)'], ['Nahid Hasan', '27* (26)'], ['Sir Hossain', '8 (3)']],
        bestBowl: [['Tanzim Ahmed', '3/11 (3.0)'], ['GR Pranto', '3/27 (3.0)'], ['Abdullah Al Noman', '1/5 (2.0)']],
        squads: { 'Murobbis Dream': ['Tanzim Ahmed (c)', 'Bayazid Bostame Sony', 'Jayed Akbar Sumon', 'Md Abdul Aziz', 'Mohammed Ridowan', 'Nahid Hasan', 'Sir Hossain', 'Sopon Ahmed'], 'House of Retired Hurt': ['Md Shafiul Haque Ankon (c)', 'Abdullah Al Noman', 'Ejajur Rahman Redoy', 'GR Pranto', 'Hasibur Rahman', 'Iftekhar A', 'Nahid Hasan (Junior)', 'Sufian Ahmed'] },
        innings: [
          { team: 'Murobbis Dream', score: '73/6 (10.0 Ov)', extras: '13 (wd 10, nb 3)', fow: '10-1 (Jayed Akbar Sumon, 2 ov), 18-2 (Sopon Ahmed, 3.1 ov), 36-3 (Tanzim Ahmed, 5.1 ov), 49-4 (Bayazid Bostame Sony, 6.1 ov), 63-5 (Mohammed Ridowan, 8.3 ov), 73-6 (Sir Hossain, 10 ov)', bat: [['Jayed Akbar Sumon', 'c Sufian Ahmed b GR Pranto', 7, 9, 1, 0, '77.78'], ['Nahid Hasan', 'not out', 27, 26, 0, 3, '103.85'], ['Sopon Ahmed', 'c Md Shafiul Haque Ankon b Sufian Ahmed', 1, 4, 0, 0, '25.00'], ['Tanzim Ahmed (c)', 'c Abdullah Al Noman b GR Pranto', 7, 7, 1, 0, '100.00'], ['Bayazid Bostame Sony', 'b Abdullah Al Noman', 2, 4, 0, 0, '50.00'], ['Mohammed Ridowan', 'c Md Shafiul Haque Ankon b GR Pranto', 8, 10, 0, 1, '80.00'], ['Sir Hossain', 'run out Md Shafiul Haque Ankon', 8, 3, 0, 1, '266.67']], bowl: [['Nahid Hasan (Junior)', '2.0', 14, 0, '7.00'], ['GR Pranto', '3.0', 27, 3, '9.00'], ['Hasibur Rahman', '1.0', 8, 0, '8.00'], ['Sufian Ahmed', '2.0', 19, 1, '9.50'], ['Abdullah Al Noman', '2.0', 5, 1, '2.50']] },
          { team: 'House of Retired Hurt', score: '74/4 (8.4 Ov)', extras: '9 (wd 8, nb 1)', fow: '5-1 (GR Pranto, 1.2 ov), 22-2 (Iftekhar A, 3.3 ov), 26-3 (Sufian Ahmed, 4 ov), 45-4 (Nahid Hasan (Junior), 5.4 ov)', bat: [['Hasibur Rahman', 'not out', 57, 29, 4, 4, '196.55'], ['GR Pranto', 'c Nahid Hasan b Bayazid Bostame Sony', 1, 4, 0, 0, '25.00'], ['Iftekhar A', 'b Tanzim Ahmed', 2, 6, 0, 0, '33.33'], ['Sufian Ahmed', 'b Tanzim Ahmed', 1, 3, 0, 0, '33.33'], ['Nahid Hasan (Junior)', 'b Tanzim Ahmed', 4, 5, 0, 0, '80.00'], ['Abdullah Al Noman', 'not out', 0, 6, 0, 0, '0.00']], bowl: [['Tanzim Ahmed (c)', '3.0', 11, 3, '3.67'], ['Bayazid Bostame Sony', '2.0', 26, 1, '13.00'], ['Nahid Hasan', '2.0', 8, 0, '4.00'], ['Sir Hossain', '1.4', 29, 0, '17.40']] }
        ]
      },
      {
        label: 'Final', date: '2026-05-17, 13:07 UTC', team1: 'House of Retired Hurt', team2: 'House of Lords',
        score1: '97/5 (10.0 Ov)', score2: '96/6 (10.0 Ov)', winner: 'House of Retired Hurt', result: 'House of Retired Hurt won by 1 run', toss: 'House of Lords opted to field',
        bestBat: [['Mohammad Akash', '60 (37)'], ['GR Pranto', '50 (30)'], ['Sufian Ahmed', '17 (12)']],
        bestBowl: [['Borshon Gomes', '2/5 (1.0)'], ['Ataullah Khan Rifat', '1/19 (3.0)'], ['Hasibur Rahman', '1/16 (2.0)']],
        squads: { 'House of Retired Hurt': ['Abdullah Al Noman (c)', 'Ejajur Rahman Redoy', 'GR Pranto', 'Hasibur Rahman', 'Iftekhar A', 'Md Shafiul Haque Ankon', 'Nahid Hasan (Junior)', 'Sufian Ahmed'], 'House of Lords': ['Sazzad Tanveer (c)', 'Ataullah Khan Rifat', 'Biplob Hossain', 'Borshon Gomes', 'Dipta Roy', 'Md Noman', 'Mohammad Akash', 'S M Kamrul Hasan Manik'] },
        innings: [
          { team: 'House of Retired Hurt', score: '97/5 (10.0 Ov)', extras: '13 (wd 10, nb 3)', fow: '73-1 (GR Pranto, 7 ov), 77-2 (Nahid Hasan (Junior), 7.4 ov), 78-3 (Hasibur Rahman, 8 ov), 81-4 (Md Shafiul Haque Ankon, 8.5 ov), 97-5 (Sufian Ahmed, 10 ov)', bat: [['Hasibur Rahman', 'c Sazzad Tanveer b Borshon Gomes', 16, 16, 2, 0, '100.00'], ['GR Pranto', 'b Sazzad Tanveer', 50, 30, 1, 5, '166.67'], ['Nahid Hasan (Junior)', 'c Ataullah Khan Rifat b Borshon Gomes', 0, 2, 0, 0, '0.00'], ['Sufian Ahmed', 'c Md Noman b Biplob Hossain', 17, 12, 0, 2, '141.67'], ['Md Shafiul Haque Ankon', 'c Biplob Hossain b Ataullah Khan Rifat', 1, 2, 0, 0, '50.00'], ['Ejajur Rahman Redoy', 'not out', 0, 1, 0, 0, '0.00']], bowl: [['Mohammad Akash', '2.0', 20, 0, '10.00'], ['Ataullah Khan Rifat', '3.0', 19, 1, '6.33'], ['Sazzad Tanveer (c)', '2.0', 18, 1, '9.00'], ['Biplob Hossain', '2.0', 35, 1, '17.50'], ['Borshon Gomes', '1.0', 5, 2, '5.00']] },
          { team: 'House of Lords', score: '96/6 (10.0 Ov)', extras: '14 (wd 11, nb 3)', fow: '31-1 (Dipta Roy, 4.1 ov), 44-2 (Sazzad Tanveer, 5.2 ov), 64-3 (Ataullah Khan Rifat, 7.3 ov), 87-4 (Biplob Hossain, 9 ov), 94-5 (Mohammad Akash, 9.5 ov), 96-6 (Md Noman, 10 ov)', bat: [['Mohammad Akash', 'run out Nahid Hasan (Junior)', 60, 37, 4, 6, '162.16'], ['Dipta Roy', 'b Abdullah Al Noman', 4, 10, 0, 0, '40.00'], ['Sazzad Tanveer (c)', 'b Hasibur Rahman', 2, 4, 0, 0, '50.00'], ['Ataullah Khan Rifat', 'b Nahid Hasan (Junior)', 8, 5, 0, 1, '160.00'], ['Biplob Hossain', 'run out Abdullah Al Noman / Md Shafiul Haque Ankon', 7, 5, 0, 1, '140.00'], ['Md Noman', 'run out Abdullah Al Noman', 0, 0, 0, 0, '0.00'], ['Borshon Gomes', 'not out', 1, 2, 0, 0, '50.00']], bowl: [['Nahid Hasan (Junior)', '2.0', 23, 1, '11.50'], ['GR Pranto', '3.0', 18, 0, '6.00'], ['Sufian Ahmed', '1.0', 14, 0, '14.00'], ['Abdullah Al Noman (c)', '2.0', 25, 1, '12.50'], ['Hasibur Rahman', '2.0', 16, 1, '8.00']] }
        ]
      }
    ]
  },
  {
    id: 't3',
    name: 'PCL Season 3 - 2026',
    date: '7 Jun 2026',
    format: '3 Teams - Super Three + Final',
    winner: 'Panoti Boys',
    teams: [
      { name: 'Panoti Boys', place: 1, players: ['Sufian Ahmed', 'Jayed Akbar Sumon', 'Nahid Hasan', 'Sazzad Tanveer', 'Ejajur Rahman Redoy', 'Shahriar Ahmed', 'Borshon Gomes'] },
      { name: 'Bullet Club', place: 2, players: ['Mohammed Ridowan', 'Hasibul Hasan Shanto', 'Tanzim Ahmed', 'Dipta Roy', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Biplob Hossain'] },
      { name: 'Living Legends', place: 3, players: ['Ataullah Khan Rifat', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Jubair Chowdhury', 'Md Shafiul Haque Ankon', 'Mohammad Akash', 'S M Kamrul Hasan Manik'] }
    ],
    matches: [
      {
        label: 'Super Three · Match 1', date: '7 Jun 2026',
        team1: 'Panoti Boys', team2: 'Living Legends',
        score1: '96/5 (10 Ov)', score2: '97/4 (9.3 Ov)',
        winner: 'Living Legends', result: 'Living Legends won by 2 wickets', toss: 'Living Legends opt to field',
        bestBat: [['Sufian Ahmed', '50* (22), 5 sixes'], ['Ataullah Khan Rifat', '47 (29), 3 sixes'], ['Hasibur Rahman', '21 (10), 2 sixes']],
        bestBowl: [['Nahid Hasan', '2/14 (3.0)'], ['Mohammad Akash', '2/14 (2.0)'], ['Ataullah Khan Rifat', '2/11 (3.0)']],
        squads: {
          'Panoti Boys': ['Sufian Ahmed (c)', 'Jayed Akbar Sumon (wk)', 'Nahid Hasan', 'Sazzad Tanveer', 'Ejajur Rahman Redoy', 'Shahriar Ahmed', 'Borshon Gomes'],
          'Living Legends': ['Md Shafiul Haque Ankon (c & wk)', 'Ataullah Khan Rifat', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Jubair Chowdhury', 'Mohammad Akash', 'S M Kamrul Hasan Manik']
        },
        innings: [
          {
            team: 'Panoti Boys', score: '96/5 (10 Ov)', extras: '6 (wd 5, nb 1)',
            fow: '7-1 (Nahid Hasan, 2.4 ov), 27-2 (Jayed Akbar Sumon, 3.5 ov), 84-3 (Shahriar Ahmed, 8.2 ov), 92-4 (Ejajur Rahman Redoy, 9 ov), 96-5 (Sazzad Tanveer, 9.5 ov)',
            bat: [
              ['Jayed Akbar Sumon (wk)', 'c †Md Shafiul Haque Ankon b Jubair Chowdhury', 21, 12, 0, 3, '175.00'],
              ['Nahid Hasan', 'b Ataullah Khan Rifat', 4, 10, 0, 0, '40.00'],
              ['Shahriar Ahmed', 'b Mohammad Akash', 10, 11, 1, 0, '90.91'],
              ['Sufian Ahmed (c)', 'not out', 50, 22, 1, 5, '227.27'],
              ['Ejajur Rahman Redoy', 'c Ataullah Khan Rifat b Mohammad Akash', 5, 3, 1, 0, '166.67'],
              ['Sazzad Tanveer', 'b Ataullah Khan Rifat', 0, 2, 0, 0, '0.00'],
              ['Borshon Gomes', 'not out', 0, 1, 0, 0, '0.00']
            ],
            bowl: [
              ['Mohammad Akash', '2.0', 14, 2, '7.00'],
              ['Bayazid Bostame Sony', '2.0', 15, 0, '7.50'],
              ['Ataullah Khan Rifat', '3.0', 11, 2, '3.67'],
              ['Jubair Chowdhury', '2.0', 45, 1, '22.50'],
              ['Hasibur Rahman', '1.0', 11, 0, '11.00']
            ]
          },
          {
            team: 'Living Legends', score: '97/4 (9.3 Ov)', extras: '17 (wd 16, nb 1)',
            fow: '6-1 (Mohammad Akash, 1.5 ov), 24-2 (Md Shafiul Haque Ankon, 3.5 ov), 89-3 (Hasibur Rahman, 8.2 ov), 94-4 (Ataullah Khan Rifat, 9.1 ov)',
            bat: [
              ['Mohammad Akash', 'c Shahriar Ahmed b Nahid Hasan', 1, 6, 0, 0, '16.67'],
              ['Ataullah Khan Rifat', 'c Sazzad Tanveer b Borshon Gomes', 47, 29, 5, 3, '162.07'],
              ['Md Shafiul Haque Ankon (c & wk)', 'b Ejajur Rahman Redoy', 8, 8, 1, 0, '100.00'],
              ['Hasibur Rahman', 'c †Jayed Akbar Sumon b Nahid Hasan', 21, 10, 1, 2, '210.00'],
              ['Bayazid Bostame Sony', 'not out', 2, 4, 0, 0, '50.00'],
              ['Jubair Chowdhury', 'not out', 1, 1, 0, 0, '100.00']
            ],
            bowl: [
              ['Ejajur Rahman Redoy', '2.0', 10, 1, '5.00'],
              ['Nahid Hasan', '3.0', 14, 2, '4.67'],
              ['Sufian Ahmed (c)', '2.0', 35, 0, '17.50'],
              ['Sazzad Tanveer', '2.0', 35, 0, '17.50'],
              ['Borshon Gomes', '0.3', 3, 1, '6.00']
            ]
          }
        ]
      },
      {
        label: 'Super Three · Match 2', date: '7 Jun 2026',
        team1: 'Bullet Club', team2: 'Panoti Boys',
        score1: '69/5 (10 Ov)', score2: '70/3 (9.1 Ov)',
        winner: 'Panoti Boys', result: 'Panoti Boys won by 3 wickets', toss: 'Bullet Club opt to bat',
        bestBat: [['Dipta Roy', '28* (30)'], ['Sufian Ahmed', '20* (18)'], ['Mohammed Ridowan', '14 (17)']],
        bestBowl: [['Ejajur Rahman Redoy', '2/18 (2.0)'], ['Hasibul Hasan Shanto', '1/12 (3.0)'], ['Tanzim Ahmed', '1/10 (2.0)']],
        squads: {
          'Bullet Club': ['Mohammed Ridowan (c)', 'Hasibul Hasan Shanto', 'Tanzim Ahmed', 'Dipta Roy', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Biplob Hossain'],
          'Panoti Boys': ['Sufian Ahmed (c)', 'Jayed Akbar Sumon (wk)', 'Nahid Hasan', 'Sazzad Tanveer', 'Ejajur Rahman Redoy', 'Shahriar Ahmed', 'Borshon Gomes']
        },
        innings: [
          {
            team: 'Bullet Club', score: '69/5 (10 Ov)', extras: '17 (wd 15, nb 2)',
            fow: '13-1 (Tanzim Ahmed, 1.5 ov), 13-2 (Md Noman, 2 ov), 13-3 (Hasibul Hasan Shanto, 2.1 ov), 65-4 (Mohammed Ridowan, 8.4 ov), 67-5 (Md Shafayet Hossen Chowdhury, 9 ov)',
            bat: [
              ['Hasibul Hasan Shanto', 'c Nahid Hasan b Sufian Ahmed', 3, 6, 0, 0, '50.00'],
              ['Tanzim Ahmed', 'c Jayed Akbar Sumon b Ejajur Rahman Redoy', 7, 6, 0, 0, '116.67'],
              ['Md Noman', 'c Sazzad Tanveer b Ejajur Rahman Redoy', 0, 1, 0, 0, '0.00'],
              ['Dipta Roy', 'not out', 28, 30, 2, 1, '93.33'],
              ['Mohammed Ridowan (c)', 'run out (Ejajur Rahman Redoy)', 14, 17, 1, 0, '82.35'],
              ['Md Shafayet Hossen Chowdhury', 'c Borshon Gomes b Nahid Hasan', 0, 2, 0, 0, '0.00'],
              ['Biplob Hossain', 'not out', 0, 0, 0, 0, '—']
            ],
            bowl: [
              ['Sufian Ahmed (c)', '2.0', 14, 1, '7.00'],
              ['Ejajur Rahman Redoy', '2.0', 18, 2, '9.00'],
              ['Nahid Hasan', '3.0', 23, 1, '7.67'],
              ['Sazzad Tanveer', '1.0', 9, 0, '9.00'],
              ['Borshon Gomes', '2.0', 5, 0, '2.50']
            ]
          },
          {
            team: 'Panoti Boys', score: '70/3 (9.1 Ov)', extras: '7 (wd 5, nb 2)',
            fow: '35-1 (Nahid Hasan, 4.4 ov), 43-2 (Ejajur Rahman Redoy, 5.2 ov), 47-3 (Jayed Akbar Sumon, 6.1 ov)',
            bat: [
              ['Jayed Akbar Sumon (wk)', 'b Tanzim Ahmed', 18, 18, 1, 0, '100.00'],
              ['Nahid Hasan', 'c Hasibul Hasan Shanto b Md Shafayet Hossen Chowdhury', 17, 14, 1, 0, '121.43'],
              ['Ejajur Rahman Redoy', 'c Mohammed Ridowan b Hasibul Hasan Shanto', 6, 3, 0, 1, '200.00'],
              ['Sufian Ahmed (c)', 'not out', 20, 18, 1, 1, '111.11'],
              ['Shahriar Ahmed', 'not out', 2, 4, 0, 0, '50.00']
            ],
            bowl: [
              ['Mohammed Ridowan (c)', '2.0', 20, 0, '10.00'],
              ['Hasibul Hasan Shanto', '3.0', 12, 1, '4.00'],
              ['Tanzim Ahmed', '2.0', 10, 1, '5.00'],
              ['Md Shafayet Hossen Chowdhury', '2.0', 21, 1, '10.50'],
              ['Dipta Roy', '0.1', 7, 0, '42.00']
            ]
          }
        ]
      },
      {
        label: 'Super Three · Match 3', date: '7 Jun 2026',
        team1: 'Bullet Club', team2: 'Living Legends',
        score1: '101/2 (10 Ov)', score2: '75/6 (10 Ov)',
        winner: 'Bullet Club', result: 'Bullet Club won by 26 runs', toss: 'Living Legends opt to field',
        bestBat: [['Ataullah Khan Rifat', '41 (24), 4 sixes'], ['Tanzim Ahmed', '31* (16), 3 sixes'], ['Mohammed Ridowan', '29* (20), 2 sixes']],
        bestBowl: [['Mohammed Ridowan', '3/13 (2.0)'], ['Hasibul Hasan Shanto', '2/12 (2.0)'], ['Bayazid Bostame Sony', '2/12 (2.0)']],
        squads: {
          'Bullet Club': ['Mohammed Ridowan (c & wk)', 'Hasibul Hasan Shanto', 'Tanzim Ahmed', 'Dipta Roy', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Biplob Hossain'],
          'Living Legends': ['Ataullah Khan Rifat (c)', 'Md Shafiul Haque Ankon (wk)', 'Bayazid Bostame Sony', 'Hasibur Rahman', 'Jubair Chowdhury', 'Mohammad Akash', 'S M Kamrul Hasan Manik']
        },
        innings: [
          {
            team: 'Bullet Club', score: '101/2 (10 Ov)', extras: '7 (wd 4, nb 3)',
            fow: '10-1 (Hasibul Hasan Shanto, 1.4 ov), 68-2 (Dipta Roy, 7.2 ov)',
            bat: [
              ['Hasibul Hasan Shanto', 'c †Md Shafiul Haque Ankon b Bayazid Bostame Sony', 6, 6, 1, 0, '100.00'],
              ['Dipta Roy', 'c †Md Shafiul Haque Ankon b Bayazid Bostame Sony', 28, 21, 1, 2, '133.33'],
              ['Mohammed Ridowan (c & wk)', 'not out', 29, 20, 1, 2, '145.00'],
              ['Tanzim Ahmed', 'not out', 31, 16, 1, 3, '193.75']
            ],
            bowl: [
              ['Mohammad Akash', '2.0', 21, 0, '10.50'],
              ['Bayazid Bostame Sony', '2.0', 12, 2, '6.00'],
              ['Ataullah Khan Rifat (c)', '3.0', 37, 0, '12.33'],
              ['Hasibur Rahman', '1.0', 10, 0, '10.00'],
              ['Jubair Chowdhury', '2.0', 21, 0, '10.50']
            ]
          },
          {
            team: 'Living Legends', score: '75/6 (10 Ov)', extras: '13 (wd 8, nb 5)',
            fow: '25-1 (Hasibur Rahman, 3.2 ov), 68-2 (Ataullah Khan Rifat, 7.3 ov), 68-3 (Mohammad Akash, 8 ov), 75-4 (Bayazid Bostame Sony, 9.2 ov), 75-5 (Jubair Chowdhury, 9.3 ov), 75-6 (Md Shafiul Haque Ankon, 10 ov)',
            bat: [
              ['Hasibur Rahman', 'c †Mohammed Ridowan b Md Shafayet Hossen Chowdhury', 11, 13, 1, 0, '84.62'],
              ['Ataullah Khan Rifat (c)', 'c Dipta Roy b Hasibul Hasan Shanto', 41, 24, 1, 4, '170.83'],
              ['S M Kamrul Hasan Manik', 'not out', 5, 15, 0, 0, '33.33'],
              ['Mohammad Akash', 'c Tanzim Ahmed b Hasibul Hasan Shanto', 0, 3, 0, 0, '0.00'],
              ['Bayazid Bostame Sony', 'c Tanzim Ahmed b Mohammed Ridowan', 5, 6, 0, 0, '83.33'],
              ['Jubair Chowdhury', 'b Mohammed Ridowan', 0, 1, 0, 0, '0.00'],
              ['Md Shafiul Haque Ankon (wk)', 'c Dipta Roy b Mohammed Ridowan', 0, 3, 0, 0, '0.00']
            ],
            bowl: [
              ['Mohammed Ridowan (c & wk)', '2.0', 13, 3, '6.50'],
              ['Hasibul Hasan Shanto', '2.0', 12, 2, '6.00'],
              ['Tanzim Ahmed', '3.0', 9, 0, '3.00'],
              ['Md Shafayet Hossen Chowdhury', '2.0', 23, 1, '11.50'],
              ['Dipta Roy', '1.0', 18, 0, '18.00']
            ]
          }
        ]
      },
      {
        label: 'Final', date: '7 Jun 2026',
        team1: 'Bullet Club', team2: 'Panoti Boys',
        score1: '97/6 (9.4 Ov)', score2: '102/2 (7.0 Ov)',
        winner: 'Panoti Boys', result: 'Panoti Boys won by 4 wickets', toss: 'Bullet Club opt to bat',
        bestBat: [['Jayed Akbar Sumon', '63* (21), 7 sixes'], ['Hasibul Hasan Shanto', '52 (27), 5 sixes'], ['Dipta Roy', '27 (17), 2 sixes']],
        bestBowl: [['Sazzad Tanveer', '3/17 (2.4)'], ['Nahid Hasan', '1/19 (3.0)'], ['Borshon Gomes', '1/15 (1.0)']],
        squads: {
          'Bullet Club': ['Mohammed Ridowan (c)', 'Hasibul Hasan Shanto', 'Tanzim Ahmed', 'Dipta Roy', 'Md Noman', 'Md Shafayet Hossen Chowdhury', 'Biplob Hossain'],
          'Panoti Boys': ['Sufian Ahmed (c)', 'Jayed Akbar Sumon (wk)', 'Nahid Hasan', 'Sazzad Tanveer', 'Ejajur Rahman Redoy', 'Shahriar Ahmed', 'Borshon Gomes']
        },
        innings: [
          {
            team: 'Bullet Club', score: '97/6 (9.4 Ov)', extras: '7 (wd 5, nb 2)',
            fow: '80-1 (Dipta Roy, 6.5 ov), 81-2 (Biplob Hossain, 7.1 ov), 81-3 (Tanzim Ahmed, 7.3 ov), 86-4 (Mohammed Ridowan, 8.1 ov), 89-5 (Hasibul Hasan Shanto, 8.4 ov), 97-6 (Md Noman, 9.4 ov)',
            bat: [
              ['Hasibul Hasan Shanto', 'run out (Nahid Hasan)', 52, 27, 2, 5, '192.59'],
              ['Dipta Roy', 'b Borshon Gomes', 27, 17, 1, 2, '158.82'],
              ['Biplob Hossain', 'c Ejajur Rahman Redoy b Sazzad Tanveer', 1, 2, 0, 0, '50.00'],
              ['Tanzim Ahmed', 'c Borshon Gomes b Sazzad Tanveer', 0, 2, 0, 0, '0.00'],
              ['Mohammed Ridowan (c)', 'b Nahid Hasan', 1, 2, 0, 0, '50.00'],
              ['Md Shafayet Hossen Chowdhury', 'not out', 7, 7, 1, 0, '100.00'],
              ['Md Noman', 'c †Jayed Akbar Sumon b Sazzad Tanveer', 2, 3, 0, 0, '66.67']
            ],
            bowl: [
              ['Sufian Ahmed (c)', '2.0', 31, 0, '15.50'],
              ['Ejajur Rahman Redoy', '1.0', 15, 0, '15.00'],
              ['Nahid Hasan', '3.0', 19, 1, '6.33'],
              ['Sazzad Tanveer', '2.4', 17, 3, '6.38'],
              ['Borshon Gomes', '1.0', 15, 1, '15.00']
            ]
          },
          {
            team: 'Panoti Boys', score: '102/2 (7.0 Ov)', extras: '10 (wd 8, nb 2)',
            fow: '1-1 (Sufian Ahmed, 0.3 ov), 29-2 (Sazzad Tanveer, 3.2 ov)',
            bat: [
              ['Jayed Akbar Sumon (wk)', 'not out', 63, 21, 3, 7, '300.00'],
              ['Sufian Ahmed (c)', 'c Dipta Roy b Mohammed Ridowan', 0, 1, 0, 0, '0.00'],
              ['Sazzad Tanveer', 'c Dipta Roy b Md Shafayet Hossen Chowdhury', 12, 14, 2, 0, '85.71'],
              ['Nahid Hasan', 'not out', 17, 8, 0, 2, '212.50']
            ],
            bowl: [
              ['Mohammed Ridowan (c)', '1.0', 13, 1, '13.00'],
              ['Biplob Hossain', '1.0', 15, 0, '15.00'],
              ['Tanzim Ahmed', '2.0', 12, 0, '6.00'],
              ['Md Shafayet Hossen Chowdhury', '2.0', 41, 1, '20.50'],
              ['Hasibul Hasan Shanto', '1.0', 21, 0, '21.00']
            ]
          }
        ]
      }
    ]
  }
];

TRNS.length = 0;
TRNS.push(...TOURNAMENT_SCORECARDS);

_renderTrnNav = function(){
  document.getElementById('tnav').innerHTML = TRNS.map((t, i) => `
    <div class="tcard${_activeTrn===t.id?' active':''}" onclick="selectTrn('${t.id}')">
      <div class="tcard-badge">Tournament ${i+1}</div>
      <h3>${t.name}</h3>
      <div class="tdate">${t.date} &nbsp;&middot;&nbsp; ${t.format}</div>
      <div class="twinner">&#127942; ${t.winner}</div>
    </div>`).join('');
};

_renderTrnDetail = function(id){
  const t = TRNS.find(x => x.id === id);
  if(!t) return;
  const stats = _calcTrnStats(t);
  const placeLabel = ['', 'Champion', 'Runner-Up', 'Third Place'];
  const placeClass = ['', 'p1', 'p2', 'p3'];
  const placeText = ['', '1st Place', '2nd Place', '3rd Place'];

  let h = '<div class="tdetail">';

  h += `<div class="ttrn-hero">
    <div>
      <div class="ttrn-hero-title">${t.name}</div>
      <div class="ttrn-hero-sub">${t.date} &nbsp;&middot;&nbsp; ${t.format}</div>
    </div>
    <div class="ttrn-hero-champ">
      <div class="ttrn-champ-label">Tournament Champion</div>
      <div class="ttrn-champ-name">&#127942; ${t.winner}</div>
    </div>
  </div>`;

  h += `<div class="ttrn-stats">
    <div class="ttrn-stat"><div class="ttrn-stat-val">${stats.matches}</div><div class="ttrn-stat-lbl">Matches</div></div>
    <div class="ttrn-stat"><div class="ttrn-stat-val">${stats.runs}</div><div class="ttrn-stat-lbl">Runs Scored</div></div>
    <div class="ttrn-stat"><div class="ttrn-stat-val">${stats.wickets}</div><div class="ttrn-stat-lbl">Wickets</div></div>
    <div class="ttrn-stat"><div class="ttrn-stat-val">${stats.sixes}</div><div class="ttrn-stat-lbl">Sixes Hit</div></div>
  </div>`;

  h += '<div class="tsection-hd"><span>&#127941;</span> Final Standings</div><div class="tstandings">';
  t.teams.forEach(team => {
    const pc = placeClass[team.place] || 'px';
    h += `<div class="tteam ${pc}">
      <div class="tbadge">${team.place || '?'}</div>
      <div class="tplace">${placeText[team.place] || 'Participant'}</div>
      <div class="tplacement">${placeLabel[team.place] || ''}</div>
      <div class="tname">${team.name}</div>
      <div class="tplayers">${team.players.map(p => `<span class="tplayer" onclick="oM('${esc(p)}')">${p}</span>`).join('')}</div>
    </div>`;
  });
  h += '</div>';

  h += '<div class="tsection-hd"><span>&#127951;</span> Match Scorecards</div><div class="tmatches">';
  t.matches.forEach((m, mi) => {
    h += renderMatchCard(m, `${id}-m${mi}`);
  });
  h += '</div></div>';

  document.getElementById('tdetail').innerHTML = h;
};

function _calcTrnStats(t) {
  let runs = 0, wickets = 0, sixes = 0;
  t.matches.forEach(m => {
    m.innings.forEach(inn => {
      inn.bat.forEach(b => { runs += b[2]||0; sixes += b[5]||0; });
      inn.bowl.forEach(b => { wickets += b[3]||0; });
    });
  });
  return { matches: t.matches.length, runs, wickets, sixes };
}

function renderMatchCard(m, uid) {
  const isFinal = m.label === 'Final';
  return `<div class="tmatch">
    <div class="tmatch-head" onclick="toggleScorecard('${uid}')">
      <div class="tmh">
        <span class="tmhn${isFinal?' tmhn-final':''}">${m.label}</span>
        <span class="tmdate">${m.date}</span>
        <span class="tmtgl" id="tgl-${uid}">Scorecard &#9660;</span>
      </div>
      <div class="tmb">
        <div class="tmteam${m.winner===m.team1?' tmteam-won':''}">
          <div class="tmtname">${m.team1}</div>
          <div class="tmscore">${m.score1}</div>
          ${m.winner===m.team1?'<div class="tmwon">&#10003; Won</div>':'<div class="tmloss"></div>'}
        </div>
        <div class="tmvsep">vs</div>
        <div class="tmteam${m.winner===m.team2?' tmteam-won':''}">
          <div class="tmtname">${m.team2}</div>
          <div class="tmscore">${m.score2}</div>
          ${m.winner===m.team2?'<div class="tmwon">&#10003; Won</div>':'<div class="tmloss"></div>'}
        </div>
      </div>
      <div class="tmresult-strip">
        <span class="tmresult-text">${m.result}</span>
        <span class="tmtoss">Toss: ${m.toss}</span>
      </div>
    </div>
    <div class="tscorecard" id="sc-${uid}">
      ${renderScorecard(m, uid)}
    </div>
  </div>`;
}

function renderScorecard(m, uid){
  const tabs = m.innings.map((inn, i) =>
    `<button class="tinntab${i===0?' active':''}" onclick="switchInning('${uid}',${i},event)">${inn.team}</button>`
  ).join('');

  const panels = m.innings.map((inn, i) => `
    <div class="tinn-panel${i===0?' active':''}" id="${uid}-inn-${i}">
      <div class="tinnh-bar">
        <h4>${inn.team}</h4>
        <div class="tinnscore">${inn.score}</div>
      </div>
      <div class="tscroll">
        <table class="tsmall">
          <thead><tr><th>Batter</th><th>Dismissal</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th></tr></thead>
          <tbody>${renderBatRows(inn.bat)}</tbody>
        </table>
      </div>
      <div class="textras"><b>Extras:</b> ${inn.extras}</div>
      <div class="tfow-row"><b>Fall of Wickets:</b>
        <div class="tfow-chips">${inn.fow.split('), ').map((w,i,a) => `<span class="tfow-chip">${w+(i<a.length-1?')':'')}</span>`).join('')}</div>
      </div>
      <div class="tscroll" style="margin-top:8px">
        <table class="tsmall">
          <thead><tr><th>Bowler</th><th>O</th><th>R</th><th>W</th><th>Eco</th></tr></thead>
          <tbody>${renderBowlRows(inn.bowl)}</tbody>
        </table>
      </div>
    </div>
  `).join('');

  return `<div class="tscorecard-body">
    <div class="tbest">
      <div class="tbestbox"><h4>&#127937; Top Batters</h4>${renderPerf(m.bestBat)}</div>
      <div class="tbestbox"><h4>&#127953; Top Bowlers</h4>${renderPerf(m.bestBowl)}</div>
    </div>
    <div class="tinn-tabs">${tabs}</div>
    <div class="tinn-panels">${panels}</div>
    <div class="tsquads">${Object.entries(m.squads).map(([team,players]) =>
      `<div class="tsquad"><h4>${team}</h4><div>${players.join('<br>')}</div></div>`
    ).join('')}</div>
  </div>`;
}

function renderPerf(rows){
  return rows.map(row => `<div class="tperf"><span class="tpname">${row[0]}</span><span class="tpstat">${row[1]}</span></div>`).join('');
}

function renderBatRows(rows){
  return rows.map(r => {
    const runs = r[2], sixes = r[5];
    const rowCls = runs >= 50 ? ' class="bat50"' : runs >= 30 ? ' class="bat30"' : '';
    const runCls = runs >= 50 ? 'score50' : runs >= 30 ? 'score30' : '';
    return `<tr${rowCls}><td>${r[0]}</td><td class="tstatus">${r[1]}</td><td class="${runCls}">${runs}</td><td>${r[3]}</td><td>${r[4]}</td><td>${sixes>0?`<b>${sixes}</b>`:sixes}</td><td>${r[6]}</td></tr>`;
  }).join('');
}

function renderBowlRows(rows){
  return rows.map(r => {
    const w = r[3];
    const wCls = w >= 3 ? 'w3plus' : w >= 1 ? 'w1plus' : '';
    return `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="${wCls}">${w>0?`<b>${w}</b>`:w}</td><td>${r[4]}</td></tr>`;
  }).join('');
}

function toggleScorecard(uid) {
  const sc = document.getElementById('sc-' + uid);
  const btn = document.getElementById('tgl-' + uid);
  const isOpen = sc.classList.toggle('open');
  btn.innerHTML = isOpen ? 'Scorecard &#9650;' : 'Scorecard &#9660;';
  btn.classList.toggle('active', isOpen);
}

function switchInning(uid, idx, e) {
  e.stopPropagation();
  document.querySelectorAll(`#sc-${uid} .tinntab`).forEach((t,i) => t.classList.toggle('active', i===idx));
  document.querySelectorAll(`#sc-${uid} .tinn-panel`).forEach((p,i) => p.classList.toggle('active', i===idx));
}

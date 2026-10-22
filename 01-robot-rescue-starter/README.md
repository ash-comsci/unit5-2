# Robot Rescue — build the mission rules

You are programming a rescue robot in a 6 × 6 station. Complete the rules in game.js, plan a safe route, and then add your own mechanic.

## Run the game
Open this repository in a GitHub Codespace (Code → Codespaces → Create codespace). Wait for the container and preview on port 8000. If it does not start, run **node server.js** in the terminal, then open port 8000 from the Ports panel. Save game.js and refresh the preview after edits. No npm install is needed. You can also download the repository and open index.html directly in a browser.

## Your mission
1. Read the rules on the game screen. Play the starter and identify missing behaviour.
2. In evidence.md, write input → process → output notes and pseudocode BEFORE coding.
3. Complete TODO 1–7. Reject moves outside the board without spending energy; count valid moves; use battery power; collect the key once; apply the hazard; implement win/loss and prevent play after the game ends.
4. Use nested for loops in draw() to create the floor. Explain why 36 cells are drawn. This is required student-written repetition.
5. Add ONE original rule, such as a one-use battery pickup, a locked shortcut, or a second rescue item. Describe its trigger and state changes, and demonstrate that the game remains winnable.
6. Personalize labels and colours, keeping the KEY, HAZARD and EXIT text readable. Graphics polish is optional.
7. Complete at least 8 test cases in evidence.md, including boundaries, repeated pickup, hazards, win, missing key, loss, and restart. Record actual outcomes after testing.
8. Explain your own decisions in a 2–3 minute teacher conference. Be ready to predict variables and make a small rule change live.

## Rules to implement
Start at (0,0), energy 18, moves 0, no key. Each valid move costs 1 energy. The key is at (2,1); stepping on (3,2) costs 3 extra energy EACH time. Exit (5,5) requires the key. Arrival at the exit with the key and exactly 0 energy is a win. Otherwise energy <= 0 means a loss. Restart restores everything. Check win before loss.

## What you edit
Edit game.js and evidence.md. HTML, CSS, server.js and lib/ are supplied support; understanding their internals is not assessed. Keep all original helper files. This uses a small original helper API, not the actual CodeHS graphics library. CodeHS programs cannot simply be pasted in unchanged.

## Submit
Push your game.js and evidence.md to your assigned repository. Include a final screenshot if requested by your teacher. Make meaningful progress commits (plan, rules, testing); commit count itself is not a mark. Follow your class policy on outside help and acknowledge all borrowed code or AI assistance. You must be able to explain every submitted change.

## Suggested schedule
Three 75-minute classes: plan and movement; rules and original mechanic; tests and conference. An extra class may be useful for the first Codespaces setup.

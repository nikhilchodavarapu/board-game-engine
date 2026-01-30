import { bold, red } from "./colors.js";

console.log(`${red(bold("🧩 Overview"))}

SOS is a classic two-player strategy game played on a square grid.
Players take turns placing either an S or an O in empty cells.
The goal is to form the sequence S-O-S in any direction.

${red(bold("👥 Players"))}

  - 2 players

  - Players are not assigned fixed letters

  - On each turn, a player may choose either S or O

${red(bold("🎯 Objective"))}

  - Create as many SOS sequences as possible before the grid is completely filled

${red(bold("▶️ Gameplay Rules"))}

  - Players take turns placing S or O in an empty square

  - An SOS sequence can be formed:

      - Horizontally

      - Vertically

      - Diagonally

${red(bold("⭐ Scoring Rules"))}

  - Each valid SOS sequence scores 1 point

  - Multiple SOS sequences can be formed in a single move

  - Points earned equal the number of sequences formed

  - If a player scores at least one SOS:

      - They get another turn (optional rule based on implementation)

${red(bold("🏁 Game End"))}

  - The game ends when all grid cells are filled

  - The player with the highest score wins

  - If both players have the same score, the game is a draw

${red(bold("📌 Strategy Tips"))}

  - O is often more powerful than S

  - Look for opportunities to create multiple SOS in one move

  - Blocking your opponent is as important as scoring yourself
`);

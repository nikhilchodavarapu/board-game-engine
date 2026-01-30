import { bold, red } from "./colors.js";

console.log(`${red(bold("🧩 Overview"))}

Ludo is a classic board game for 2–4 players.
Each player races their four tokens from their starting area to the home at the center of the board.
The first player to get all four tokens home wins.

${red(bold("👥 Players"))}

  - 2 to 4 players

  - Each player chooses a color (Red, Blue, Green, or Yellow)

  - Each player starts with 4 tokens in their base

${red(bold("🎯 Objective"))}

  - Move all four of your tokens from your base → around the board → into the home triangle before the other players.

${red(bold("🎲 Dice Rules"))}

  - Players take turns rolling one six-sided die

  - You must roll a 6 to move a token out of your base

  - Rolling a 6 gives you another turn

${red(bold("🚀 Moving Tokens"))}

  - Tokens move clockwise following the path

  - Each dice number = number of squares moved

  - Once a token completes one full round, it can enter the home path

  - You must roll the exact number needed to enter home

${red(bold("⚔️ Capturing Tokens"))}

  - If your token lands on a square occupied by an opponent’s token:

      - The opponent’s token is captured

      - It is sent back to its base

  - Safe spots cannot be captured (usually marked on the board)

${red(bold("🏠 Home Rules"))}

  - Tokens must reach the center home triangle

  - Exact dice roll required to enter home

  - Tokens inside home cannot be captured

${red(bold("🏆 Winning the Game"))}

  - The first player to get all 4 tokens into home wins

  - Other players may continue playing to determine rankings (optional)

${red(bold("📌 Quick Tips"))}

  - Rolling a 6 is powerful — use it wisely!

  - Protect your tokens on safe spots

  - Capturing opponents gives you a big advantage`);

import { bold, red } from "../colors.js";
export const help = () => {
  console.log(`${red(bold("🧩 Overview"))}

Tic Tac Toe is a classic two-player game played on a 3×3 grid.
Players take turns marking empty cells with their symbol.
The goal is to place three of your marks in a straight line.

${red(bold("👥 Players"))}

  - 2 players

  - One player uses X, the other uses O

  - Players alternate turns

${red(bold("🎯 Objective"))}

  - Be the first player to form a line of three identical symbols

  - The line can be horizontal, vertical, or diagonal

${red(bold("▶️ Gameplay Rules"))}

  - Players take turns placing their symbol in an empty cell

  - Once placed, a symbol cannot be moved

  - Only one symbol can occupy a cell

${red(bold("📏 Winning Conditions"))}

  - Three symbols in a row horizontally

  - Three symbols in a row vertically

  - Three symbols in a row diagonally

${red(bold("🏁 Game End"))}

  - The game ends when a player wins

  - If all cells are filled and no player has won:

      - The game is a draw

${red(bold("📌 Strategy Tips"))}

  - Try to control the center cell early

  - Block your opponent’s winning moves

  - Look for opportunities to create two winning paths
`);
};

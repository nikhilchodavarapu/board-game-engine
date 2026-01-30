import { bold, red } from "../colors.js";
export const help = () => {
  console.log(`${red(bold("🧩 Overview"))}

Sudoku is a logic-based number puzzle played on a 9×9 grid.
Some cells are pre-filled with numbers.
The goal is to fill the remaining cells following specific rules.

${red(bold("👥 Players"))}

  - 1 player

  - The puzzle is solved individually

${red(bold("🎯 Objective"))}

  - Fill the grid so that every row, column, and 3×3 subgrid
    contains all numbers from 1 to 9 exactly once

${red(bold("▶️ Gameplay Rules"))}

  - Each empty cell must contain a number from 1 to 9

  - A number cannot be repeated in:

      - The same row

      - The same column

      - The same 3×3 subgrid

  - Pre-filled numbers cannot be changed

${red(bold("🧠 Solving Rules"))}

  - Use logic and deduction to determine valid numbers

  - Guessing is discouraged in standard Sudoku

  - There is always at least one valid solution

${red(bold("🏁 Game End"))}

  - The game is completed when all cells are correctly filled

  - If any rule is violated, the solution is invalid

${red(bold("📌 Strategy Tips"))}

  - Start with rows, columns, or boxes with the most numbers filled

  - Eliminate impossible numbers systematically

  - Be patient and think ahead
`);
};

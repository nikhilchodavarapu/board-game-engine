import { bold, red } from "../colors.js";
export const help = () => {
  console.log(`${red(bold("🧩 Overview"))}

Chess is a classic two-player strategy board game played on an 8×8 grid.
Each player controls an army of pieces with different movement abilities.
The goal is to checkmate the opponent’s king.

${red(bold("👥 Players"))}

  - 2 players

  - One player controls White, the other controls Black

  - White always moves first

${red(bold("🎯 Objective"))}

  - Put the opponent’s king in checkmate

  - Checkmate occurs when the king is under attack
    and cannot escape capture

${red(bold("♟️ Chess Pieces"))}

  - King: Moves one square in any direction

  - Queen: Moves any number of squares in any direction

  - Rook: Moves any number of squares horizontally or vertically

  - Bishop: Moves any number of squares diagonally

  - Knight: Moves in an L-shape and can jump over pieces

  - Pawn: Moves forward one square (two on first move),
    captures diagonally

${red(bold("▶️ Gameplay Rules"))}

  - Players take turns moving one piece per turn

  - A piece cannot move through another piece
    (except the knight)

  - Captured pieces are removed from the board

${red(bold("⚠️ Check & Special Rules"))}

  - Check: The king is under immediate attack

  - The king must be moved out of check immediately

  - Special moves include:

      - Castling

      - Pawn promotion

      - En passant

${red(bold("🏁 Game End"))}

  - The game ends by checkmate

  - The game can also end in a draw due to:

      - Stalemate

      - Insufficient material

      - Repetition or agreement

${red(bold("📌 Strategy Tips"))}

  - Control the center of the board

  - Develop your pieces early

  - Protect your king and plan ahead
`);
};

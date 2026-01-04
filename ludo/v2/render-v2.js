import { createBoard } from "./board-v2.js";

const BG = {
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[46m",
  white: "\x1b[47m",
  reset: "\x1b[0m",
};

const getCellBg = (row, col) => {
  // top-left home
  if (
    (row < 13 && col < 25) || (row < 15 && col < 9 && col >= 4) ||
    (row < 16 && row > 14 && col < 25 && col >= 4)
  ) {
    return BG.red;
  }

  // top-right home
  if ((row < 13 && col >= 36)) return BG.green;

  // bottom-left home
  if (row >= 18 && col < 25) return BG.blue;

  // bottom-right home
  if (row >= 18 && col >= 36) return BG.yellow;

  return BG.white;
};

const renderBoard = (board) => {
  console.clear();
  const fgColor = "\x1b[30m";

  for (let r = 1; r < board.length - 1; r++) {
    let line = "";

    for (let c = 1; c < board[r].length - 1; c++) {
      const bg = getCellBg(r, c);
      line += bg + fgColor + board[r][c] + BG.reset;
    }

    console.log(line);
  }
};

const board = createBoard();
renderBoard(board);

import { createBoard } from "./board.js";
import { roll } from "./dice.js";
import { BLUE_PATH, GREEN_PATH, RED_PATH, YELLOW_PATH } from "./paths.js";
import { namePlayers } from "./players.js";
import { renderBoard } from "./render.js";

const board = createBoard(15);

const BLUE_COINS = [1, 2, 3, 4];
const RED_COINS = [1, 2, 3, 4];
const GREEN_COINS = [1, 2, 3, 4];
const YELLOW_COINS = [1, 2, 3, 4];

const BLUE_COIN_MOVES = [-1, -1, -1, -1];
const RED_COIN_MOVES = [-1, -1, -1, -1];
const GREEN_COIN_MOVES = [-1, -1, -1, -1];
const YELLOW_COIN_MOVES = [-1, -1, -1, -1];

const positions = {
  redCoins: {
    0: { original: [8, 15], visible: [3, 3] },
    1: { original: [8, 21], visible: [3, 4] },
    2: { original: [11, 15], visible: [4, 3] },
    3: { original: [11, 21], visible: [4, 4] },
  },

  blueCoins: {
    0: { original: [8, 69], visible: [3, 12] },
    1: { original: [8, 75], visible: [3, 13] },
    2: { original: [11, 69], visible: [4, 12] },
    3: { original: [11, 75], visible: [4, 13] },
  },

  yellowCoins: {
    0: { original: [35, 69], visible: [12, 3] },
    1: { original: [35, 75], visible: [12, 4] },
    2: { original: [38, 69], visible: [13, 3] },
    3: { original: [38, 75], visible: [13, 4] },
  },

  greenCoins: {
    0: { original: [35, 15], visible: [12, 12] },
    1: { original: [35, 21], visible: [12, 13] },
    2: { original: [38, 15], visible: [13, 12] },
    3: { original: [38, 21], visible: [13, 13] },
  },
};

function isInSafeJone() {
  if (
    (row > 23 && row < 28 && col > 11 && col < 19) ||
    (row > 6 && row < 10 && col > 35 && col < 43) ||
    (row > 17 && row < 22 && col > 71 && col < 79) ||
    (row > 36 && row < 40 && col > 47 && col < 55)
  ) {
    return true;
  }

  if (
    (row > 17 && row < 22 && col > 5 && col < 13) ||
    (row > 3 && row < 7 && col > 47 && col < 55) ||
    (row > 23 && row < 28 && col > 77 && col < 85) ||
    (row > 41 && row < 46 && col > 35 && col < 43)
  ) {
    return true;
  }

  return false;
}

const initialize = () => {
  for (const key in positions) {
    for (const coin in positions[key]) {
      const [row, col] = positions[key][coin].original;
      board[row][col] = coin;
    }
  }
};

function displayBoard(path, coin, color) {
  console.clear();
  initialize();
  const path_row = path[0];
  const path_col = path[1];
  const resetColour = "\x1b[0m";
  let string = "";
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const currentElemnt = board[row][col];
      if (row === path_row && col === path_col) {
        string += color + coin + resetColour;
      } else string += renderBoard(row, col) + currentElemnt + resetColour;
    }
    string += "\n";
  }
  console.log(string);
}

function findEmptyPlace(row, col) {
  if (board[row][col] === " ") {
    return [row, col];
  }

  if (board[row][col - 2] === " ") {
    return [row, col - 2];
  }

  if (board[row][col + 2] === " ") {
    return [row, col + 2];
  }

  if (board[row][col - 1] === " ") {
    return [row, col - 1];
  }

  if (board[row][col + 1] === " ") {
    return [row, col + 1];
  }

  return [row + 1, col];
}

function selectCoinMoves(player) {
  switch (player) {
    case 1:
      return BLUE_COIN_MOVES;
    case 2:
      return RED_COIN_MOVES;
    case 3:
      return GREEN_COIN_MOVES;
    case 4:
      return YELLOW_COIN_MOVES;
  }
}

function main() {
  const players = namePlayers();
  play(players.map((x) => x.name));
}

main();

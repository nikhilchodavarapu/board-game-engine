import { createBoard } from "./board.js";
import { roll } from "./dice.js";
import { BLUE_PATH, GREEN_PATH, RED_PATH, YELLOW_PATH } from "./paths.js";
import { namePlayers } from "./players.js";
import { positions } from "./positions.js";
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

function displayBoard() {
  console.clear();
  initialize();
  const resetColour = "\x1b[0m";
  let string = "";
  const allPos = Object.values(positions).flatMap((x) =>
    Object.values(x).map((x) => ({ [x.original]: x.color + " " + x.symbol }))
  ).reduce((pos, x) => {
    pos[Object.keys(x) + ""] = Object.values(x) + "";
    return pos;
  }, {});
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const currentElemnt = board[row][col];
      const key = row + "," + col;
      // console.log(key);
      if (allPos[key]) {
        const [color, symbol] = allPos[key].split(" ");
        // console.log({color});
        string += renderBoard(row, col) + color + symbol + resetColour;
      } else {
        string += renderBoard(row, col) + currentElemnt + resetColour;
      }
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


export const play = () => {
  displayBoard();
};

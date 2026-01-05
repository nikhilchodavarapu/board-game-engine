import { createBoard } from "./board.js";
import { roll } from "./dice.js";
import { BLUE_PATH, GREEN_PATH, RED_PATH, YELLOW_PATH } from "./paths.js";
import { namePlayers } from "./players.js";
import { displayBoard } from "./render.js";
// import { renderBoard } from "./render.js";

const board = createBoard(15);

const BLUE_TOKENS = [1, 2, 3, 4];
const RED_TOKENS = [1, 2, 3, 4];
const GREEN_TOKENS = [1, 2, 3, 4];
const YELLOW_TOKENS = [1, 2, 3, 4];

const BLUE_TOKEN_MOVES = [-1, -1, -1, -1];
const RED_TOKEN_MOVES = [-1, -1, -1, -1];
const GREEN_TOKEN_MOVES = [-1, -1, -1, -1];
const YELLOW_TOKEN_MOVES = [-1, -1, -1, -1];

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

const getCurrentPositions = (players) => {
  return players.flatMap((x) => Object.values(x.tokens)).reduce(
    (pos, x) => (pos[x.originalPos + ""] = x.color + " " + x.symbol) && pos,
    {},
  );
};

const initialize = (players) => {
  const positions = getCurrentPositions(players);
  Object.keys(positions).forEach((pos) => {
    const [row, col] = pos.split(",");
    const symbol = positions[pos].split(" ")[1];
    board[row][col] = symbol;
  });
  displayBoard(board, positions);
};

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

function selectTokenMoves(player) {
  switch (player) {
    case 1:
      return BLUE_TOKEN_MOVES;
    case 2:
      return RED_TOKEN_MOVES;
    case 3:
      return GREEN_TOKEN_MOVES;
    case 4:
      return YELLOW_TOKEN_MOVES;
  }
}

const moveToken = () => {
  
}

export const play = (players) => {
  initialize(players);
};

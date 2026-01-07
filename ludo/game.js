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

const positionInBoard = (position) => {
  const [x, y] = position;
  if (x < 1 || y < 1) return [-1, -1];
  const row = (x - 1) * 3 + 2;
  const col = (y - 1) * 6 + 3;
  return [row, col];
};

const changeTokenPosInBoard = (board, player, tokenNo, newPos) => {
  const [x, y] = player.tokens[tokenNo].originalPos;
  board[x][y] = " ";
  const [row, col] = positionInBoard(newPos);
  player.tokens[tokenNo].originalPos = [row, col];
  console.log(newPos);
  board[row][col] = player.tokens[tokenNo].symbol;
};

const moveToken = (board, player, tokenNo, noOfMoves) => {
  if (!player.tokens[tokenNo].moves) {
    changeTokenPosInBoard(board, player, tokenNo, player.initialPos);
  }
};

export const play = (players) => {
  initialize(players);
  moveToken(board, players[0], 4, 5);
  setTimeout(() => {
    displayBoard(board, getCurrentPositions(players));
  }, 1000);
};

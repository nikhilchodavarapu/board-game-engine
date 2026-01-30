import { createBoard } from "./board.js";
import { roll } from "./dice.js";
import { PATH } from "./path.js";
import { namePlayers } from "./players.js";
import { displayBoard } from "./render.js";
// import { renderBoard } from "./render.js";

const board = createBoard(15);

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

function findEmptyPlace([row, col]) {
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

const changeTokenPosInBoard = (player, tokenNo, newPos) => {
  const token = player.tokens[tokenNo];
  const [x, y] = token.originalPos;
  board[x][y] = " ";
  const [row, col] = findEmptyPlace(positionInBoard(newPos));
  token.originalPos = [row, col];
  console.log(newPos);
  board[row][col] = token.symbol;
  token.moves++;
};

const getNextPos = (player, tokenNo) => {
  const token = player.tokens[tokenNo];
  if (token.moves >= 52) {
    console.log(player);
    const [rowInc, colInc] = player.increment;
    const [currRow, currCol] = token.visiblePos;
    token.visiblePos = [currRow + rowInc, currCol + colInc];
  } else {
    token.visiblePos = PATH[token.pathIndex++ % 52];
  }
  return token.visiblePos;
};

const moveToken = (player, tokenNo, noOfMoves, players) => {
  let i = 0;
  return new Promise((r) => {
    const intervalId = setInterval(() => {
      const newPos = getNextPos(player, tokenNo);
      changeTokenPosInBoard(
        player,
        tokenNo,
        newPos,
      );
      displayBoard(board, getCurrentPositions(players));
      i++;
      if (i === noOfMoves) {
        clearInterval(intervalId);
        r();
      }
    }, 100);
  });
};

const rollDice = async (players, player) => {
  const noOfMoves = await roll(board, getCurrentPositions(players));
  // const noOfMoves = +prompt("Enter :");
  console.log("Outcome =>", noOfMoves);
  const tokenNo = prompt("Enter the token No (1:● 2:⬟ 3:▲ 4:■) : ");
  const currentMoves = player.tokens[tokenNo].moves;
  if (noOfMoves === 6 && currentMoves === 1) {
    await moveToken(player, tokenNo, 1, players);
  } else if (currentMoves !== 1) {
    await moveToken(player, tokenNo, +noOfMoves, players);
  } else {
    displayBoard(board, getCurrentPositions(players));
  }
  prompt("Hit enter to continue >>");
  if (noOfMoves === 6) await rollDice(players, player);
};

const isGameFinished = (player) => {
  for (const token in player.tokens) {
    if (player.tokens[token].moves !== 58) return false;
  }
  return true;
};

export const play = async (players) => {
  initialize(players);
  let i = 0;
  while (!isGameFinished(players[i])) {
    await rollDice(players, players[i]);
    i = ++i % 4;
  }
};

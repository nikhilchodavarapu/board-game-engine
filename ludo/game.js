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

const changeTokenPosInBoard = (player, tokenNo, newPos) => {
  const [x, y] = player.tokens[tokenNo].originalPos;
  board[x][y] = " ";
  const [row, col] = positionInBoard(newPos);
  player.tokens[tokenNo].originalPos = [row, col];
  console.log(newPos);
  board[row][col] = player.tokens[tokenNo].symbol;
  player.tokens[tokenNo].moves++;
};

const moveToken = (player, tokenNo, noOfMoves, players) => {
  // if ()

  let i = 0;
  return new Promise((r) => {
    const intervalId = setInterval(() => {
      changeTokenPosInBoard(
        player,
        tokenNo,
        PATH[player.tokens[tokenNo].pathIndex++],
      );
      displayBoard(board, getCurrentPositions(players));
      i++;
      if (i === noOfMoves) {
        clearInterval(intervalId);
        r();
      }
    }, 500);
  });
  // }
};

const rollDice = async (players, player) => {
  // const noOfMoves = await roll(board, getCurrentPositions(players));
  const noOfMoves = +prompt("Enter :");
  console.log("Outcome =>", noOfMoves);
  const tokenNo = prompt("Enter the token No (1:● 2:⬟ 3:▲ 4:■) : ");
  if (noOfMoves === 6 && player.tokens[tokenNo].moves === 1) {
    await moveToken(player, tokenNo, 1, players);
  } else {
    await moveToken(player, tokenNo, +noOfMoves, players);
  }
};

export const play = async (players) => {
  initialize(players);
  rollDice(players, players[0]);
  rollDice(players, players[0]);
};

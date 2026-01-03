import { createBoard } from "./board.js";
import { yellow } from "./colors.js";

const boardSize = 10;
const board = createBoard(boardSize);

const isValidInput = (position = [0, 0], symbol = "S") => {
  if (
    !((position[0] < 16 && position[0] > 0) &&
      (position[1] < 16 && position[1] > 0))
  ) {
    console.log("Invalid Position");
    return false;
  }
  const [x, y] = positionInBoard(position);
  if (board[x][y] !== " ") {
    console.log("Invalid Position");
    console.log("It's not an empty box");
    return false;
  }
  if (!["S", "O"].includes(symbol)) {
    console.log("Invalid Symbol");
    return false;
  }
  return true;
};

const positionInBoard = (position) => {
  const [x, y] = position;
  if (x < 1 || y < 1) return [-1, -1];
  const row = (x - 1) * 3 + 2;
  const col = (y - 1) * 6 + 3;
  return [row, col];
};

const getInput = (player) => {
  console.log(`${player.name}'s Turn`);
  const positionInput = prompt(`Enter the position ("row col") :`);
  const position = positionInput.split(" ").map(Number);
  if (!isValidInput(position, "S")) {
    console.log("RETRY !");
    return getInput(player);
  }
  const symbol = prompt(`Enter the symbol ('S' / 'O'): `).toUpperCase();
  if (!isValidInput(position, symbol)) {
    console.log("RETRY !");
    return getInput(player);
  }
  return [position, symbol];
};

const displayBoard = (board) => {
  const colIndicators = ["   1"];
  console.clear();
  for (let i = 1; i < boardSize; i++) {
    colIndicators.push(((i + 1) + "").padStart(6));
  }
  console.log("  ", yellow(colIndicators.join("")));
  let row = 1;
  console.log(
    board.map((x, i) => {
      return (((i - 2) % 3 === 0) ? yellow((row++ + "").padEnd(3)) : "   ") +
        x.join("");
    }).join("\n"),
  );
  console.log();
};

const isAnythingInvalid = (board, positions) => {
  for (let i = 0; i < positions.length; i++) {
    const [x, y] = positions[i];
    if (!(board[x] && board[x][y])) return true;
  }
  return false;
};

const countIfCombinationIsValid = (
  board,
  box1,
  box2,
  position,
  combinationPattern,
) => {
  let count = 0;
  const [x, y] = positionInBoard(position);
  for (let i = 0; i < box1.length; i++) {
    const [x1, y1] = positionInBoard(
      box1[i].map((x, i) => x + position[i]),
    );
    const [x2, y2] = positionInBoard(
      box2[i].map((x, i) => x + position[i]),
    );
    if (isAnythingInvalid(board, [[x1, y1], [x, y], [x2, y2]])) continue;
    const combination = combinationPattern
      ? (board[x][y] + board[x1][y1] + board[x2][y2])
      : (board[x1][y1] + board[x][y] + board[x2][y2]);
    if (combination === "SOS") count++;
  }
  return count;
};

const countPoints = (board, position) => {
  const adjacentIndices = [
    [0, -1],
    [-1, 0],
    [1, -1],
    [1, 1],
    [0, 1],
    [1, 0],
    [-1, 1],
    [-1, -1],
  ];

  const oneMoreToAdjacent = [
    [0, -2],
    [-2, 0],
    [2, -2],
    [2, 2],
    [0, 2],
    [2, 0],
    [-2, 2],
    [-2, -2],
  ];

  let count = countIfCombinationIsValid(
    board,
    adjacentIndices,
    oneMoreToAdjacent,
    position,
    1,
  );

  count += countIfCombinationIsValid(
    board,
    adjacentIndices.slice(0, 4),
    adjacentIndices.slice(4),
    position,
    0,
  );

  return count;
};

const makeMove = (player) => {
  const [position, symbol] = getInput(player);
  const [row, col] = positionInBoard(position);
  board[row][col] = symbol;
  displayBoard(board);
  const points = countPoints(board, position);
  player.score += countPoints(board, position);
  return points > 0 ? 1 : 0;
};

const displayWinner = (winner, loser) => {
  console.log(`Well done champ!! ${winner.name}`);
};

export const play = (players) => {
  const maxMoves = boardSize ** 2;
  displayBoard(board);
  let currentPlayer = Math.round(Math.random());
  let chance = 0;
  for (let i = 1; i <= maxMoves; i++) {
    currentPlayer = (1 - currentPlayer + chance) % 2;
    chance = makeMove(players[currentPlayer]);
    players.forEach((player) => {
      player.displayScore();
    });
    console.log(i, maxMoves);
  }

  if (players[0].score < players[1].score) {
    displayWinner(players[1], players[0]);
  } else if (players[0].score > players[1].score) {
    displayWinner(...players);
  } else {
    console.log("Wow! It's A Tie!!");
    console.log("Only happens when both are legends");
  }
};

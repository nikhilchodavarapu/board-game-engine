import { createBoard } from "./board.js";
import { yellow } from "./colors.js";
import { permutations } from "jsr:@std/collections";

const board = createBoard();

const isValidInput = (position = [0, 0], symbol = "S") => {
  if (
    (position[0] > 15 || position[0] < 1) ||
    (position[1] > 15 || position[1] < 1)
  ) {
    console.log("Invalid Position");
    return false;
  }
  if (!["S", "O"].includes(symbol)) {
    console.log("Invalid Symbol");
    return false;
  }
  return true;
};

const getInput = (player) => {
  console.log(`${player.name}'s Turn`);
  const positionInput = prompt(`Enter the position ("row col") :`);
  const position = positionInput.split(" ").map(Number);
  if (!isValidInput(position, "S")) {
    console.log("RETRY !");
    return getInput(player);
  } else {
    const symbol = prompt(`Enter the symbol ('S' / 'O'): `).toUpperCase();
    if (!isValidInput(position, symbol)) {
      console.log("RETRY !");
      return getInput(player);
    }
    return [position, symbol];
  }
};

const positionInBoard = (position) => {
  const row = (position[0] - 1) * 3 + 2;
  const col = (position[1] - 1) * 6 + 3;
  return [row, col];
};

const displayBoard = (board) => {
  const colIndicators = ["   1"];
  console.clear();
  for (let i = 1; i < 15; i++) {
    colIndicators.push(((i + 1) + "").padStart(6));
  }
  console.log(yellow(colIndicators.join("")));
  let row = 1;
  console.log(
    board.map((x, i) => {
      return x.join("") + (((i - 2) % 3 === 0) ? yellow("  " + row++) : "");
    }).join("\n"),
  );
};

const countPoints = (board, position) => {
  const adjacentIndices = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const oneMoreToAdjacent = [
    [0, -2],
    [0, 2],
    [-2, 0],
    [2, 0],
    [2, 2],
    [2, -2],
    [-2, 2],
    [-2, -2],
  ];

  let count = 0;
  for (let i = 0; i < adjacentIndices.length; i++) {
    const [x1, y1] = positionInBoard(
      adjacentIndices[i].map((x, i) => x + position[i]),
    );
    const [x2, y2] = positionInBoard(
      oneMoreToAdjacent[i].map((x, i) => x + position[i]),
    );
    const [x, y] = positionInBoard(position);
    const possibleCombinations = permutations([
      board[x1][y1],
      board[x][y],
      board[x2][y2],
    ]).map((x) => x.join(""));
    console.log(possibleCombinations);
    if (possibleCombinations.indexOf("SOS") !== -1) count++;
  }
  return count;
};

const makeMove = (player) => {
  const [position, symbol] = getInput(player);
  const [row, col] = positionInBoard(position);
  board[row][col] = symbol;
  displayBoard(board);
  console.log(countPoints(board, position));
};

export const play = (players) => {
  for (let i = 0; i < 5; i++) {
    makeMove(players[i % 2]);
  }
};

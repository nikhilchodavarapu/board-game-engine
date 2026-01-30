function createBoard() {
  const firstRow = "___________________\n|     |     |     |\n|     |     |     |\n|_____|_____|_____|\n";
  const secondRow = "|     |     |     |\n|     |     |     |\n|_____|_____|_____|\n";
  const thirdRow = "|     |     |     |\n|     |     |     |\n|_____|_____|_____|";
  const template = firstRow + secondRow + thirdRow;
  const board = template.split('\n');
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }
  return board;
}

function instructionBoard() {
  const firstRow = "___________________\n|     |     |     |\n|  1  |  2  |  3  |\n|_____|_____|_____|\n";
  const secondRow = "|     |     |     |\n|  4  |  5  |  6  |\n|_____|_____|_____|\n";
  const thirdRow = "|     |     |     |\n|  7  |  8  |  9  |\n|_____|_____|_____|";
  const template = firstRow + secondRow + thirdRow;
  console.clear();
  console.log(template);
}

const BOARD = createBoard();
const PAIRS = [
  "123", "147", "159", "132", "174", "195",
  "213", "231", "258", "285",
  "312", "321", "357", "375", "369", "396",
  "456", "465", "417", "471",
  "519", "591", "546", "564", "528", "582",
  "654", "645", "639", "693",
  "714", "741", "753", "735", "789", "798",
  "879", "897", "852", "825",
  "987", "978", "951", "915", "963", "936"
];
const playerOneMoves = [];
const playerTwoMoves = [];
const TOTAL_NUMBER_OF_MOVES = 9;

function displayBoard() {
  console.clear();
  let string = "";
  for (let row = 0; row < BOARD.length; row++) {
    for (let col = 0; col < BOARD[row].length; col++) {
      const currentElemnt = BOARD[row][col];
      const color = currentElemnt === 'X' ? "\x1b[31m" : "\x1b[36m";
      string += currentElemnt === 'X' || currentElemnt === 'O' ? color + currentElemnt + "\x1b[0m" : currentElemnt;
    }
    string += '\n';
  }
  console.log(string);
}

function addToBoard(value = ' ', valueIndex) {
  BOARD[valueIndex[0]][valueIndex[1]] = value;
}

function convertIndex(number) {
  const index = [];
  switch (number) {
    case 1: index.push(2, 3); break;
    case 2: index.push(2, 9); break;
    case 3: index.push(2, 15); break;
    case 4: index.push(5, 3); break;
    case 5: index.push(5, 9); break;
    case 6: index.push(5, 15); break;
    case 7: index.push(8, 3); break;
    case 8: index.push(8, 9); break;
    case 9: index.push(8, 15); break;
  }
  return index;
}

function allElements(requireMoves, userMoves) {
  for (let index = 0; index < requireMoves.length; index++) {
    const move = requireMoves[index];
    if (!userMoves.includes(move)) return false;
  }
  return true;
}

function isGameFinished(onesMoves, twosMoves) {
  console.log("Moves => ", onesMoves, twosMoves);
  for (let index = 0; index < PAIRS.length; index++) {
    const isFinished = allElements(PAIRS[index], onesMoves) ||
      allElements(PAIRS[index], twosMoves);
    if (isFinished) return true;
  }
  return false;
}

function isInValidInput(move) {
  const isNotValidInput =
    playerOneMoves.includes(move) ||
    playerTwoMoves.includes(move) ||
    move > 9;
  if (isInValidInput) {
    console.log(playerOneMoves.join(""))
    console.log(playerTwoMoves.join(""))
    console.log(move)
  }
  return isNotValidInput;
}

function playOneMove(currentPlayer, players) {
  const symbol = currentPlayer === 1 ? 'X' : 'O';
  const color = currentPlayer === 1 ? "\x1b[31m" : "\x1b[36m";
  const move = parseInt(prompt(`${players[currentPlayer]} turn => `));
  if (isInValidInput(move)) {
    console.log("INVALID INPUT");
    return playAgain(1, players, "");
  }
  currentPlayer === 1 ? playerOneMoves.push(move) : playerTwoMoves.push(move);
  const onesMoves = playerOneMoves.join("");
  const twosMoves = playerTwoMoves.join("");
  addToBoard(symbol, convertIndex(move));
  return isGameFinished(onesMoves, twosMoves);
}

function play(players) {
  let completed = false;
  let currentMove = 0;
  const whosGoingFirst = Math.floor(Math.random() * 2);
  displayBoard();
  while (!completed && currentMove < TOTAL_NUMBER_OF_MOVES) {
    completed = playOneMove((currentMove + whosGoingFirst) % 2, players);
    displayBoard();
    currentMove++;
  }
  currentMove--;
  const winner = players[(currentMove + whosGoingFirst) % 2];
  const loser = players[(currentMove + 1 + whosGoingFirst) % 2];
  const color = (currentMove + whosGoingFirst) % 2 === 1 ? "\x1b[91m" : "\x1b[36m";
  const won = color + winner + " won !!! 🤩" + "\x1b[0m";
  completed && completed !== 1 ? console.log(won) : console.log("No One Win!");
  playAgain(completed, players, loser);
}

function clearEverything(moves) {
  while (moves.length !== 0) {
    moves.pop();
  }

  BOARD[2][3] = ' ';
  BOARD[2][9] = ' ';
  BOARD[2][15] = ' ';
  BOARD[5][3] = ' ';
  BOARD[5][9] = ' ';
  BOARD[5][15] = ' ';
  BOARD[8][3] = ' ';
  BOARD[8][9] = ' ';
  BOARD[8][15] = ' ';
}

function playAgain(completed, players, loser) {
  clearEverything(playerOneMoves)
  clearEverything(playerTwoMoves)
  const response = confirm(`It's time for ${loser}\nAre you ready ? `);
  if (response) {
    console.clear();
    play(players);
  }
  return 1;
}

function namePlayers() {
  console.log('\n');
  const red = prompt("Enter the name of the player 1:");
  const blue = prompt("Enter the name of the player 2:");
  return [red, blue];
}

function main() {
  instructionBoard();
  const players = namePlayers();
  play(players);
  console.log("\n\nHave a nice day😊🤍");
}

main();

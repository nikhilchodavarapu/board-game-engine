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
const computerMoves = [];
const playerMoves = [];
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
    computerMoves.includes(move) ||
    playerMoves.includes(move) ||
    move > 9 || move < 1;
  if (isNotValidInput) {
    // console.log("Computer Moves =>",computerMoves.join(""));
    // console.log("Player Moves =>",playerMoves.join(""));
    // console.log("Current Move =>",move);
  }
  return isNotValidInput;
}

const invalidPairs = [];
function thirdMove(pair) {
  for (let index = 0; index < PAIRS.length; index++) {
    if (PAIRS[index].includes(pair) && !invalidPairs.includes(pair)) {
      for (let char = 0; char < PAIRS[index].length; char++) {
        console.log("Pair Index =>", PAIRS[index][char])
        if (!pair.includes(PAIRS[index][char])) return PAIRS[index][char];
      }
    }
  }
  return -1;
}

function findTheThirdMove(moves) {
  console.log("I'm in find third move pair", moves)

  const allMoves = moves.join("");
  for (let firstChar = 0; firstChar < allMoves.length - 1; firstChar++) {
    for (let secondChar = firstChar + 1; secondChar < allMoves.length; secondChar++) {
      const pair = allMoves[firstChar] + allMoves[secondChar];
      let move = +thirdMove(pair);
      if (isInValidInput(move)) {
        invalidPairs.push(pair);
      } else {
        invalidPairs.push(pair);
        console.log("Third Move =>", move)
        return move; 
      }
    }
  }
  return -1;
}

function findOtherThan(number) {
  return (number + 1) % 3;
}

function moveToNext(currentMove) {
  console.log("I'm in move to next")
  let move = currentMove;
  let isCurrentMove = false;
  for (let index = 0; index < PAIRS.length; index++) {
    while (PAIRS[index].includes(move) && isInValidInput(+move) && !isCurrentMove) {
      const nextIndex = findOtherThan(PAIRS[index].indexOf(move));
      move = PAIRS[index][nextIndex];
      if (move === currentMove) isCurrentMove = true;
    }
    isCurrentMove = false;
    if (!isInValidInput(+move)) {
      return move;
    }
  }
  return -1;
}

function nextMove() {
  console.log("I'm in next move")
  const firstMove = computerMoves.join("");
  let currentMove = firstMove[0];
  let index = 0;
  let move = currentMove;
  while(isInValidInput(+move) && index < firstMove.length) {
    move = moveToNext(move);
    console.log("Move =>", move);
    if (move === -1) {
      index++;
      currentMove = firstMove[index];
      move = currentMove;
    }
  }
  return move;
}

function makePair() {
  console.log("I'm in make pair")
  if (computerMoves.length === 1) {
    return nextMove();
  }
  const move = findTheThirdMove(computerMoves)
  if (move !== -1) {
    return move;
  }
  return nextMove();
}

function computerMove() {
  if (!isInValidInput(5)) {
    return 5;
  }
  if (isInValidInput(5) && computerMoves.length === 0) {
    return 1;
  }
  let move = findTheThirdMove(computerMoves);
  if (move !== -1 && computerMoves.length > 1) {
    return move;
  }

  move = findTheThirdMove(playerMoves);
  console.log("Move after finding third move =>", move);
  if (move !== -1 && playerMoves.length > 1) {
    console.log("I'm defending")
    return move;
  }
  return makePair();
}

function playOneMove(currentPlayer, players) {
  const symbol = currentPlayer === 1 ? 'X' : 'O';
  const color = currentPlayer === 1 ? "\x1b[31m" : "\x1b[36m";
  const move = currentPlayer === 1 ? +computerMove() : parseInt(prompt(`${players[currentPlayer]} turn => `));
  if (isInValidInput(move)) {
    console.log("INVALID INPUT");
    return playAgain(1, players, "");
  }
  currentPlayer === 1 ? computerMoves.push(move) : playerMoves.push(move);
  const onesMoves = computerMoves.join("");
  const twosMoves = playerMoves.join("");
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
  clearEverything(invalidPairs)
  clearEverything(computerMoves)
  clearEverything(playerMoves)
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
function delay() {
  for (let i = 0; i < 1000000000; i++);
}

function delayRoll() {
  for (let i = 0; i < 500000000; i++);
}

const one = `_________\n|       |\n|   o   |\n|_______|`

const two = `_________\n|       |\n|  o o  |\n|_______|`

const three = `_________\n|  o    |\n|   o   |\n|____o̲__|`

const four = `_________\n|  o o  |\n|  o o  |\n|_______|`

const five = `_________\n|   o   |\n|  o o  |\n|__o̲_o̲__|`

const six = `_________\n|  o o  |\n|  o o  |\n|__o̲_o̲__|`

const POSSIBLE_VALUES = [one, one, two, three, four, five, six, six];

function createBoard() {
  const topLine = '_'.repeat(90) + "\n";
  const middleLine =
  `|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|\n`;
  
  let template = topLine;
  for (let index = 0; index < 15; index++) {
    template += middleLine;
  }
  template = template.trimEnd();
  
  const board = template.split('\n');
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }

  return board;
}

const BOARD = createBoard();
const BLUE_PATH = [
  [41, 39], [38, 39], [35, 39], [32, 39], [29, 39],
  [26, 33], [26, 27], [26, 21], [26, 15], [26, 9],
  [26, 3], [23, 3], [20, 3],
  [20, 9], [20, 15], [20, 21], [20, 27], [20, 33],
  [17, 39], [14, 39], [11, 39], [8, 39], [5, 39],
  [2, 39], [2, 45], [2, 51],
  [5, 51], [8, 51], [11, 51], [14, 51], [17, 51],
  [20, 57], [20, 63], [20, 69], [20, 75], [20, 81],
  [20, 87], [23, 87], [26, 87],
  [26, 81], [26, 75], [26, 69], [26, 63], [26, 57],
  [29, 51], [32, 51], [35, 51], [38, 51], [41, 51], [44, 51],
  [44, 45], [41, 45], [38, 45], [35, 45], [32, 45], [29, 45], [26, 45]
]

const RED_PATH = [
  [20, 9], [20, 15], [20, 21], [20, 27], [20, 33],
  [17, 39], [14, 39], [11, 39], [8, 39], [5, 39],
  [2, 39], [2, 45], [2, 51],
  [5, 51], [8, 51], [11, 51], [14, 51], [17, 51],
  [20, 57], [20, 63], [20, 69], [20, 75], [20, 81],
  [20, 87], [23, 87], [26, 87],
  [26, 81], [26, 75], [26, 69], [26, 63], [26, 57],
  [29, 51], [32, 51], [35, 51], [38, 51], [41, 51],
  [44, 51], [44, 45], [44, 39],
  [41, 39], [38, 39], [35, 39], [32, 39], [29, 39],
  [26, 33], [26, 27], [26, 21], [26, 15], [26, 9], [26, 3],
  [23, 3], [23, 9], [23, 15], [23, 21], [23, 27], [23, 33], [23, 39]
]

const GREEN_PATH = [
  [5, 51], [8, 51], [11, 51], [14, 51], [17, 51],
  [20, 57], [20, 63], [20, 69], [20, 75], [20, 81],
  [20, 87], [23, 87], [26, 87],
  [26, 81], [26, 75], [26, 69], [26, 63], [26, 57],
  [29, 51], [32, 51], [35, 51], [38, 51], [41, 51],
  [44, 51], [44, 45], [44, 39],
  [41, 39], [38, 39], [35, 39], [32, 39], [29, 39],
  [26, 33], [26, 27], [26, 21], [26, 15], [26, 9],
  [26, 3], [23, 3], [20, 3],
  [20, 9], [20, 15], [20, 21], [20, 27], [20, 33],
  [17, 39], [14, 39], [11, 39], [8, 39], [5, 39], [2, 39],
  [2, 45], [5, 45], [8, 45], [11, 45], [14, 45], [17, 45], [20, 45]
]

const YELLOW_PATH = [
  [26, 81], [26, 75], [26, 69], [26, 63], [26, 57],
  [29, 51], [32, 51], [35, 51], [38, 51], [41, 51],
  [44, 51], [44, 45], [44, 39],
  [41, 39], [38, 39], [35, 39], [32, 39], [29, 39],
  [26, 33], [26, 27], [26, 21], [26, 15], [26, 9],
  [26, 3], [23, 3], [20, 3],
  [20, 9], [20, 15], [20, 21], [20, 27], [20, 33],
  [17, 39], [14, 39], [11, 39], [8, 39], [5, 39],
  [2, 39], [2, 45], [2, 51],
  [5, 51], [8, 51], [11, 51], [14, 51], [17, 51],
  [20, 57], [20, 63], [20, 69], [20, 75], [20, 81], [20, 87],
  [23, 87], [23, 81], [23, 75], [23, 69], [23, 63], [23, 57], [23, 51]
]

const BLUE_COINS = [1, 2, 3, 4];
const RED_COINS = [1, 2, 3, 4];
const GREEN_COINS = [1, 2, 3, 4];
const YELLOW_COINS = [1, 2, 3, 4];

const BLUE_COIN_MOVES = [-1, -1, -1, -1];
const RED_COIN_MOVES = [-1, -1, -1, -1];
const GREEN_COIN_MOVES = [-1, -1, -1, -1];
const YELLOW_COIN_MOVES = [-1, -1, -1, -1];

const RED_LAST_MOVES = [[8, 15], [8, 21], [11, 15],[11, 15]];
const BLUE_LAST_MOVES = [[8, 69], [8, 75], [11, 69], [11, 75]];
const GREEN_LAST_MOVES = [[35, 69], [35, 75], [38, 69], [38, 75]];
const YELLOW_LAST_MOVES = [[35, 15], [35, 21], [38, 15], [38, 21]];

const COLORS = [
  "\x1b[40m" + "\x1b[36m",
  "\x1b[40m" + "\x1b[31m",
  "\x1b[40m" + "\x1b[32m",
  "\x1b[40m" + "\x1b[33m"
]

function coinsInBlueHome() {
  BOARD[35][15] = BLUE_COINS.includes(1) ? COLORS[0] + "1" + "\x1b[0m" : " ";
  BOARD[35][21] = BLUE_COINS.includes(2) ? COLORS[0] + "2" + "\x1b[0m" : " ";
  BOARD[38][15] = BLUE_COINS.includes(3) ? COLORS[0] + "3" + "\x1b[0m" : " ";
  BOARD[38][21] = BLUE_COINS.includes(4) ? COLORS[0] + "4" + "\x1b[0m" : " ";
}

function coinsInRedHome() {
  BOARD[8][15] = RED_COINS.includes(1) ? COLORS[1] + "1" + "\x1b[0m" : " ";
  BOARD[8][21] = RED_COINS.includes(2) ? COLORS[1] + "2" + "\x1b[0m" : " ";
  BOARD[11][15] = RED_COINS.includes(3) ? COLORS[1] + "3" + "\x1b[0m" : " ";
  BOARD[11][21] = RED_COINS.includes(4) ? COLORS[1] + "4" + "\x1b[0m" : " ";
}

function coinsInGreenHome() {
  BOARD[8][69] = GREEN_COINS.includes(1) ? COLORS[2] + "1" + "\x1b[0m" : " ";
  BOARD[8][75] = GREEN_COINS.includes(2) ? COLORS[2] + "2" + "\x1b[0m" : " ";
  BOARD[11][69] = GREEN_COINS.includes(3) ? COLORS[2] + "3" + "\x1b[0m" : " ";
  BOARD[11][75] = GREEN_COINS.includes(4) ? COLORS[2] + "4" + "\x1b[0m" : " ";
}

function coinsInYellowHome() {
  BOARD[35][69] = YELLOW_COINS.includes(1) ? COLORS[3] + "1" + "\x1b[0m" : " ";
  BOARD[35][75] = YELLOW_COINS.includes(2) ? COLORS[3] + "2" + "\x1b[0m" : " ";
  BOARD[38][69] = YELLOW_COINS.includes(3) ? COLORS[3] + "3" + "\x1b[0m" : " ";
  BOARD[38][75] = YELLOW_COINS.includes(4) ? COLORS[3] + "4" + "\x1b[0m" : " ";
}

function colourBoard(row, col) {
  if (row === 0) return "\x1b[30m";
  
  if (row > 18 && row < 28 && col > 36 && col < 55) {
    return "\x1b[48;2;255;165;0m";
  }
  
  if ((row < 19 && col < 37)
    || (row < 25 && row > 21 && col < 43 && col > 5)
  || (row > 18 && row < 22 && col < 13 && col > 5)) {
    return "\x1b[30m" + "\x1b[41m";
  }

  if ((row < 19 && col > 53)
    || (row < 22 && row > 3 && col < 49 && col > 41)
  || (row > 3 && row < 7 && col < 55 && col > 48)) {
    return "\x1b[30m" + "\x1b[42m";
  }
  
  if ((row > 27 && col > 53)
    || (row < 25 && row > 21 && col < 85 && col > 48)
  || (row > 24 && row < 28 && col < 85 && col > 77)) {
    return "\x1b[30m" + "\x1b[43m";
  }
  
  if ((row > 27 && col < 37)
    || (row < 43 && row > 24 && col < 49 && col > 41)
  || (row > 39 && row < 43 && col < 43 && col > 35)) {
    return "\x1b[30m" + "\x1b[46m";
  }

  if ((row > 23 && row < 28 && col > 11 && col < 19)
    || (row > 6 && row < 10 && col > 35 && col < 43)
  || (row > 17 && row < 22 && col > 71 && col < 79)
  || (row > 36 && row < 40 && col > 47 && col < 55)) {
    return "\x1b[30m" + "\x1b[48;2;211;211;211m";
  }
  
  return "\x1b[30m" + "\x1b[107m";
}

function coinsInHome() {
  coinsInRedHome();
  coinsInGreenHome();
  coinsInBlueHome();
  coinsInYellowHome();
}

function isInSafeJone() {
  if ((row > 23 && row < 28 && col > 11 && col < 19)
    || (row > 6 && row < 10 && col > 35 && col < 43)
  || (row > 17 && row < 22 && col > 71 && col < 79)
  || (row > 36 && row < 40 && col > 47 && col < 55)) {
    return true;
  }

  if ((row > 17 && row < 22 && col > 5 && col < 13)
    || (row > 3 && row < 7 && col > 47 && col < 55)
  || (row > 23 && row < 28 && col > 77 && col < 85)
  || (row > 41 && row < 46 && col > 35 && col < 43)) {
    return true;
  }

  return false;
}

function displayBoard(path, coin, color) {
  console.clear();
  coinsInHome();
  const path_row = path[0];
  const path_col = path[1];
  const resetColour = "\x1b[0m";
  let string = "";
  for (let row = 0; row < BOARD.length; row++) {
    for (let col = 0; col < BOARD[row].length; col++) {
      const currentElemnt = BOARD[row][col];
      if (row === path_row && col === path_col) string += color + coin + resetColour;
      else string += colourBoard(row, col) + currentElemnt + resetColour;
    }
    string += '\n';
  }
  console.log(string);
}

function findEmptyPlace(row, col) {
  if (BOARD[row][col] === " ")
    return [row, col];

  if (BOARD[row][col - 2] === " ")
    return [row, col - 2];

  if (BOARD[row][col + 2] === " ")
    return [row, col + 2];

  if (BOARD[row][col - 1] === " ")
    return [row, col - 1];

  if (BOARD[row][col + 1] === " ")
    return [row, col + 1];

  return [row + 1, col];
}

function addToBoard(indexes, coin, color = "", LAST_MOVES) {
  const currentPlace = findEmptyPlace(indexes[0], indexes[1])
  const row = currentPlace[0];
  const col = currentPlace[1];
  BOARD[row][col] = color + coin + "\x1b[0m";
  LAST_MOVES[coin] = currentPlace;
}

function startCoin(player, coin) {
  switch (player) {
    case 1: addToBoard([BLUE_PATH[0][0], BLUE_PATH[0][1]], coin, COLORS[0]); break;
    case 2: addToBoard([RED_PATH[0][0], RED_PATH[0][1]], coin, COLORS[1]); break;
    case 3: addToBoard([GREEN_PATH[0][0], GREEN_PATH[0][1]], coin, COLORS[2]); break;
    case 4: addToBoard([YELLOW_PATH[0][0], YELLOW_PATH[0][1]], coin, COLORS[3]); break;
  }
}

function moveInPath(path, count, moves, coin, color) {
  for (let index = count; index <= count + moves; index++) {
    displayBoard(path[index], coin, color);
    delay()
  }
  console.log(count, moves)
}

function modifyHomeCoins(player, respone) {
  switch (player) {
    case 1: BLUE_COINS[BLUE_COINS.indexOf(respone)] = " "; break;
    case 2: RED_COINS[RED_COINS.indexOf(respone)] = " "; break;
    case 3: GREEN_COINS[GREEN_COINS.indexOf(respone)] = " "; break;
    case 4: YELLOW_COINS[YELLOW_COINS.indexOf(respone)] = " "; break;
  }
}

function selectPath(player) {
  switch(player) {
    case 1: return BLUE_PATH;
    case 2: return RED_PATH;
    case 3: return GREEN_PATH;
    case 4: return YELLOW_PATH;
  }
}

function selectCoinMoves(player) {
  switch(player) {
    case 1: return BLUE_COIN_MOVES;
    case 2: return RED_COIN_MOVES;
    case 3: return GREEN_COIN_MOVES;
    case 4: return YELLOW_COIN_MOVES;
  }
}

function selectCoinsInHome(player) {
  switch(player) {
    case 1: return BLUE_COINS;
    case 2: return RED_COINS;
    case 3: return GREEN_COINS;
    case 4: return YELLOW_COINS;
  }
}

function selectLastMoves(player) {
  switch(player) {
    case 1: return BLUE_LAST_MOVES;
    case 2: return RED_LAST_MOVES;
    case 3: return GREEN_LAST_MOVES;
    case 4: return YELLOW_LAST_MOVES;
  }
}

function isGameFinished() {
  for (let i = 1; i < 5; i++) {
    const COIN_MOVES = selectCoinMoves(i);
    let index = 0;
    while (COIN_MOVES[index] === 56 && index < COIN_MOVES.length) {
      index++
    }
    if (index === COIN_MOVES.length) {
      return true;
    }
  }
  return false;
}

function findTheSoloCoin(player, moves) {
  const COIN_MOVES = selectCoinMoves(player);
  let coin = -1;
  let count = 0;
  for (let index = 0; index < COIN_MOVES.length; index++) {
    if (COIN_MOVES[index] !== -1 && COIN_MOVES[index] !== 56
      && (COIN_MOVES[index] + moves) < 57) {
      coin = index + 1;
      count++;
    }
  }
  if (count === 0) {
    return -100;
  }
  if (count === 1)
    return coin;
  return -1;
}

function clearOldMove(LAST_MOVES, index) {
  const row = LAST_MOVES[index][0];
  const col = LAST_MOVES[index][1];
  BOARD[row][col] = " ";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

function isOccupiedBy(currentMove, currentPlayer) {
  let count = 1;
  let player = currentPlayer;
  while (count !== 4) {
    const gamer = (player + 1) % 4 === 0 ? 4 : (player + 1) % 4;
    const LAST_MOVES = selectLastMoves(gamer);
    console.log("LAST_MOVES =>", LAST_MOVES)
    console.log("Current Move =>", currentMove);
    for (let index = 0; index < LAST_MOVES.length; index++) {
      if (areEqual(currentMove, LAST_MOVES[index])) {
        const coin = BOARD[currentMove[0]][currentMove[1]];
        clearOldMove(LAST_MOVES, index);
        return [gamer, coin];
      }
    }
    player++;
    count++;
  }
  return -1;
}

function killIt(player, coin) {
  let index = +coin[10]
  const PATH = selectPath(player);
  const noOfMoves = selectCoinMoves(player);
  const count = noOfMoves[index - 1];
  for (let index = count; index >= 0; index--) {
    displayBoard(PATH[index], +coin[10], "\x1b[40m" + "\x1b[32m");
    delay()
  }
  noOfMoves[index - 1] = -1;
  const coinsInHome = selectCoinsInHome(player);
  coinsInHome[index - 1] = index;
}

function roll(currentPlayer) {
  let randomValue = Math.floor(Math.random() * 7);
  for (let i = 0; i < 20; i++){
    console.clear();
    randomValue = Math.floor(Math.random() * 7);
    displayBoard(100, 100);
    console.log(COLORS[currentPlayer - 1] + POSSIBLE_VALUES[randomValue] + "\x1b[0m")
    delayRoll()
  }

  if (randomValue === 0) return 1;
  if (randomValue === 7) return 6;
  return randomValue;
}

function play(PLAYERS) {
  let gamer = 0;
  while (!isGameFinished()) {
    const currentPlayer = (gamer % 4) + 1;
    displayBoard([100, 100])
    const color = COLORS[currentPlayer - 1];
    let wait = prompt(`${color}${PLAYERS[currentPlayer - 1]}'s Turn (Click Enter to Roll)`)
    let moves = roll(currentPlayer);
    console.log(color + "\n_____________________________________\n")
    wait = prompt(color + "Outcome => " + moves + "\n(Click Enter to continue)")
    const coin = findTheSoloCoin(currentPlayer, moves);
    if (coin === -100 && moves !== 6) {
      gamer++;
      continue;
    }
    const respone = coin === -1 || moves === 6 ? +prompt("Pick a Coin (1, 2, 3, 4) :") : coin;
    const noOfMoves = selectCoinMoves(currentPlayer);
    const count = noOfMoves[respone - 1];
    const PATH = selectPath(currentPlayer);
    const LAST_MOVES = selectLastMoves(currentPlayer);

    if (moves === 6 && count === -1) {
      noOfMoves[respone - 1] += 1;
      modifyHomeCoins(currentPlayer, respone);
      console.log(count)
      moveInPath(PATH, 0, 0, respone, color);
      addToBoard(PATH[0], respone, color, LAST_MOVES);
    } else if (count !== -1) {
      console.log(respone)
      clearOldMove(LAST_MOVES, respone);
      moveInPath(PATH, count, moves, respone, color);
      noOfMoves[respone - 1] += moves;
      const occupied = isOccupiedBy(PATH[noOfMoves[respone-1]], currentPlayer)
      addToBoard(PATH[count + moves], respone, color, LAST_MOVES);

      if (occupied !== -1) {
        killIt(occupied[0], occupied[1])
      }
    }

    if (moves === 6) {
      continue;
    }
    displayBoard([100, 100])
    gamer++;
  }
}

function namesOfThePlayers() {
  console.clear();
  console.log("ENTER NAMES OF THE PLAYERS");
  console.log("__________________________");
  const player1 = prompt("Enter name of the player - 1 (BLUE) : ")
  const player2 = prompt("Enter name of the player - 2 (RED) : ")
  const player3 = prompt("Enter name of the player - 3 (GREEN) : ")
  const player4 = prompt("Enter name of the player - 4 (YELLOW) : ")
  return [player1, player2, player3, player4];
}

function main() {
  const players = namesOfThePlayers();
  play(players);
}

main();
const WIN_MESSAGE = `
          __                              __
\\\\  //  //  \\\\  ||  ||      ||      ||  //  \\\\  ||\\\\   ||
 \\\\//   ||  ||  ||  ||      ||      ||  ||  ||  || \\\\  ||
  ||    ||  ||  ||  ||      || //\\\\ ||  ||  ||  ||  \\\\ ||
  ||    \\\\__//  \\\\__//      \\\\//  \\\\//  \\\\__//  ||   \\\\||
`

function createBoard() {
  const topLine = `_______________________________________________________\n`;
  const nextLine = 
  `|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|_____|_____|_____|_____|_____|_____|_____|_____|_____|
`;
  
  const template = topLine + nextLine.repeat(9);
  const board = template.split('\n');
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }
  return board;
}

const BOARD = createBoard();
const GIVEN_HINTS = [
  [1, 1, 5], [1, 2, 3], [1, 4, 6], [1, 8, 9], [1, 9, 8],
  [2, 2, 7], [2, 4, 1], [2, 5, 9], [2, 6, 5],
  [3, 8, 6], 
  [4, 1, 8], [4, 4, 4], [4, 7, 7],
  [5, 2, 6], [5, 4, 8], [5, 6, 3], [5, 8, 2],
  [6, 3, 3], [6, 6, 1], [6, 9, 6], 
  [7, 2, 6],
  [8, 4, 4], [8, 5, 1], [8, 6, 9], [8, 8, 8],
  [9, 1, 2], [9, 2, 8], [9, 6, 5], [9, 8, 7], [9, 9, 9]
]
const GIVEN_HINTS_INDEX = []
const USER_INPUTS = [
  [5, 3, 0, 6, 0, 0, 0, 9, 8],
  [0, 7, 0, 1, 9, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 4, 0, 0, 7, 0, 0],
  [0, 6, 0, 8, 0, 3, 0, 2, 0],
  [0, 0, 3, 0, 0, 1, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 1, 9, 0, 8, 0],
  [2, 8, 0, 0, 0, 5, 0, 7, 9]
]

function getFirstIndex(outerBox, innerBox) {
  if ("123".includes(outerBox)) {
    if ("123".includes(innerBox)) {
      return 2;
    }

    if ("456".includes(innerBox)) {
      return 5;
    }

    if ("789".includes(innerBox)) {
      return 8;
    }
  }

  if ("456".includes(outerBox)) {
    if ("123".includes(innerBox)) {
      return 11;
    }

    if ("456".includes(innerBox)) {
      return 14;
    }

    if ("789".includes(innerBox)) {
      return 17;
    }
  }

  if ("789".includes(outerBox)) {
    if ("123".includes(innerBox)) {
      return 20;
    }

    if ("456".includes(innerBox)) {
      return 23;
    }

    if ("789".includes(innerBox)) {
      return 26;
    }
  }
}

function getSecondIndex(outerBox, innerBox) {
  if ("147".includes(outerBox)) {
    if ("147".includes(innerBox)) {
      return 3;
    }

    if ("258".includes(innerBox)) {
      return 9;
    }

    if ("369".includes(innerBox)) {
      return 15;
    }
  }

  if ("258".includes(outerBox)) {
    if ("147".includes(innerBox)) {
      return 21;
    }

    if ("258".includes(innerBox)) {
      return 27;
    }

    if ("369".includes(innerBox)) {
      return 33;
    }
  }

  if ("369".includes(outerBox)) {
    if ("147".includes(innerBox)) {
      return 39;
    }

    if ("258".includes(innerBox)) {
      return 45;
    }

    if ("369".includes(innerBox)) {
      return 51;
    }
  }
}

function placeGivenNumber() {
  for (let index = 0; index < GIVEN_HINTS.length; index++) {
    const position = GIVEN_HINTS[index];
    const outerBox = position[0] + "";
    const innerBox = position[1] + "";
    const number = position[2];
    const row = getFirstIndex(outerBox, innerBox);
    const col = getSecondIndex(outerBox, innerBox);
    GIVEN_HINTS_INDEX.push([row, col]);
    BOARD[row][col] = number;
  }
}

placeGivenNumber();

function isGiven(row, col) {
  for (let index = 0; index < GIVEN_HINTS_INDEX.length; index++) {
    const currRow = GIVEN_HINTS_INDEX[index][0];
    const currCol = GIVEN_HINTS_INDEX[index][1];
    if (row === currRow && col === currCol) {
      return true;
    }
  }
  return false;
}

function displayBoard() {
  let string = "";
  for (let row = 0; row < BOARD.length; row++) {
    for (let col = 0; col < BOARD[row].length; col++) {
      const currentElemnt = BOARD[row][col];
      if (row % 9 === 0 || col % 18 === 0 || isGiven(row, col)) {
        string += "\x1b[36m" + currentElemnt + "\x1b[0m";
      } else string += "\x1b[38;2;128;128;128m" + currentElemnt + "\x1b[0m";
    }
    string += '\n';
  }
  console.log(string)
}

function markNumber(outerBox, innerBox, number) {
  const row = getFirstIndex(outerBox, innerBox);
  const col = getSecondIndex(outerBox, innerBox);
  BOARD[row][col] = number;
  USER_INPUTS[outerBox - 1][innerBox - 1] = number;
}

function areMultiple(inputs) {
  for (let number = 1; number < 10; number++) {
    if (inputs.indexOf(number) !== inputs.lastIndexOf(number)) {
      return true;
    }
  }
  return false;
}

function isGameFinished() {
  for (let index = 0; index < USER_INPUTS.length; index++) {
    if (USER_INPUTS[index].includes(0)) return false;
  }
  
  for (let index = 0; index < USER_INPUTS.length; index++) {
    if (areMultiple(USER_INPUTS[index])) {
      console.log("Game Haven't Completed !!")
      return false;
    }
  }
  return true;
}

function isInvalid(outerBox, innerBox, number) {
  if (outerBox > 9 || innerBox > 9 || number > 9
    || outerBox < 1 || innerBox < 1 || number < 1) return true;
  const row = getFirstIndex(outerBox, innerBox);
  const col = getSecondIndex(outerBox, innerBox);
  for (let index = 0; index < GIVEN_HINTS_INDEX.length; index++) {
    if ((row === GIVEN_HINTS_INDEX[index][0] &&
      col === GIVEN_HINTS_INDEX[index][1])) return true;
  }
  return false;
}

function play() {
  displayBoard();
  while (!isGameFinished()) {
    // console.log(USER_INPUTS)
    const outerBox = parseInt(prompt("Enter the outer box number (1 - 9) : "));
    const innerBox = parseInt(prompt("Enter the inner box number (1 - 9) : "));
    const number = parseInt(prompt("Enter the number (1 - 9) : "));
    if (isInvalid(outerBox, innerBox, number)) {
      console.log("INVALID !!!")
      continue;
    }
    markNumber(outerBox, innerBox, number);
    console.clear();
    displayBoard()
  }
  console.clear();
  console.log(WIN_MESSAGE);
}

play()
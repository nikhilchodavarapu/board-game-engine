function checkGuess(pick, secretNumber) {
  if (pick < secretNumber) return -1;
  if (pick > secretNumber) return 1;
  return 0;
}

function displayResult(remainingChances, result) {
  if (remainingChances === 1) return;
  const symbol = result === 1 ? '📈' : '📉';
  const moreOrLess = result === -1 ? 'more' : 'less';
  console.log(`The sceret number is\x1b[33m ${moreOrLess} than\x1b[0m your guess !!!${symbol}`);
  console.log(`You have\x1b[31m ${remainingChances - 1}\x1b[0m chances left !!!\n\n`);
}

function guessNumber(secretNumber, remainingChances = 5) {
  if (remainingChances === 0) {
    console.log(`\n\n\x1b[1m\x1b[32mOops! No more chances!!!😓\x1b[0m`);
    console.log(`The secrect number is\x1b[36m ${secretNumber} 😅\x1b[0m`);
    return -1;
  }
  const pick = parseInt(prompt("Enter number : "));
  const result = checkGuess(pick, secretNumber);
  if (result !== 0) {
    displayResult(remainingChances, result);
    return guessNumber(secretNumber, remainingChances - 1);
  }
  console.log(`\n\n\x1b[1m\x1b[32mYayyyy! You Won!!!🤩\x1b[0m`);
  return 1;
}

function thinkOfANumber(startRange, endRange) {
  const endingLimit = endRange - startRange + 1;
  const number = Math.floor(Math.random() * endingLimit) + startRange;
  return number;
}

function heading(text) {
  const underline = '_'.repeat(text.length);
  console.log(`${text}\n${underline}`);
}

function selectRange(mode, difficulty){
  const range = [];
  const end = difficulty === 6 ? 5 : difficulty;
  let startRange = 1;
  let endRange = 200 * end;
  console.clear();
  if (mode === 2) {
    startRange = parseInt(prompt("What is the start range ? "));
    endRange = parseInt(prompt("What is the end range ? "));
  }
  console.log("The secrect number is between", startRange, "and", endRange);
  range.push(startRange);
  range.push(endRange);
  return range;
}

function playAgain(result) {
  console.log();
  const challenge = result === 1 ? "Do you wanna continue your winning streak ?😎" :
                            "No problem! I think you can win this time🤩\nAre you ready😉";
  const response = confirm(challenge);
  if (response) play();
}

function selectDifficulty() {
  heading("Select Dififculty");
  const respone = parseInt(prompt("1. Very easy\n2. Easy\n3. Medium\n4. Hard\n5. Extreme Hard\n6. Impossible\n"));
  return respone;
}

function selectMode() {
  heading("SELECT MODE");
  const respone = parseInt(prompt("1. AUTO MODE (You just have to select difficulty)\n2. MANUAL MODE (You have set secret number range, number of chances on your own"));
  return respone;
}

function selectChances(mode, difficulty) {
  if (mode === 2) {
    return parseInt(prompt("How many chances you want ? "))
  }
  return difficulty === 6 ? 5 : 10;
}

function play() {
  console.clear();
  const mode = selectMode();
  let difficulty = 0;
  if (mode === 1) {
    difficulty = selectDifficulty();
  }
  const range = selectRange(mode, difficulty);
  const secretNumber = thinkOfANumber(range[0], range[1]);
  const chances = selectChances(mode, difficulty);
  const result = guessNumber(secretNumber, chances);
  playAgain(result);
}

function main() {
  play();
  console.log("\n\nHave a nice day😊🤍");
}

main();
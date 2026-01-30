const QUESTIONS = [
  "What is the name of an animal that shares your first letter?",
  "What fruit starts with the second letter of your name?",
  "What country name begins with your third letter?",
  "What color starts with the fourth letter of your name?",
  "What city name begins with the fifth letter of your name?",
  "What food item starts with the sixth letter of your name?",
  "What sport starts with the seventh letter of your name?",
  "What song title starts with the eighth letter of your name?",
  "What flower starts with the ninth letter of your name?",
  "What is the title of a movie that starts with your 10th letter?"
];

function getIndex(indexes, noOfletters) {
  let currentIndex = Math.floor(Math.random() * (noOfletters));
  while (indexes.includes(currentIndex)) {
    currentIndex = Math.floor(Math.random() * (noOfletters));
  }
  return currentIndex;
}

function askQuestion() {
  const noOfletters = parseInt(prompt("How many letters are there in your name? "));
  let indexes = "";
  const name = [];
  for (let count = 0; count < noOfletters; count++) {
    const currentIndex = getIndex(indexes, noOfletters);
    indexes += currentIndex;
    const char = prompt(`${QUESTIONS[currentIndex]} - ${currentIndex}`)[0];
    name[currentIndex] = char;
  }
  return name.join("");
}

function play() {
  console.log(askQuestion());
}

play();
const one = `
_________
|       |
|   o   |
|_______|`

const two = `
_________
|       |
|  o o  |
|_______|`

const three = `
_________
|  o    |
|   o   |
|____o̲__|`

const four = `
_________
|  o o  |
|  o o  |
|_______|`

const five = `
_________
|   o   |
|  o o  |
|__o̲_o̲__|`

const six = `
_________
|  o o  |
|  o o  |
|__o̲_o̲__|`

function delayRoll() {
  for (let i = 0; i < 500000000; i++);
}

const POSSIBLE_VALUES = [one, one, two, three, four, five, six, six];
function roll() {
  let randomValue = Math.floor(Math.random() * 7);
  for (let i = 0; i < 20; i++){
    console.clear();
    randomValue = Math.floor(Math.random() * 7);
    console.log(POSSIBLE_VALUES[randomValue])
    delayRoll()
  }
}

roll()
import { displayBoard } from "./render.js";

const one = `
┌─────┐
│  ●  │
└─────┘`;

const two = `
┌─────┐
│  ●  │
│  ●  │
└─────┘`;

const three = `
┌─────┐
│ ● ● │
│  ●  │
└─────┘`;

const four = `
┌─────┐
│ ● ● │
│ ● ● │
└─────┘`;

const five = `
┌─────┐
│  ●  │
│ ● ● │
│ ● ● │
└─────┘`;

const six = `
┌─────┐
│ ● ● │
│ ● ● │
│ ● ● │
└─────┘`;

const POSSIBLE_VALUES = [one, one, two, three, four, five, six, six, six];
export const roll = (board, positions) => {
  return new Promise((resolve) => {
    let randomValue = Math.floor(Math.random() * 8);
    let i = 0;
    let time = 100;
    const intervalId = setInterval(() => {
      // console.clear();
      randomValue = Math.floor(Math.random() * 8);
      displayBoard(board, positions);
      console.log(POSSIBLE_VALUES[randomValue]);
      i++;
      if (i === 20) {
        clearInterval(intervalId);
        const value = randomValue < 1 ? 1 : randomValue > 6 ? 6 : randomValue;
        resolve(value);
      }
      if (i % 2 === 0) {
        time += 50;
      }
    }, time);
  });
};

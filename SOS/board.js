export function createBoard() {
  const topLine = "_".repeat(90) + "\n";
  const middleLine =
    `|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|_____|\n`;

  let template = topLine;
  for (let index = 0; index < 15; index++) {
    template += middleLine;
  }
  template = template.trimEnd();

  const board = template.split("\n");
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }

  return board;
}

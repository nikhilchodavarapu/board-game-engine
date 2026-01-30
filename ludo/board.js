export function createBoard(size) {
  const topLine = "_".repeat(6 * size) + "\n";
  const midLine = "│" + "     │".repeat(size) + "\n";
  const bottomLine = "│" + "▁▁▁▁▁│".repeat(size) + "\n";
  const middleLine = midLine + midLine + bottomLine;

  let template = topLine;
  for (let index = 0; index < size; index++) {
    template += middleLine;
  }
  template = template.trimEnd();

  const board = template.split("\n");
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }

  return board;
}

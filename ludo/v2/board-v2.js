// ┌ ┐ └ ┘ ─ │ ┼ ┬ ┴ ├ ┤
export const createBoard = (rows = 15, cols = 15) => {
  const topLine = "┌" + "───┬".repeat(cols - 1) + "───┐\n";
  const lastLine = "└" + "───┴".repeat(cols - 1) + "───┘";
  const midLine = "│   ".repeat(cols) + "│\n";
  const lastLineOfRow = "├" + "───┼".repeat(cols - 1) + "───┤\n";
  const row = midLine + lastLineOfRow;
  let template = topLine;
  for (let i = 1; i < rows; i++) {
    template += row;
  }
  template += midLine + lastLine;

  const board = template.split("\n").map((x) => x.split(""));
  return board;
};

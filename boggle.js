function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}

/**
 * Prints out a boggle board.
 */
function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    for (let place of row) {
      if (place === 'Q') {
        place = 'Qu';
      }
    }
    console.log(row.join(' '));
  }
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  // This is your job. :)
  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

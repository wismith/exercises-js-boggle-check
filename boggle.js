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
    console.log(row.join(' '));
  }
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let row of boggleBoard) {
    for (let i = 0; i < row.length; i++) {
      row[i] = alphabet[Math.floor(alphabet.length * Math.random())];
    }
  }
  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

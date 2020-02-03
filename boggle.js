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
  let dice = [
    'AAEEGN',
    'ELRTTY',
    'AOOTTW',
    'ABBJOO',
    'EHRTVW',
    'CIMOTU',
    'DISTTY',
    'EIOSST',
    'DELRVY',
    'ACHOPS',
    'EIMNQU',
    'EEINSU',
    'EEGHNW',
    'AFFKPS',
    'HLNNRZ',
    'DEILRX',
  ];

  for (let j = 0; j < boggleBoard.length; j++) {
    for (let i = 0; i < boggleBoard[j].length; i++) {
      let die = dice.splice(Math.floor(Math.random()*dice.length),1)[0];
      let char = die[Math.floor(Math.random()*die.length)];
      boggleBoard[j][i] = char;
      console.log
    }
  }

  return boggleBoard;
}

let board = newBoggleBoard();

board = shake(board);

printBoggleBoard(board);

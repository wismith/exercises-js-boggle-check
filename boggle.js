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
  // Create array of 6-sided dice
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
      // NOTE: I use splice below to prevent repetition of die on the board
      let die = dice.splice(Math.floor(Math.random() * dice.length),1)[0];
      // NOTE: Don't need slice here, bc only assigning one of the sides of the die to be 'up'
      let char = die[Math.floor(Math.random() * 6)];
      boggleBoard[j][i] = char;
    }
  }

  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

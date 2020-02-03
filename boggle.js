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
  let includesQu = false;
  for (let i = 0; i < boggleBoard.length; i++) {
    for (let j = 0; j < boggleBoard[i].length; j++) {
      if (boggleBoard[i][j] === 'Q') {
        boggleBoard[i][j] = 'Qu';
        includesQu = true;
      }
    }
  }

  if (includesQu) {
    for (let i = 0; i < boggleBoard.length; i++) {
      for (let j = 0; j < boggleBoard[i].length; j++) {
        boggleBoard[i][j] = boggleBoard[i][j].padEnd(2);
      }
    }
  }


  for (let row of boggleBoard) {
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

  for (let i = 0; i < boggleBoard.length; i++) {
    for (let j = 0; j < boggleBoard[i].length; j++) {
      // NOTE: I use splice below to prevent repetition of die on the board
      let die = dice.splice(Math.floor(Math.random() * dice.length),1)[0];
      // NOTE: Don't need slice here, bc only assigning one of the sides of the die to be 'up'
      let char = die[Math.floor(Math.random() * 6)];
      boggleBoard[i][j] = char;
    }
  }

  return boggleBoard;
}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

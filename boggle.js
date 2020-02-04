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

// Function to shuffle array, courtesy of Lily
function shuffle(array) {
  var currentIndex = array.length; // temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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

  let randomDice = shuffle(dice);


  for (let i = 0; i < boggleBoard.length; i++) {
    for (let j = 0; j < boggleBoard[i].length; j++) {
      // NOTE: I use splice below to prevent repetition of die on the board
      let die = randomDice.pop();
      // NOTE: Don't need slice here, bc only assigning one of the sides of the die to be 'up'
      let char = die[Math.floor(Math.random() * 6)];
      boggleBoard[i][j] = char;
    }
  }

  return boggleBoard;
}


function boggleBoardContainsWord(board, word) {
  if (word.length > board.length) {
    return false;
  }

  let lettersExist = [];
  for (let letter of word.split('')) {
    let exists = false;
    for (let row of board) {
      if (row.includes(letter)) {
        exists = true;
      }
    }
    lettersExist.push(exists);
  }
  if (lettersExist.includes(false)) {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i].join('').includes(word) || board[i].reverse().join('').includes(word)) {
      return true;
    }
  }
  let columns = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let column = [];
      column.push(board[j][i]);
    }
  }
  for (let column of columns) {
    if (column.join('').includes(word) || column.reverse().join('').includes(word)) {
      return true;
    }
  }
  return false;

}

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

console.log(boggleBoardContainsWord(board, 'IS'));

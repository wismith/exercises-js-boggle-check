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
  /*
  let includesQu = false;
  for (let i = 0; i < boggleBoard.length; i++) {
    for (let j = 0; j < boggleBoard[i].length; j++) {
      if (boggleBoard[i][j] === 'Q') {
        boggleBoard[i][j] = 'Qu';
        includesQu = true;
      }
    }
  }
  */
  /*
  if (includesQu) {
    for (let i = 0; i < boggleBoard.length; i++) {
      for (let j = 0; j < boggleBoard[i].length; j++) {
        boggleBoard[i][j] = boggleBoard[i][j].padEnd(2);
      }
    }
  }
  */
  function formatRow(row) {
    let formattedRow = [];
    for (let letter of row) {
      if (letter === 'Q') {
        formattedRow.push('Qu');
      } else {
        formattedRow.push(letter.padEnd(2));
      }
    }
    return formattedRow;
  }

  console.log();
  for (let row of boggleBoard) {
    console.log(formatRow(row).join(' '));
  }
  console.log();
}

// Function to shuffle array, courtesy of Lily
function shuffle(array) {
  let currentIndex = array.length; // temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    let temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(board) {
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

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = randomDice[i * board.length + j][Math.floor(Math.random() * dice[0].length)];
    }
  }

  return board;
}

function boggleBoardContainsWord(board, word) {
  if (word.length > board.length) {
    return false;
  }

  let lettersExist = [];
  for (let letter of word) {
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

  function rowContainsWord(i) {
    if (board[i].join('').includes(word) || board[i].reverse().includes(word)) {
      return true;
    }
  }

  function columnContainsWord(j) {
    let column = [];
    for (let i = 0; i < board.length; i++) {
      column.push(board[i][j]);
    }
    if (column.join('').includes(word) || column.reverse().includes(word)) {
      return true;
    }
  }

  function checkDiagonals() {
    let diagonals = [];
    function diagonalConstructor(listI, listJ) {
      let diagonal = [];
      for (let i = 0; i < listI.length; i++) {
        diagonal.push(board[listI[i]][listJ[i]]);
      }
      return diagonal;
    }
    for (let [x, y] of [
      [[0], [0]],
      [[1, 0], [0, 1]],
      [[2, 1, 0], [0, 1, 2]],
      [[3, 2, 1, 0], [0, 1, 2, 3]],
      [[3, 2, 1], [1, 2, 3]],
      [[3, 2], [2, 3]],
      [[3], [3]],
      [[0], [3]],
      [[0, 1], [2, 3]],
      [[0, 1, 2], [1, 2, 3]],
      [[0, 1, 2, 3], [0, 1, 2, 3]],
      [[1, 2, 3], [0, 1, 2]],
      [[2, 3], [0, 1]],
      [[3], [0]],
    ]) {
      diagonals.push(diagonalConstructor(x, y));
    }

    for (let diagonal of diagonals) {
      if (diagonal.join('').includes(word) || diagonal.reverse().join('').includes(word)) {
        return true;
      }
    }
    return false;
  }

  // Check Rows
  for (let i = 0; i < board.length; i++) {
    if (rowContainsWord(i)) {
      return true;
    };
  }
  // Check columns
  for (let j = 0; j < board.length; j++) {
    if (columnContainsWord(j)) {
      return true;
    }
  }
  // Check Diagonals
  if (checkDiagonals()) {
    return true;
  };

  return false;
}

if (require.main === module) {
  let board = newBoggleBoard();

  shake(board);

  printBoggleBoard(board);
  console.log(boggleBoardContainsWord(board, 'IS'));
}

// Global variables Types - a string (e.g. Rock, Paper, Scissors
// and Values - a number (e.g. 1-99)

// Types - Player One
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
// Types - Player Two
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;

// Values - Player One
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
// Values - Player Two
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

// For reference in setPlayerMoves and setComputerMoves
const moveTypes = ['rock', 'paper', 'scissors'];


// Game Functions

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  
  const typeArgs = [moveOneType, moveTwoType, moveThreeType];
  const valueArgs = [moveOneValue, moveTwoValue, moveThreeValue];
  let valueSum = 0;

  // Check if type arguments rock, paper, and scissors were provided as strings 
  for (const type of typeArgs) {
    if (!moveTypes.includes(type)) {
      return;
    }
  }

  // Check if all 3 value arguments are provided as numbers 1-99
  // and that their sum does not exceed 99
  for (const value of valueArgs) {
    valueSum += value; 
    if (typeof value !== 'number' || value < 1 || value > 99 || valueSum > 99) {
      return;
    }
  }
  
  // When checks pass set player global variables
  if (player === 'Player One') {
    // set move 1
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    // set move 2
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    // set move 3
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    // set move 1
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    // set move 2
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    // set move 3
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
  
}

const getRoundWinner = (round) => {
  // accepts round number between 1-3 and returns the winning player e.g. 'Player One' 
  if (round < 1 || round > 3) {
    return null;
  }

  // Store game globals in arrays so round number is tracked as index - 1
  const playerOneMoves = [
    {
      type: playerOneMoveOneType,
      value: playerOneMoveOneValue
    },
    {
      type: playerOneMoveTwoType,
      value: playerOneMoveTwoValue
    },
    {
      type: playerOneMoveThreeType,
      value: playerOneMoveThreeValue
    }
  ];

  const playerTwoMoves = [
    {
      type: playerTwoMoveOneType,
      value: playerTwoMoveOneValue
    },
    {
      type: playerTwoMoveTwoType,
      value: playerTwoMoveTwoValue
    },
    {
      type: playerTwoMoveThreeType,
      value: playerTwoMoveThreeValue
    }
  ];

  // Compare Move Types for the round, then compare values if types match
  const playerOneMove = playerOneMoves[round - 1]; // { type, value }
  const playerTwoMove = playerTwoMoves[round - 1]; // { type, value }

  return rockPaperScissors(playerOneMove, playerTwoMove);
}



const clearMoves = () => {
  // Reset all globals to undefined 

  // Types - Player One
  playerOneMoveOneType = undefined;
  playerOneMoveTwoType = undefined;
  playerOneMoveThreeType = undefined;
  // Types - Player Two
  playerTwoMoveOneType = undefined;
  playerTwoMoveTwoType = undefined;
  playerTwoMoveThreeType = undefined;

  // Values - Player One
  playerOneMoveOneValue = undefined;
  playerOneMoveTwoValue = undefined;
  playerOneMoveThreeValue = undefined;
  // Values - Player Two
  playerTwoMoveOneValue = undefined;
  playerTwoMoveTwoValue = undefined;
  playerTwoMoveThreeValue = undefined;
};


const rockPaperScissors = (moveOne, moveTwo) => {
  // Returns the winning player string based on the rules object, calls compareValues for a draw
  const moveTypeOne = moveOne.type;
  const moveTypeTwo = moveTwo.type;
  const moveValueOne = moveOne.value;
  const moveValueTwo = moveTwo.value;

  // check if types & values were set
  if (!moveTypeOne || !moveTypeTwo || !moveValueOne || !moveValueTwo) {
    return null
  }

  // Define rules where true = win
  const rules = {
    'rock': {
      'scissors': true
    },
    'paper': {
      'rock': true
    },
    'scissors': {
      'paper': true
    }
  };

  // Compare Move Types, then compare values if types match
  if (rules[moveTypeOne][moveTypeTwo]) {
    return 'Player One'
  } else if (rules[moveTypeTwo][moveTypeOne]) {
    return 'Player Two'
  } else {
    return compareValues(moveValueOne, moveValueTwo);
  }
};

const compareValues = (valueOne, valueTwo) => {
  // first argument represents player one's value, and 2nd arg for player two
  if (valueOne > valueTwo) {
    return 'Player One';
  } else if (valueOne < valueTwo) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
};

const getGameWinner = () => {
  // Start counters for player wins, increment each round
  let playerOneWins = 0;
  let playerTwoWins = 0;
  let ties = 0;
  
  // uses getRoundWinner for each round to determine game winner
  for (let round = 1; round <= 3; round++) {
    let winner = getRoundWinner(round);
    if (winner === 'Player One') {
      playerOneWins++;
    } else if (winner === 'Player Two') {
      playerTwoWins++;
    } else if (winner === null) {
      // not all values were set if winner is null
      return null;
    } else {
      ties++;
    }
  }

  // Winner is declared based on most number of round wins
  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
};

// BONUS: setComputerMoves()

const setComputerMoves = () => {
  // Sets the move types and values for player two for all 3 rounds
  const setPlayerMovesArgs = ['Player Two']; 
  let valueSum = 0;

  for (let round = 1; round <= 3; round++) {
    // Pick random move type
    const moveType = moveTypes[getRandomInt(3)]; // rock, paper or scissors (0, 1, or 2 index)
    // Pick random move value between 1-99
    let moveValue = getRandomInt(99) + 1; 
    // increment valueSum and then check if > 99, and while it is, remove that value and try again
    valueSum += moveValue;

    while (valueSum > 99) {
      valueSum -= moveValue;
      // reassign the moveValue if it made valueSum > 99
      moveValue = getRandomInt(99) + 1; 
      valueSum += moveValue; 
    }

    // Every round from 1 - 3 push a move type and value to args array
    setPlayerMovesArgs.push(moveType);
    setPlayerMovesArgs.push(moveValue);
  } // end for loop

  // Args (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)
  setPlayerMoves(...setPlayerMovesArgs);
};

const getRandomInt = maxExclusive => Math.floor(Math.random() * maxExclusive)
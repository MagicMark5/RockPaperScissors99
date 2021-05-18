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


// Game Functions

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  
  const moveTypes = ['rock', 'paper', 'scissors'];
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
  // if (round < 1 || round > 3) {
  //   return null;
  // }

  // // Check if types and values were assigned
  // const typesValid = validateTypes();
  // const valuesValid = validateValues();
  // if (!typesValid || !valuesValid) {
  //   return null; 
  // }

  // Store game globals
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

  const playerMoves = {
    'Player One': playerOneMoves,
    'Player Two': playerTwoMoves
  };

  // Compare Move Types for the round

  // Moves by round
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



// Helpers & Validators
const validateTypes = () => {
  const moveTypes = [
    playerOneMoveOneType,
    playerOneMoveTwoType, 
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType, 
    playerTwoMoveThreeType
  ];

  for (const type of moveTypes) {
    if (!type) {
      return false; 
    }
  }

  return true;
};

const validateValues = () => {
  const moveValues = [
    playerOneMoveOneValue,
    playerOneMoveTwoValue, 
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue, 
    playerTwoMoveThreeValue
  ];

  for (const value of moveValues) {
    if (!value) {
      return false; 
    }
  }

  return true;
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
}
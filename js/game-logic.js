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
}

// Game Functions

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  
  const moveTypes = ['rock', 'paper', 'scissors'];
  const typeArgs = [moveOneType, moveTwoType, moveThreeType];
  const valueArgs = [moveOneValue, moveTwoValue, moveThreeValue];
  let valueSum = 0;

  // Check if rock, paper, and scissors were provided as strings
  for (const type of typeArgs) {
    if (!moveTypes.includes(type)) {
      return;
    }
  }

  // Check if all 3 values are provided as numbers 1-99
  // and that their sum does not exceed 99
  for (const value of valueArgs) {
    valueSum += value; 
    if (typeof value !== 'number' || value < 1 || value > 99 || valueSum > 99) {
      return;
    }
  }
  
    
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

// const validateArgs = (args) => {
//   // returns boolean if provided argument array contains
//   // valid arguments for the setPlayerMoves function

//   let valueSum = 0; // All three values should not sum to more than 99

//   for (let i = 1; i < args.length; i++) {
//     if (i % 2 === 0) {
//       // even indexed arguments should be Values from 1-99
//       if (typeof args[i] !== 'number') return false; 
//       // increment the sum
//       valueSum += args[i];
//       // check the values
//       if (args[i] < 1 || argument > 99 || valueSum > 99) {
//         return false;
//       }
//     } else if (i % 2 !== 0) {
//       // odd indexed arguments should be types of either 'rock', 'paper', 'scissors'
//       const acceptedTypes = ['rock', 'paper', 'scissors'];
//       if (!acceptedTypes.includes(argument)) {
//         return false;
//       }
//     }
//   }

//   return true
// };



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
}
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


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, 
                        moveTwoValue, moveThreeType, moveThreeValue) => {
  
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
  
  // When checks pass set player one or two global variables (types and values)
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

const getRoundWinner = (round) => {
  switch(round) {
    case 1:
      return rockPaperScissors(playerOneMoveOneType,
                           playerOneMoveOneValue,
                           playerTwoMoveOneType,
                           playerTwoMoveOneValue);
    case 2:
      return rockPaperScissors(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return rockPaperScissors(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
    default:
      return null;
  }
}

const rockPaperScissors = (playerOneMoveType,
                          playerOneMoveValue,
                          playerTwoMoveType,
                          playerTwoMoveValue) => {
  // Returns the winning player string based on the rules of rps, calls compareValues for a draw
  const moveTypeOne = playerOneMoveType;
  const moveTypeTwo = playerTwoMoveType;
  const moveValueOne = playerOneMoveValue;
  const moveValueTwo = playerTwoMoveValue;

  // check if types & values were set
  if (!moveTypeOne || !moveTypeTwo || !moveValueOne || !moveValueTwo) {
    return null
  }

  // Define rules where true = win for parent > child 
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
  
  // uses getRoundWinner for each round to determine game winner, and count wins
  for (let round = 1; round <= 3; round++) {
    let winner = getRoundWinner(round);
    if (winner === 'Player One') {
      playerOneWins++;
    } else if (winner === 'Player Two') {
      playerTwoWins++;
    } else if (winner === null) {
      // not all values were set if winner is null
      return null;
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

// BONUS: setComputerMoves with random move types and values for all 3 rounds

const setComputerMoves = () => {
  const moveOneType = moveTypes[getRandomInt(3)];
  const moveTwoType = moveTypes[getRandomInt(3)];
  const moveThreeType = moveTypes[getRandomInt(3)];
  const moveOneValue = getRandomInt(96) + 1;
  const moveTwoValue = getRandomInt(97 - moveOneValue) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                 moveTwoValue, moveThreeType, moveThreeValue);
};

const getRandomInt = maxExclusive => Math.floor(Math.random() * maxExclusive)
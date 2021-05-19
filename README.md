# Rock Paper Scissors x99

## Project Overview

A more intense version of Rock Paper Scissors (RPS).
Rather than selecting just one of Rock, Paper, or Scissors - each player
will select three moves. Each move will consist of a type (Rock, Paper, or Scissors) as well
as a strength value. Each player will have 99 total points to use as strength between all
three of their moves. For example, an example set of moves might be:

- Move 1: Rock - 30 Strength Points
- Move 2: Rock - 60 Strength Points
- Move 3: Paper - 9 Strength Points

The strength for each move must be at least 1.

After each player's moves are chosen, they will compare moves in the order they were selected. If two moves have different types (for example, Rock vs Scissors), then normal RPS rules will apply (in this case, Rock beats Scissors).
However, if two types are the same, then the move with more strength will win. If both strength values are
equal, then a tie is declared.

The player that wins the majority of the three rounds will be the winner of the game.

To demo all of this functionality, try out a final version of this project, located <a href="https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/build-apis-project-1-rock-paper-scissors-x99/project/index.html" target="_blank">here</a>.

## How To Begin

After downloading the project folder, open **index.html** in the browser and play/test!

## Implementation Details

 (Disclaimer: This is a project from the codecademy PRO back-end skill path,
 all implementation can be found in js/game-logic.js)

* Twelve global variables representing each player's move types and values (3 move types and 3 move values for each player). These variable names should be in the form of `playerOneMoveOneType`, `playerOneMoveOneValue`, etc.

* A function called `setPlayerMoves`, which will take a string representing a player (in the form of `'Player One'` or `'Player Two'`), three move types, and three move values, and set the correct global move variables. The method signature for this function should be as follows: `setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)`.

* A function called `getRoundWinner`, which takes a round number (`1`, `2`, or `3`), compares both player's move types and values for that round, and returns the appropriate winner (`'Player One'`, `'Player Two'`, or `'Tie'`)

* A function called `getGameWinner`, which compares both player's move
types and values for the whole game and returns the appropriate winner (`'Player One'`, `'Player Two'`, or `'Tie'`)

* Bonus: A function called `setComputerMoves`, which chooses three random moves for player two. The move type for each move will be completely random, and the move values will be random but add up to 99.


## Testing

A testing suite checks for all essential functionality and edge cases.

To run these tests, first open the root project directory in your terminal. Then run `npm install` to install all necessary testing dependencies (you only need to do this once).
Finally, run `npm run test`. You will see a list of tests that ran with information
about whether or not each test passed. After this list, you will see more specific output
about why each failing test failed.
## AUTHORS
Brendan Grubb and David Quisenberry
# Pig Dice
A game of pice dice of two players.  

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

  - If the player rolls a 1, they score nothing and it becomes the next player's turn.
  - If the player rolls any other number, it is added to their turn total and the player's turn continues.
  - If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

## Setup/Installation Requirements

* Copy repository link
*  - Clone this repository and then open 'index.html' in the browser.

## Technologies Used

* Other than HTML and CSS -
Bootstrap and Jquery files are included for additional styling and functionality.

# Specs
1. User enters two names in player one and player two form boxes, hits register players button and those names are used to create player objects.
  - Example: David and Brendan
  - Expected Output:Player One Object.name: David, Player Two Object.name: Brendan
2. Name panels update with names from player objects
  - Example: David Brendan
  - Expected Output: Player One Output David, Player Two Output Brendan
3. User clicks on roll dice button and a number is displayed under dice roll
  - Example: click roll dice - dice is 5
  - Expected Output: Dice Roll 5
4. Based on dice roll, if one empty current total and empty streak buffer
  - Example: dice is 1
  - Expected Output: Current Total: 0, Current Streak: 0
5. Dice roll not 1 add dice number to current total and increase streak by 1.
  - Example: 4
  - Expected Output: Current Total: 4, Current Streak: 1
5. If User continues to click roll dice button and the rolls are greater than one, add that dice roll to the current total and increase the roll streak by 1.
  - Example: 5
  - Expected Output: Current Total: 9, Current Streak: 2
6. If roll is clicked check to see if the roller has won the game.
  - Example: Current Total: 9, 101
  - Expected Output: 9 < 100 (game not won), 101 > 100 (game won)
7. If User clicks hold add current total to player score in player object and clear current total and current streak.
  - Example: Current Total: 9
  - Expected Output: Current Total: 0, (Player-x) Current Score: 9
8. If User clicks hold do all the above and check to see if current streak is higher than players best streak and replace best streak if so.
  - Example: Current Total: 9, (Player-x) Best Streak: 4
  - Expected Output: (Player-x) Best Streak: 9
9. If User clicks hold check to see if current total is greater than best streak score and replace if so.
  - Example: Current Total: 40 (Player-x) Best Streak Score: 15
  - Expected Output: (Player-x) Best Streak Score: 40
10. If hold is pressed or one is rolled clear out the current round information.
  - Example: player clicks hold
  - Expected Output: Dice Roll: 0, Current Total: 0, Current Streak: 0
11. If hold is pressed or one is rolled switch roll to the other player.
  - Example: Player 1 clicks hold
  - Expected Output: game-manager.turn === playerTwo
12. After roll has switched, next roll adds to new players stats after hold.
  - Example: player 1 rolls 1 or pressed Hold, Player2 rolls 5 and presses hold
  - Expected Output: Player 2 Current Score === 5 



### License

MIT License

Copyright (c) 2017 Brendan Grubb and David Quisenberry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

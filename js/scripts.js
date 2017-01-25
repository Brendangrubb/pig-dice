

// Game Manager Object
function GameManager(playerOne, playerTwo) {
  this.playerTurn = "";
  this.currentTotal = 0;
  this.diceRoll = "";
  this.currentStreak = 0;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}
// Game Manager Methods

// This is a GameManager object method to ??? Drive the image display of the dice rolled.
GameManager.prototype.displayDice = function() {

};
// This is a GameManager object method to add the score from currentTotal to player object score on hold button press.
GameManager.prototype.addScore = function() {

};
// This is a GameManager object method to add the current streak to the player streak on hold button press
GameManager.prototype.addStreak = function() {

};
// This is a GameManager object method to switch the player turn and call the clearing methods.
GameManager.prototype.switchTurn = function() {

};
// This is a GameManager object method to clear the currentTotal score buffer
GameManager.prototype.clearBuffer = function() {

};
// This is a GameManager object method to add the dice roll to the current total
GameManager.prototype.addCurrentTotal = function() {
  this.currentTotal += this.diceRoll;
};
// This is a GameManager object method to add the non 1 dice streak to the current streak
GameManager.prototype.addCurrentStreak = function() {
  this.currentStreak += 1;
};
// This is a GameManager object method to clear the round information when player turn switches
GameManager.prototype.clearRound = function() {
  this.currentTotal = 0;
  this.currentStreak = 0;
};
// This is a GameManager object method to start a fresh game retaining player information including streaks
GameManager.prototype.restart = function() {

};
// This is a GameManager object method to see if a player has won
GameManager.prototype.checkWin = function() {

};
// This is a GameManager object method to roll the dice
GameManager.prototype.rollDice = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  this.diceRoll = roll;
  if (this.diceRoll !== 1) {
    this.addCurrentTotal();
    this.addCurrentStreak();
  } else {
    this.clearRound();
    this.switchTurn();
  }
};


// Player Object

function Player(formName) {
  this.playerName = formName;
  this.score = 0;
  this.streak = 0;
  this.bestStreakScore = 0;
}

// UI Logic
$(document).ready(function() {

  var gameManager;

  $("#players-form").submit(function() {
    event.preventDefault();

    var playerOneInput = $("#player1-name").val();
    var playerTwoInput = $("#player2-name").val();
    var playerOneObject = new Player(playerOneInput);
    var playerTwoObject = new Player(playerTwoInput);
    gameManager = new GameManager(playerOneObject, playerTwoObject);

    $(".player-one-name").text(playerOneObject.playerName);
    $(".player-two-name").text(playerTwoObject.playerName);

  });

  $("#roll-dice-button").click(function() {

    gameManager.rollDice();


    $("#dice-roll").text(gameManager.diceRoll);

    $("#current-total").text(gameManager.currentTotal);
    $("#current-streak").text(gameManager.currentStreak);
  });





});

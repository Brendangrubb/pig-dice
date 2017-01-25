

// Game Manager Object
function GameManager(playerOne, playerTwo) {
  this.playerTurn = "";
  this.scoreBuffer = 0;
  this.diceRoll = "";
  this.currentStreak = 0;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

// Game Manager Methods
GameManager.prototype.rollDice = function() {

};
GameManager.prototype.displayDice = function() {

};
GameManager.prototype.addScore = function() {

};
GameManager.prototype.addStreak = function() {

};
GameManager.prototype.switchTurn = function() {

};
GameManager.prototype.clearBuffer = function() {

};
GameManager.prototype.addScoreBuffer = function() {

};
GameManager.prototype.addCurrentStreak = function() {

};
GameManager.prototype.clearRound = function() {

};
GameManager.prototype.restart = function() {

};
GameManager.prototype.checkWin = function() {

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

  $("#players-form").submit(function() {
    event.preventDefault();

    var playerOneInput = $("#player1-name").val();
    var playerTwoInput = $("#player2-name").val();
    var playerOneObject = new Player(playerOneInput);
    var playerTwoObject = new Player(playerTwoInput);
    var gameManager = new GameManager(playerOneObject, playerTwoObject);

    $(".player-one-name").text(playerOneObject.playerName);
    $(".player-two-name").text(playerTwoObject.playerName);

  });







});
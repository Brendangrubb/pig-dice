

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
GameManager.prototype.rollDice = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  this.diceRoll = roll;
  if (this.diceRoll !== 1) {
    this.currentTotal += this.diceRoll;
    this.currentStreak += 1;
  } else {
    this.currentTotal = 0;
    this.currentStreak = 0;
  }
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
GameManager.prototype.addcurrentTotal = function() {

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



// Game Manager Object
function GameManager(playerOne, playerTwo) {
  this.currentTotal = 0;
  this.diceRoll = "";
  this.currentStreak = 0;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.playerTurn = this.playerOne;
}
// Game Manager Methods

// This is a GameManager object method to ??? Drive the image display of the dice rolled.
GameManager.prototype.displayDice = function() {

};
// This is a GameManager object method to add the score from currentTotal to player object score on hold button press.
GameManager.prototype.addScore = function() {
  this.playerTurn.score += this.currentTotal;
  if (this.playerTurn.bestStreakScore < this.currentTotal) {
    this.playerTurn.bestStreakScore = this.currentTotal;
  }
};
// This is a GameManager object method to add the current streak to the player streak on hold button press
GameManager.prototype.addStreak = function() {
  if (this.playerTurn.streak < this.currentStreak) {
    this.playerTurn.streak = this.currentStreak;
  }
};
// This is a GameManager object method to switch the player turn and call the clearing methods.
GameManager.prototype.switchTurn = function() {
  if (this.playerTurn === this.playerOne) {
    this.playerTurn = this.playerTwo;
  }else {
    this.playerTurn = this.playerOne;
  }
  this.clearRound();
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
  if (this.currentTotal + this.playerTurn.score >= 100) {
    this.addScore();
    this.addStreak();
    $("#gameboard").hide();
    $("#winner-name").text(this.playerTurn.playerName);
    $("#winner-streak-score").text(this.playerTurn.bestStreakScore);
    $("#winner-streak").text(this.playerTurn.streak);
    $("#winner-well").show();
  }
};
// This is a GameManager object method to roll the dice
GameManager.prototype.rollDice = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  this.diceRoll = roll;
  if (this.diceRoll !== 1) {
    this.addCurrentTotal();
    this.addCurrentStreak();
    this.checkWin();
  } else {
    this.switchTurn();
    console.log(this.playerTurn);
  }
};

// Player Object
function Player(formName) {
  this.playerName = formName;
  this.score = 0;
  this.streak = 0;
  this.bestStreakScore = 0;
}

$(document).ready(function() {

  var gameManager;

  var refreshUI = function(){
    $("#player-one-current-score").text(gameManager.playerOne.score);
    $("#player-one-best-streak").text(gameManager.playerOne.streak);
    $("#player-one-best-streak-score").text(gameManager.playerOne.bestStreakScore);
    $("#player-two-current-score").text(gameManager.playerTwo.score);
    $("#player-two-best-streak").text(gameManager.playerTwo.streak);
    $("#player-two-best-streak-score").text(gameManager.playerTwo.bestStreakScore);

    if(gameManager.playerTurn === gameManager.playerOne){
      $("#player-one-marker").show();
      $("#player-two-marker").hide();
    } else if (gameManager.playerTurn === gameManager.playerTwo){
      $("#player-two-marker").show();
      $("#player-one-marker").hide();
    }
  };

  $("#players-form").submit(function() {
    event.preventDefault();

    var playerOneInput = $("#player1-name").val();
    var playerTwoInput = $("#player2-name").val();
    var playerOneObject = new Player(playerOneInput);
    var playerTwoObject = new Player(playerTwoInput);
    gameManager = new GameManager(playerOneObject, playerTwoObject);
    refreshUI();
    $(".player-one-name").text(playerOneObject.playerName);
    $(".player-two-name").text(playerTwoObject.playerName);

  });

  $("#roll-dice-button").click(function() {
    gameManager.rollDice();
    $("#dice-roll").text(gameManager.diceRoll);
    $("#current-total").text(gameManager.currentTotal);
    $("#current-streak").text(gameManager.currentStreak);
    refreshUI();
  });

  $("#hold-button").click(function() {
    gameManager.addScore();
    gameManager.addStreak();
    gameManager.switchTurn();
    refreshUI();
  });



});

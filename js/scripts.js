

// Game Manager Object
function GameManager(playerOne, playerTwo) {
  this.currentTotal = 0;
  this.diceRoll = "";
  this.currentStreak = 0;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.playerTurn = this.playerOne;
  this.playerScoreTracking = {'playerOne': {"personalHighScore": 0, "personalStreak": 0, "personalBestStreakScore": 0}, "playerTwo": {"personalHighScore": 0, "personalStreak": 0, "personalBestStreakScore": 0}};
}
// Game Manager Methods

// This is a GameManager object method to ??? Drive the image display of the dice rolled.
GameManager.prototype.displayDice = function() {
  var imageId = "";
  if (this.diceRoll === 1) {
    imageId = "#dice-one";
  } else if (this.diceRoll === 2) {
    imageId = "#dice-two";
  } else if (this.diceRoll === 3) {
    imageId = "#dice-three";
  } else if (this.diceRoll === 4) {
    imageId = "#dice-four";
  } else if (this.diceRoll === 5) {
    imageId = "#dice-five";
  } else if (this.diceRoll === 6) {
    imageId = "#dice-six";
  }
  return imageId;
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
  this.clearRound();
  this.playerOne.score = 0;
  this.playerOne.streak = 0;
  this.playerOne.bestStreakScore = 0;
  this.playerTwo.score = 0;
  this.playerTwo.streak = 0;
  this.playerTwo.bestStreakScore = 0;
  this.diceRoll = "";
};
// This is a GameManager object method to see if a player has won
GameManager.prototype.checkWin = function() {
  if (this.currentTotal + this.playerTurn.score >= 20) {
    this.addScore();
    this.addStreak();
    this.personalRecordTracker();
    console.log(this.playerScoreTracking);
    $("#gameboard").hide();
    $("#winner-name").text(this.playerTurn.playerName);
    $("#winner-streak-score").text(this.playerTurn.bestStreakScore);
    $("#winner-streak").text(this.playerTurn.streak);
    $("#winner-well").show();
  }
};
// This is a GameManager object method for checking updating player records across games
GameManager.prototype.personalRecordTracker = function() {
  if (this.playerOne.score > this.playerScoreTracking.playerOne.personalHighScore){
    this.playerScoreTracking.playerOne.personalHighScore = this.playerOne.score;
  }
  if (this.playerOne.streak > this.playerScoreTracking.playerOne.personalStreak){
    this.playerScoreTracking.playerOne.personalStreak = this.playerOne.streak;
  }
  if (this.playerOne.bestStreakScore > this.playerScoreTracking.playerOne.personalBestStreakScore){
    this.playerScoreTracking.playerOne.personalBestStreakScore = this.playerOne.bestStreakScore;
  }
  if (this.playerTwo.score > this.playerScoreTracking.playerTwo.personalHighScore){
    this.playerScoreTracking.playerTwo.personalHighScore = this.playerTwo.score;
  }
  if (this.playerTwo.streak > this.playerScoreTracking.playerTwo.personalStreak){
    this.playerScoreTracking.playerTwo.personalStreak = this.playerTwo.streak;
  }
  if (this.playerTwo.bestStreakScore > this.playerScoreTracking.playerTwo.personalBestStreakScore){
    this.playerScoreTracking.playerTwo.personalBestStreakScore = this.playerTwo.bestStreakScore;
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

  var clearDice = function(){
    var diceImageIndex = ["one", "two", "three", "four", "five", "six"];
    diceImageIndex.forEach(function(die) {
      $("#dice-" + die).hide();
    });
  };

  var refreshUI = function(){
    $("#player-one-current-score").text(gameManager.playerOne.score);
    $("#player-one-best-streak").text(gameManager.playerOne.streak);
    $("#player-one-best-streak-score").text(gameManager.playerOne.bestStreakScore);
    $("#player-two-current-score").text(gameManager.playerTwo.score);
    $("#player-two-best-streak").text(gameManager.playerTwo.streak);
    $("#player-two-best-streak-score").text(gameManager.playerTwo.bestStreakScore);
    $("#current-total").text(gameManager.currentTotal);
    $("#current-streak").text(gameManager.currentStreak);
    $("#player-one-all-time-best-score").text(gameManager.playerScoreTracking.playerOne.personalHighScore);
    $("#player-one-all-time-best-streak").text(gameManager.playerScoreTracking.playerOne.personalStreak);
    $("#player-one-all-time-best-streak-score").text(gameManager.playerScoreTracking.playerOne.personalBestStreakScore);
    $("#player-two-all-time-best-score").text(gameManager.playerScoreTracking.playerTwo.personalHighScore);
    $("#player-two-all-time-best-streak").text(gameManager.playerScoreTracking.playerTwo.personalStreak);
    $("#player-two-all-time-best-streak-score").text(gameManager.playerScoreTracking.playerTwo.personalBestStreakScore);

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
    $("#player-registration").hide();
    $("#gameboard").show();

  });

  $("#roll-dice-button").click(function() {
    clearDice();
    gameManager.rollDice();
    var diceImage = gameManager.displayDice();
    $(diceImage).show();
    refreshUI();
  });

  $("#hold-button").click(function() {
    gameManager.addScore();
    gameManager.addStreak();
    gameManager.switchTurn();
    refreshUI();
  });

  $("#reset-button").click(function() {
    gameManager.restart();
    clearDice();
    refreshUI();

  });


});

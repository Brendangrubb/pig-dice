

// Game Manager Object
function GameManager(playerOne, playerTwo) {
  this.playerTurn = "";
  this.scoreBuffer = 0;
  this.diceRoll = "";
  this.currentStreak = 0;
}

// Game Manager Methods
GameManager.prototype.rollDice = function() {
  
};
GameManager.prototype.displayDice = function() {

};
GamaManager.prototype.addScore = function() {

};
GameManager.prototype.addStreak = function() {

};
GameManager.prototype.switchTurn = function() {

};
GamaManager.prototype.clearBuffer = function() {

};
GamaManager.prototype.addScoreBuffer = function() {

};
GamaManager.prototype.addCurrentStreak = function() {

};
GamaManager.prototype.clearRound = function() {

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

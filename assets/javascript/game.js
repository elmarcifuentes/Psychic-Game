//////////////////// GLOBAL VARIABLES ////////////////////
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 9;


//////////////////// FUNTIONS ////////////////////

//Generate random letter from alphabet
var computerGuess = function() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};


//////////////////// USER INPUT ////////////////////
document.onkeyup = function(event) {
  var userKey = String.fromCharCode(event.keyCode).toLowerCase();
  guesses.push(userKey);
  guessesDiv();
  guessesLeft--;
  guessesLeftDiv();




};

var init = function() {
  guessesLeft = 9;
  guesses = [];

  computerGuess();
}


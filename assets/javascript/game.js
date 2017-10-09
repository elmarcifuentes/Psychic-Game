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

//////////////////// HTML CONTENT UPDATE ////////////////////
// NOTE: Unable to get GetElementById to work, found this other function online.
var guessesDiv = function() {
  document.querySelector("#guesses").innerHTML = guesses.join("  ");
};

var guessesLeftDiv = function() {
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var winsDiv = function() {
  document.querySelector("#wins").innerHTML = wins;
};

var lossesDiv = function() {
  document.querySelector("#losses").innerHTML = losses;
};


//////////////////// USER INPUT ////////////////////
document.onkeyup = function(event) {
  var userKey = String.fromCharCode(event.keyCode).toLowerCase();
  guesses.push(userKey);
  guessesDiv();
  guessesLeft--;
  guessesLeftDiv();

        if (guessesLeft > 0){
            if (userKey == randomLetter){
                wins++;
                init();
            }
        }
        else if(guessesLeft == 0){
            losses++;
            init();
        }
};

var init = function() {
  guessesLeft = 9;
  guesses = [];

  computerGuess();
  lossesDiv ();
  winsDiv();
}


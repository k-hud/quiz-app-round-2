var questionCount = 0;

function initQuizApp() {
  //Initiates all the listeners
  gameStartListener()
}

function gameStartListener() {
  //Listen for the main button that will "start" the game.
}

function questionCounter() {
  //Track what question we're on
  //Based on question count
  //Check array
}

function loadNextQuestion() {
  // If questionCount = 0, then show START GAME
  // Start game html
  // If past start game, question count = 1 iterate over this counting, and pull the appropriate question from the questionStore

  //HTML TEMPLATE

  //checkAnwer should updated question count here so we can move on to the next right answers

  //Clear HTML template and load next question

  //If questionCount = 9, then tally current score and prep for quizComplete
}

function submitListener() {
  //Listen for the "submit" button
}

function checkAnswer() {
  //Check the answer submitted against the right answer
  //Update questionCount  +1
  //Call loadNextQuestion
}

function displayAnswer() {
  //Show the right answer. If wrong, highlight the right answer.
}

function progressMeter() {
  //Keep track of, and display, current right/wrong answers, current "score"
}

function quizComplete() {
  // Show final screen HTML, with final score
  // Allow player to start again. Replay button listener (only call inside this function) (REPLAY)
  // Replay button will trigger resetGame
}

function resetGame() {
  //Reset questionCount = 0;
  //Load "Start Game" HTML
}

$(initQuizApp())

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var title = $("#level-title");


$(".btn").click(function() {
  // Add color to userClickedPattern array when user clicks
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  // Play sound and animation when the user clicks a button
  playSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  var lastUserAnswerNumber = userClickedPattern.length - 1
  checkAnswer(lastUserAnswerNumber);
});

function checkAnswer(currentLevel) {
  console.log("gamePattern: " + gamePattern);
  console.log("userClickedPattern: " + userClickedPattern);

  //3. Check if the most recent user answer is the same as the game pattern.
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    //4. Check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function() {
        nextSequence();
      }, 1000);

    }
  } else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200)

    title.text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(document).keypress(function(e) {
  if(!started) {

    title.text("Lavel " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  // Reset the userClickedPattern to an empty array ready for the next level
  userClickedPattern = [];

  level++;
  title.text("Lavel " + level);

  // Set to random value to gamePattern array
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Add animation
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  // Play sound
  playSound(randomChosenColour);
}

// Create a new function called playSound() that takes a single input parameter called name
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(() => {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}
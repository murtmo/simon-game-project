var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  // Play sound when the user clicks a button
  playSound(userChosenColour);
});

function nextSequence() {
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
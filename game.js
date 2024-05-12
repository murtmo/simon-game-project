function nextSequence() {
  var gamePattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  console.log(gamePattern);
}
nextSequence();
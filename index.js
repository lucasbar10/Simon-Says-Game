var buttonColours = ["red", "blue", "green", "yellow"];

var gamePatern = [];
var playerPatern =[];

var level = 0;
var start=false;

// Start game .----------------------------------------------------
$(document).on("keydown", function() {
   if(!start){
  $("#level-title").text("Level 0");
  nextSequence();

  start=true;

    }
});
// PLAYER CLICK RECORDER--------------------------------------
$(".btn").on("click", function(){

  switch (this.id) {
    case "red":
      playerPatern.push(0);
       break;
    case "blue":
      playerPatern.push(1);
      break;
    case "green":
      playerPatern.push(2);
      break;
    case "yellow":
      playerPatern.push(3);
      break;
    default:
  }
  checkAnswer();
});
// -------------------------------------------------------------

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);

  var audioPlay = randomChosenColour;
  gamePatern.push(randomNumber);

  var boton = "." + randomChosenColour;
  playAudioo(audioPlay);
  $(boton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  $(boton).on("click", function() {
    playAudioo(audioPlay);
    $(boton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  });
}

function playAudioo(audioPlay) {
  switch (audioPlay) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;

    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;

    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;

    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    default:
  }
}

function checkAnswer(){
  var lastColor = (playerPatern.length - 1);

  if (gamePatern[lastColor]!==playerPatern[lastColor]){

    $("#level-title").text("Press a key to restart....");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
      },200);
// RESET LEVEL .------
    level = 0;
    playerPatern = [];
    gamePatern = [];
    return start = false;

}
  else if (gamePatern[level]===playerPatern[level]){
    setTimeout(function(){
      nextSequence();
    },1300);
   playerPatern =[];
   level+=1;
   $("#level-title").text("Level "+level);
  }
}

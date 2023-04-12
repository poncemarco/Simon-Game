var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []


function nextSequence() {
    var randNum =  Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randNum];
    gamePattern.push(randomChosenColour);
    var buttonColour = $("#" + randomChosenColour);
    buttonColour.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    buttonColour.click(function() {
        this.play("sounds/"+ randomChosenColour + ".mp3")
    });
    
    
}
$(document).ready(function() {
    const colors= ["red", "blue", "green", "yellow"];
    let gamePattern= [];
    let userPattern= [];
    let LVL= 0;
    let gameHasStarted= false;
    const TIME_LIMIT = 5000; 
    let timeID=null;
    // Starts the game
    $(document).on("keydown", function(){
        if(!gameHasStarted){
            nextSequence();
            gameHasStarted= true;
        }
    });
    function startTimeOut(){
        clearTimeout(timeID);
        // Sets a timeout to call gameOver after 5 seconds (5000 milliseconds)
        // gameOver is passed as a reference without parentheses, so it is not executed immediately
        // It will be executed by setTimeout after the specified delay
        timeID = setTimeout(gameOver, TIME_LIMIT);
    }


    //Game Logic
    //min of an array is 0 and max is len-1, so max-min+1 gives len and then adding min is just ading 0
    function nextSequence(){
        userPattern= [];
        ++LVL;
        $("h1").text("Level " + LVL);
        let randomNumber= Math.floor((Math.random())*(colors.length));
        let chosenColor= colors[randomNumber];
        gamePattern.push(chosenColor);
        animateButtons(chosenColor);
        startTimeOut();
    }
    function checkAnswer(currentUserIndex){
        if(gamePattern[currentUserIndex]== userPattern[currentUserIndex]){
            if(gamePattern.length==userPattern.length){
                setTimeout(function(){
                    clearTimeout(timeID);
                    nextSequence();
                }, 1000);
            } else{
                startTimeOut();
            }
        } else{
            gameOver();
        }
    }
    $(".btn").click(function(){
        // If the game has not started, do nothing
        if(!gameHasStarted) return;
        let userChosenColor = $(this).attr("id");
        userPattern.push(userChosenColor);
        animateButtons(userChosenColor);
        checkAnswer(userPattern.length-1);
    });

    // Game Over
    function gameOver(){
        gamePattern= [];
        userPattern= [];
        clearTimeout(timeID);
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 1000);
        $("h1").text("Game Over, Press Any Key to Restart");
        gameHasStarted= false;
        LVL= 0;
        // alert("You Just Couldnt DO IT MAN!!!!");
    }
    // Cosmetic
    function playSound(colour){
        let audio = new Audio("sounds/" + colour + ".mp3");
        audio.play();
    }
    function animateButtons(colour){
        $('#'+colour).addClass("pressed");
        playSound(colour);
        setTimeout(function(){
            $('#'+colour).removeClass("pressed");
        }, 400);
    }
});
$(document).ready(function() {
    const colors= ["red", "blue", "green", "yellow"];
    let pattern= [];
    let userPattern= [];
    // $(document).ready(function() {
    //     alert("Welcome to the Simon game!");
    // });
    function playSound(colour){
        let audio = new Audio("sounds/" + colour + ".mp3");
        audio.play();
    }
    function animateButtons(colour){
    $('#'+colour).addClass("pressed");
    playSound(colour);
    setTimeout(function(){
        $('#'+colour).removeClass("pressed");
    }, 1000);
    }
    function nextSequence(min, max){
        let randomNumber= Math.floor((Math.random())*(max-min+1))+ min;
        return randomNumber;
    }
    let chosenColor= colors[nextSequence(0,3)];
    pattern.push(chosenColor);
    animateButtons(chosenColor);
    $(".btn").click(function(){
        let userChosenColor = $(this).attr("id");
        userPattern.push(userChosenColor);
        animateButtons(userChosenColor);
    });
});
function randomOutcome(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber1= randomOutcome(1,6);
randomNumber2= randomOutcome(1,6);
console.log(randomNumber1, randomNumber2);
function dieImage(randomNumber1, randomNumber2){
    img1= document.querySelectorAll("img")[0];
    img2= document.querySelectorAll("img")[1];
    img1.setAttribute("src", `/images/dice${randomNumber1}.png`);
    img2.setAttribute("src", `/images/dice${randomNumber2}.png`);
}
dieImage(randomNumber1, randomNumber2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText= 'Player 1 Wins';
} else if( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText= 'Player 2 Wins';
} else{
    document.querySelector("h1").innerText= 'Draw';
}
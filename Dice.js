var player1 = player1;
var player2 = player2;

var diceNumber;

var player1Score = 0;
var player2Score = 0;

var rollCount = 0;

var roll = document.querySelector(".roll");
var restartButton = document.querySelector(".restart");
var replay = document.querySelector(".replay");

var popup = document.getElementById("popup");


const rollTheDice = () => {
    rollCount++;

    diceNumber = Math.floor((Math.random() * 6) + 1);
    if (rollCount % 2 != 0) {
        player1Score = player1Score + diceNumber;
        document.getElementById("currentscore1").innerHTML=diceNumber;
        document.getElementById("currentscore2").innerHTML=0;
    }
    else {
        player2Score = player2Score + diceNumber;
        document.getElementById("currentscore2").innerHTML = diceNumber;
        document.getElementById("currentscore1").innerHTML = 0;
    }

    document.getElementById("scorep1").innerHTML = player1Score;
    document.getElementById("scorep2").innerHTML = player2Score;
    
    winner();
    // console.log("Player 1: " + player1Score);
    // console.log("Player 2: " + player2Score);



}

const restart = () => {
    player1Score = 0;
    player2Score = 0;
    rollCount = 0;
    document.getElementById("scorep1").innerHTML = player1Score;
    document.getElementById("scorep2").innerHTML = player2Score;
}

const winner=()=>{
    
    if(player1Score>=20){
        // alert("Player 1 winner");
        openPopup("Player 1 is the winner");
        restart();
    }
    else if(player2Score>=20){
        // alert("player 2 winner");
        openPopup("player 2 is the winner");
        restart();
    }

}

const openPopup = (winner1) => {
    document.getElementById("winner").innerHTML= winner1;
    popup.classList.add("openpopup");
}

const closePopup = () =>{
    popup.classList.remove("openpopup");
    restart();
}

roll.addEventListener('click', function () {
    rollTheDice();
})

restartButton.addEventListener('click', function () {
    restart();
})

replay.addEventListener('click' , function(){
    closePopup();
    // restart();
})

// rollTheDice();
// rollTheDice();
// rollTheDice();
// rollTheDice();
// rollTheDice();
// rollTheDice();
// restart();
// rollTheDice();
// console.log(diceNumber)


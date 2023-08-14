let choices = ['rock', 'paper', 'scissors'];
let round = 1;
let compScore = 0;
let playerScore = 0;
let endFlag = 0;

document.addEventListener('DOMContentLoaded', () => {
    const score = document.querySelector("#score");
    const gameRes = document.querySelector("#result")
    const btns = document.querySelectorAll(".ctrls > button");
    const currRound = document.querySelector("#round");
    const restartBtn = document.querySelector("#restart");
    const restartTxt = document.querySelector("#restartTxt");
    const moves = document.querySelector("#moves");

    btns.forEach((button) => {
        button.addEventListener('click', () => {

            if (endFlag == 0){
                let compChoice = getComputerChoice();
                let result = playGame(compChoice, button.id);   

                score.textContent = playerScore + " - " + compScore;
                gameRes.innerHTML = result;
                currRound.innerHTML = "Round: " + round;

                round++;

                if (compScore == 5 || playerScore == 5){
                    if (playerScore == 5){
                        gameRes.innerHTML =  "CONGRATS!! You WON!";
                    }
                    else {
                        gameRes.innerHTML =  "You LOST";
                    }
                    endFlag = 1;
                    restartBtn.style.display = "block"; // Show the button
                    restartTxt.style.display = "block";
                }
                else {
                    restartBtn.style.display = "none"; // Hide the button
                    restartTxt.style.display = "none";
                }
            }          
        });
        restartBtn.addEventListener('click', () => {
            endFlag = 0;
            round = 1;
            compScore = 0;
            playerScore = 0;
            score.textContent = "0 - 0";
            gameRes.innerHTML = "May the Best Man (or Bot) WIN!!";
            currRound.innerHTML = "Round: ";
            restartBtn.style.display = "none"; // Hide the button
            restartTxt.style.display = "none";
            moves.innerHTML = '<img src="imgs/player.png" alt="player"> -<img src="imgs/robot.png" alt="cpu">'
        });
    });
});

function getComputerChoice(){
    let randomNB = Math.floor(Math.random() * 3);
    return choices[randomNB];
}

function playGame(compChoice, playerChoice){
    let returnMSG = "";
    if (compChoice == playerChoice){
        returnMSG = returnMSG + "It's a TIE!! " + compChoice + " matches " + playerChoice;
    }
    else{
        if ((compChoice == 'rock' && playerChoice == 'scissors')||
            (compChoice == 'paper' && playerChoice == 'rock')||
            (compChoice == 'scissors' && playerChoice == 'paper')){

            returnMSG = returnMSG + "You Lose!! " + compChoice + " beats " + playerChoice;
            compScore++;
        }
        
        else if ((playerChoice == 'rock' && compChoice == 'scissors')||
                 (playerChoice == 'paper' && compChoice == 'rock')||
                 (playerChoice == 'scissors' && compChoice == 'paper')){

            returnMSG = returnMSG + "You WIN!! " + playerChoice + " beats " + compChoice;
            playerScore++;        
        }
    }
    result = returnMSG;
    moves.innerHTML = '<img src="imgs/player.png" alt="player"> <img src="imgs/'+playerChoice+'.png" alt="player move"> <img src="imgs/'+compChoice+'.png" alt="cpu move"> <img src="imgs/robot.png" alt="cpu">'
    return returnMSG;
}

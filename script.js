let choices = ['rock', 'paper', 'scissors'];
let round = 1;
let compScore = 0;
let playerScore = 0;
let endFlag = 0;

document.addEventListener('DOMContentLoaded', () => {
    const DOMplayerScore = document.querySelector("#playerScore");
    const DOMcompScore = document.querySelector("#compScore");
    const gameRes = document.querySelector("#result")
    const btns = document.querySelectorAll(".ctrls > button");
    const currRound = document.querySelector("#round");
    const restartBtn = document.querySelector("#restart");

    btns.forEach((button) => {
        button.addEventListener('click', () => {

            if (endFlag == 0){
                let compChoice = getComputerChoice();
                let result = playGame(compChoice, button.id);   

                DOMcompScore.textContent = compScore;
                DOMplayerScore.textContent = playerScore;
                gameRes.innerHTML = result;
                currRound.innerHTML = "Round: " + round;

                round++;

                if (compScore == 5 || playerScore == 5){
                    if (playerScore == 5){
                        gameRes.innerHTML =  "You Win";
                    }
                    else {
                        gameRes.innerHTML =  "You Lose";
                    }
                    endFlag = 1;
                    restartBtn.style.display = "block"; // Show the button
                    
                }
                else {
                    restartBtn.style.display = "none"; // Hide the button
                }
            }
            if (button.id == "restart"){
                endFlag = 0;
                round = 1;
                compScore = 0;
                playerScore = 0;
                DOMcompScore.textContent = compScore;
                DOMplayerScore.textContent = playerScore;
                gameRes.innerHTML = "";
                currRound.innerHTML = "";
            }
            
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
    return returnMSG;
}

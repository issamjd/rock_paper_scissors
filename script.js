
let choices = ['rock', 'paper', 'scissors'];
let result = 0;

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
            result =- 1;
        }
        
        else if ((playerChoice == 'rock' && compChoice == 'scissors')||
                 (playerChoice == 'paper' && compChoice == 'rock')||
                 (playerChoice == 'scissors' && compChoice == 'paper')){

            returnMSG = returnMSG + "You WIN!! " + playerChoice + " beats " + compChoice;
            result =+ 1;          
        }
    }
    return returnMSG;
}

function game(){
    for(let i = 0; i < 5; i++){
        let compChoice = getComputerChoice();
        let playerChoice = prompt("enter your choice").toLowerCase();
        console.log(playGame(compChoice, playerChoice));
    }

    if (result >= 0){
        result = 0;
        return "You Win";
    }
    else {
        result = 0;
        return "You Lose";
    }
}

console.log(game());





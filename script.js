let pick = ['rock', 'paper', 'scissors'];


let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomPick = Math.floor(Math.random() * 3);
    return pick[randomPick];
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie";
    } else if(playerSelection === 'rock'  && computerSelection === 'paper'){
        computerScore ++;
        return "You lose! Paper beats rock";
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore ++;
        return "You win! Rock beats scissors";
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        return "You win! Paper beats rock";
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore ++;
        return "You lost! Scissors beats paper";
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore ++;
        return "You win! Scissors beats paper";
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore ++;
        return "You lose! Rock beats scissors";
    }
}

//const playerSelection = 'rock';
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let rounds = 0; rounds < 5; rounds++){
        const playerSelection = prompt("Enter your choice: ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score is " + playerScore + " and computer score is " +computerScore);
    }

    if(playerScore < computerScore){
        console.log("Game ended. Computer Wins!");
    } else if(playerScore > computerScore){
        console.log("Game ended. Player Wins!");
    } else {
        console.log("Game ended. It's a Tie!");
    }
}

game()

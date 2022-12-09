let playerScore = 0;
let computerScore = 0;
let roundWinner = ' ';

function getComputerChoice(rand){
    const randomIndex= Math.floor(Math.random() * rand.length);
    const choice = rand[randomIndex];
    return choice;
}


function getPlayerChoice(player){
    const player= prompt("Enter either Rock, Paper and Scissors:");
    const playerSelection = player.toLowerCase();
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection){
        console.log("Its tie")
        roundWinner = 'noOne'
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win. Scissors beats paper")
            console.log(roundWinner = 'player')
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose.  Rock beats scissors")
        roundWinner = 'computer'
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose. Scissors beats paper")
        roundWinner = 'computer'
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win. Paper beats rock")
        roundWinner = 'player'
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win. Rock beats scissors")
        roundWinner = 'player'
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose. Paper beats rocks")
        roundWinner = 'computer'
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice(choices)
        playRound(playerSelection, computerSelection)
        if (roundWinner === 'player'){
            playerScore++
        } else if (roundWinner === 'computer'){
            computerScore++
        } else{
            console.log("Tie")
        }
        return `player: ${playerScore} - Computer: ${computerScore}`
        }
   
    
}

const choices =["rock", "paper", "scissors"];
console.log(game())


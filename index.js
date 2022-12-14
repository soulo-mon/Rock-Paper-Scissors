// Define a function that will be used to determine the winner of each round
function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }
  
  // Define a function that plays a game of Rock Paper Scissors
  function playGame() {
    // Create an array of possible selections the computer can make
    const computerChoices = ["Rock", "Paper", "Scissors"];
  
    // Keep track of the number of rounds played and the number of wins for each player
    let roundsPlayed = 0;
    let playerWins = 0;
    let computerWins = 0;
  
    // Keep playing rounds until 5 rounds have been played
    while (roundsPlayed < 5) {
      // Prompt the player to make a selection
      const playerSelection = prompt("Rock, Paper, or Scissors?");
  
      // Have the computer make a random selection
      const computerSelection =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
      // Determine the winner of the round
      const roundWinner = determineWinner(playerSelection, computerSelection);
  
      // Increment the number of rounds played
      roundsPlayed++;
  
      // Update the number of wins for each player based on the round winner
      if (roundWinner === "Player") {
        playerWins++;
      } else if (roundWinner === "Computer") {
        computerWins++;
      }
  
      // Output the result of the round
      console.log(
        `Round ${roundsPlayed}: ${playerSelection} vs. ${computerSelection} - ${roundWinner} wins`
      );
    }
  
    // Output the final result of the game
    console.log(
      `After ${roundsPlayed} rounds, the score is Player: ${playerWins} vs. Computer: ${computerWins}`
    );
  
    // Determine the overall winner of the game
    if (playerWins > computerWins) {
      console.log("Player wins the game!");
    } else if (computerWins > playerWins) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start playing the game
  playGame();
  
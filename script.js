function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerSelection === computerSelection) {
        return "It's a tie! Play again.";
    }

    if (rules[playerSelection] === computerSelection) {
        return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    } else {
        return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors:");
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}, Player: ${capitalizeFirstLetter(playerSelection)}, Computer: ${capitalizeFirstLetter(computerSelection)}`);
        
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
        // No score update if it's a tie
    }

    if (playerScore > computerScore) {
        console.log(`You won the game! Final Score: Player ${playerScore} - Computer ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost the game! Final Score: Player ${playerScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score: Player ${playerScore} - Computer ${computerScore}`);
    }
}

game(); // Start the game



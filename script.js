function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    //Convert playerSelection to lowercase for case insensitivity
    playerSelection = playerSelection.toLowerCase();

    //Define the rules of the game
    const rules = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    //check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie! Play again.";
    }

    //Determine the winner
    if (rules[playerSelection] === computerSelection) {
        return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}` ;
    } else {
        return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}` ;

    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


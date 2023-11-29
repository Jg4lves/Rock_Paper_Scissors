let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return `Tie! Play again."`
    } else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}
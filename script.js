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
        updateScore();
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return `Tie! Play again."`
    } else {
        computerScore++;
        updateScore();
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}
function updateScore() {
    document.getElementById("score").innerText = `Score: Player ${playerScore} - Computer ${computerScore}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        do {
            playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
        } while (!["rock", "paper", "scissors"].includes(playerSelection));

        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        alert(roundResult);
    }

    if (playerScore > computerScore) {
        alert("You win the game!");
    } else if (playerScore < computerScore) {
        alert("You lose the game!");
    } else {
        alert("The game ends in a tie!");
    }
    
    playerScore = 0;
    computerScore = 0;
    updateScore();
}
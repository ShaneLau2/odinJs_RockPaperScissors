function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    if (
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
    ) {
        return "Invalid input";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "scissors"
    ) {
        return "It's a tie!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        console.log("computerSelection: ", computerSelection);
        console.log("playerSelection: ", playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}
playGame();
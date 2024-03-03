// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

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

// async function playGame() {
// function playGame(user_input) {
// for (let i = 0; i < 5; i++) {
//     await new Promise((resolve) => {
//         rl.question("Enter rock, paper, or scissors: ", (playerSelection) => {
//             const computerSelection = getComputerChoice();
//             console.log("computerSelection: ", computerSelection);
//             console.log("playerSelection: ", playerSelection);
//             console.log(playRound(playerSelection, computerSelection));
//             resolve();
//         });
//     });
// }
// rl.close();
// const computerSelection = getComputerChoice();
// const divResult = document.getElementById("results");
// const result = playRound(user_input, computerSelection);
// divResult.innerText = computerSelection;
// divResult.innerText =
//     "Your input:" +
//     user_input +
//     "\nComputer chose: " +
//     computerSelection +
//     "\n" +
//     result;
// // renders the HTML inside divlet playerScore = 0;
// }
let computerScore = 0;
let playerScore = 0;

function playGame(user_input) {
    const computerSelection = getComputerChoice();
    const divScores = document.createElement("div");
    const divResult = document.getElementById("results");
    const roundResult = playRound(user_input, computerSelection);

    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        computerScore++;
    }
    divResult.innerText = `Your input: ${user_input}\nComputer chose: ${computerSelection}\n${roundResult}\n`;

    divScores.innerText = `Player Score: ${playerScore}, Computer Score: ${computerScore}\n${roundResult}`;

    if (playerScore === 5) {
        divScores.innerText += "\nPlayer wins the game!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        divScores.innerText += "\nComputer wins the game!";
        playerScore = 0;
        computerScore = 0;
    }
}

module.exports = playGame;
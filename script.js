function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomNumber = getRandomInt(options.length);
    return options[randomNumber];
}

function getRandomInt(maxNotInclusive) {
    return Math.floor(Math.random() * Math.floor(maxNotInclusive));
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Game got canceled."
    }
    playerSelection = playerSelection.toLowerCase();
    let options = ['rock', 'paper', 'scissors'];
    let validSelection = false;
    for (let i = 0; i < options.length; i++) {
        if (playerSelection === options[i]) {
            validSelection = true;
            break;
        }
    }
    if (!validSelection) {
        return "Not valid selection. Choose rock, paper or scissors.";
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "You win! Rock beats scissors";
            }
            else if (computerSelection === "rock") {
                return "Draw!"
            }
            else {
                return "You lose! Paper beats rock";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats rock";
            }
            else if (computerSelection === "paper") {
                return "Draw!"
            }
            else {
                return "You lose! Scissors beat paper";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "You win! Scissors beat paper";
            }
            else if (computerSelection === "scissors") {
                return "Draw!"
            }
            else {
                return "You lose! Rock beats scissors";
            }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors! Make your selection: ");
        const computerSelection = computerPlay();
        console.log("Round is started.");
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
function computerPlay() {
    randomNumber = Math.random();
    switch (true) {
        case randomNumber < 0.33:
            return "Rock";
        case randomNumber < 0.66:
            return "Paper";
        default:
            return "Scissors"
    }
}

// else statements aren't necessary as return exits the function immediately.
function playRound(playerSelection, computerSelection) {
    playerSelection = firstLetterUpperCase(playerSelection);
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "Tie! Both picked Rock";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper"
        } else {
            return "Tie! Both picked Paper"
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You Win! Scissors beats Paper"
        } else {
            return "Tie! Both picked Scissors"
        }
    }
}

function firstLetterUpperCase(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}
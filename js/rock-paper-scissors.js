const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");

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

function firstLetterUpperCase(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}

// else statements aren't necessary as return exits the function immediately.
// Maybe there's a better way of structuring this.
function playRound(playerSelection) {
    let computerSelection = computerPlay();
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
            return "You Lose! Scissors beats Paper";
        } else {
            return "Tie! Both picked Paper";
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "Tie! Both picked Scissors";
        }
    } else {
        return "Please select Rock, Paper or Scissors";
    }
}

function cleanUp(){
    humanScore.textContent = "0";
    computerScore.textContent = "0";
    resultDiv.textContent = "";
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultDiv.textContent = playRound(button.id);
        if (resultDiv.textContent.slice(0, 5) == "You W") {
            humanScore.textContent = Number(humanScore.textContent) + 1;
        } else if (resultDiv.textContent.slice(0, 5) == "You L") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }
        if (humanScore.textContent == "5") {
            alert("You WIN!");
            cleanUp();
        }
        if (computerScore.textContent == "5") {
            alert("You LOSE!");
            cleanUp();
        }
    })
})

/*
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Game number: " + i);
        let result = playRound(prompt("Rock, Paper or Scissors?"), computerPlay());
        if (result.slice(0, 5) == "You W") {
            playerWins++;
        } else if (result.slice(0,5) == "You L") {
            computerWins++;
        }
        console.log(result);
    }
    return (playerWins > computerWins) ? "Player wins!" :
        (playerWins < computerWins) ? "Computer wins!" : "Tie"
}
console.log(game());
*/
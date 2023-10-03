function getComputerChoice() {
    let choicesArray = ['Rock', 'Paper', 'Scissors']

    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

    return(computerChoice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return("It's a tie!");
    } else {
        if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
                return("Congratulations, you win!");
            } else {
                return("You lose.")
            }
    }
}

// Get player input
const playerSelection = "Rock";
console.log("The player chooses: " + playerSelection)

const computerSelection = getComputerChoice();
console.log("The computer chooses: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
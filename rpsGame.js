var humanScore = 0
var computerScore = 0

function getComputerChoice() {
    let num = Math.random()
    
    if (num < 0.33) {
        return "rock"
    } else if (num >= 0.33 && num < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Enter a valid choice (rock, paper, scissors): ")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie! Both players chose ${humanChoice}`)
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice == 'paper') {
                    console.log("You lose! Paper beats Rock")
                    computerScore += 1
                } else { // scissors
                    console.log("You win! Rock beats Scissors")
                    humanScore += 1
                }
                break
            case 'paper':
                if (computerChoice == 'rock') {
                    console.log("You win! Paper beats Rock")
                    humanScore += 1
                } else { // scissors
                    console.log("You lose! Scissors beats Paper")
                    computerScore += 1
                }
                break
            case 'scissors':
                if (computerChoice == 'rock') {
                    console.log("You lose! Rock beats Scissors")
                    computerScore += 1
                } else { // paper
                    console.log("You win! Scissors beats Paper")
                    humanScore += 1
                }
                break
            default:
                console.log("Invalid input from human player. Try again.")
        }
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
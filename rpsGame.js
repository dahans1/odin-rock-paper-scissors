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

function playGame() {
    let humanScore = 0
    let computerScore = 0

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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        console.log(`You win! Score: ${humanScore}.`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! Score: ${humanScore}`)
    } else {
        console.log(`It's a tie! Score: ${humanScore}`)
    }
}

playGame()
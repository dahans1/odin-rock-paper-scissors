function getComputerChoice() {
    let num = Math.random();
    
    if (num < 0.33) {
        return "rock";
    } else if (num >= 0.33 && num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const rounds = document.querySelector('.rounds');
        const scoreboard = document.querySelector('#scoreboard');
        const result = document.createElement('p');

        if (humanChoice == computerChoice) {
            result.textContent = `Tie! Both players chose ${humanChoice}`;
        } else {
            switch (humanChoice) {
                case 'rock':
                    if (computerChoice == 'paper') {
                        result.textContent = "You lose! Paper beats Rock";
                        computerScore += 1;
                    } else { // scissors
                        result.textContent = "You win! Rock beats Scissors";
                        humanScore += 1;
                    }
                    break;
                case 'paper':
                    if (computerChoice == 'rock') {
                        result.textContent = "You win! Paper beats Rock";
                        humanScore += 1
                    } else { // scissors
                        result.textContent = "You lose! Scissors beats Paper";
                        computerScore += 1;
                    }
                    break;
                case 'scissors':
                    if (computerChoice == 'rock') {
                        result.textContent = "You lose! Rock beats Scissors";
                        computerScore += 1;
                    } else { // paper
                        result.textContent = "You win! Scissors beats Paper";
                        humanScore += 1;
                    }
                    break;
                default:
                    break;
            }
        }

        rounds.appendChild(result);
        scoreboard.textContent = `Human: ${humanScore} - Computer ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            const finalResult = document.createElement('h1');
            if (humanScore > computerScore) {
                finalResult.textContent = (`You win! Score: ${humanScore}.`)
            } else if (humanScore < computerScore) {
                finalResult.textContent = (`You lose! Score: ${humanScore}`)
            } else {
                finalResult.textContent = (`It's a tie! Score: ${humanScore}`)
            }
            rounds.appendChild(finalResult);
        }
    }

    buttons = document.querySelector(".rps-buttons");

    buttons.addEventListener('click', (e) => {
        if (humanScore != 5 && computerScore != 5) {
            let target = e.target;
            let computerChoice = getComputerChoice();

            playRound(target.id, computerChoice);
        }
    });
}

playGame();
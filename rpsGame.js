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

console.log(getHumanChoice())
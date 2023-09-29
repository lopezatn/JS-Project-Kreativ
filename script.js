function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];
}

// let randomString = computerPlay();
// console.log(randomString);

function gamePlay(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.toLowerCase()
    const formattedComputerSelection = computerSelection.toLowerCase();

    if (formattedPlayerSelection === formattedComputerSelection) {
        return "Its a tie!";
    }
    if ((formattedPlayerSelection === "rock" && formattedComputerSelection === "scissors") ||
        (formattedPlayerSelection === "scissors" && formattedComputerSelection === "paper") ||
        (formattedPlayerSelection === "paper" && formattedComputerSelection === "rock")) {
        return `You win, your ${formattedPlayerSelection} beats his ${formattedComputerSelection}`
    } else {
        return `You loose your ${formattedComputerSelection} beats his ${formattedPlayerSelection}`
    }
    
}

console.log(gamePlay(computerPlay(), computerPlay()))

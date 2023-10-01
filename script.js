function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * rps.length);
  return rps[randomIndex];
}

// let randomString = computerPlay();
// console.log(randomString);

function gamePlay(playerSelection, computerSelection) {
  const formattedPlayerSelection = playerSelection.toLowerCase();
  const formattedComputerSelection = computerSelection.toLowerCase();

  if (formattedPlayerSelection === formattedComputerSelection) {
    return "Its a tie!";
  }
  if (
    (formattedPlayerSelection === "rock" &&
      formattedComputerSelection === "scissors") ||
    (formattedPlayerSelection === "scissors" &&
      formattedComputerSelection === "paper") ||
    (formattedPlayerSelection === "paper" &&
      formattedComputerSelection === "rock")
  ) {
    return `You win, your ${formattedPlayerSelection} beats his ${formattedComputerSelection}`;
  } else {
    return `You loose your ${formattedComputerSelection} beats his ${formattedPlayerSelection}`;
  }
}

console.log(gamePlay(computerPlay(), computerPlay()));

function playRound() {
  let playerSelection = prompt("Write rock, paper or scissors");
  playerSelection = playerSelection.toLowerCase().trim().replace(/\s/g, "");
  const computerSelection = computerPlay();
  let winner;
  //   console.log(`Player input: ${playerSelection}`);
  //   console.log(`Computer input: ${computerSelection}`);
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") return (winner = "computer");
      if (computerSelection === "rock") return (winner = "tie");
      if (computerSelection === "scissors") return (winner = "player");
      break;
    case "paper":
      if (computerSelection === "scissors") return (winner = "computer");
      if (computerSelection === "paper") return (winner = "tie");
      if (computerSelection === "rock") return (winner = "player");
      break;
    case "scissors":
      if (computerSelection === "rock") return (winner = "computer");
      if (computerSelection === "scissors") return (winner = "tie");
      if (computerSelection === "paper") return (winner = "player");
      break;
    default:
      alert("Invalid user input");
      playRound();
      break;
  }
}

console.log(playRound());

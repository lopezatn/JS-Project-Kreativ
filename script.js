function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * rps.length);
  return rps[randomIndex];
}

// let randomString = computerPlay();
// console.log(randomString);

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

function game(){
  let playerWins = 0;
  while (playerWins<5){
    const winner = playRound();

    if (winner === "player"){
      playerWins++;
      console.log(`Woohoo, You won this round! Player: ${playerWins} - Computer: ${5=playerWins} rounds left`);
    }else if (winner === "computer"){
      console.log("Computer wins this round");
      playerWins = 0;
    }else {
      console.log("It's a tie.Play again");
    }
  }

  console.log("Congratulations, You have defeated me!!! I will have my revenge soon.");
}

console.log(playRound());
game();
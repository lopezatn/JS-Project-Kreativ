function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * rps.length);
  return rps[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let winner;

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
      break;
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      `Enter "rock", "paper" or "scissors", to open console press the key combination "CTRL + Shift + I"`
    );
    playerSelection = playerSelection.toLowerCase().replace(/\s/g, "");
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    switch (winner) {
      case "player":
        playerWins++;
        console.log(`Woohoo, You won this round!`);
        console.log(
          `you chose ${playerSelection}, i have ${computerSelection}. ${playerSelection} beats ${computerSelection}`
        );
        break;
      case "computer":
        computerWins++;
        console.log("Computer wins this round");
        console.log(
          `you chose ${playerSelection}, i have ${computerSelection}. ${computerSelection} beats ${playerSelection}`
        );
        break;
      case "tie":
        console.log(
          `you chose ${playerSelection}, i have ${computerSelection}.`
        );
        console.log("It's a tie. Lets try one more time.");
        i--;
        break;
      default:
        console.log("Wrong Input");
        i--;
    }

    console.log(
      `Score --------------------- Player: ${playerWins} ---- Computer: ${computerWins}`
    );
    i > 0 && console.log(`${5 - i} rounds left`);
  }
  if (computerWins < playerWins) {
    console.log(
      "Congratulations, You have defeated me!!! I will have my revenge soon."
    );
  } else {
    console.log(
      "Huhuhahahahha, You can not defeat me. !!! Better Luck next time."
    );
  }
}

game();

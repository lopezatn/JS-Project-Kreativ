function computerPlay() {
  const rps = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * rps.length);
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
    case null:
      return "cancelled"
    default:
      break;
  }
}

function playerPlay() {
  return prompt(
    `Write rock, paper or scissors, all results provided in console, to open "CTRL + Shift + i`
  );
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let escape = false;

  for (let i = 1; i <= 5 && escape === false; i++) {
    let playerSelection = playerPlay()
    if (playerSelection != null)
      playerSelection = playerSelection.toLowerCase().replace(/\s/g, "");

    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    switch (winner) {
      case "player":
        playerWins++;
        console.log(`Woohoo, You won this round!`);
        break;
      case "computer":
        computerWins++;
        console.log("Computer wins this round");
        break;
      case "tie":
        console.log("It's a tie. Lets try one more time.");
        i--;
        break;
      case "cancelled":
        console.log("Exiting game..");
        escape = true;
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

// game();

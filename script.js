document.addEventListener("DOMContentLoaded", function () {

  function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];
  }

  function playerPlay() {
    let playerInput = prompt(
      `Write rock, paper or scissors, all results provided in console`
    );
    if (playerInput !== null) {
      playerInput = playerInput.toLowerCase().replace(/\s/g, "");
      return playerInput;
    } 
    return "exit";
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
        return "cancelled";
      default:
        break;
    }
  }

  function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let i = 1; i <= 5; i++) {
      let playerSelection = playerPlay();
      let computerSelection = computerPlay();
      if(playerSelection === 'exit') return console.log('Game Exited');
      let winner = playRound(playerSelection, computerSelection);

      switch (winner) {
        case "player":
          playerWins++;
          console.log(`Woohoo, You won this round!`);
          console.log(`Player chose: ${playerSelection}`);
          console.log(`Computer chose: ${computerSelection}`);
          break;
        case "computer":
          computerWins++;
          console.log(`Computer wins this round!`);
          console.log(`Player chose: ${playerSelection}`);
          console.log(`Computer chose: ${computerSelection}`);
          break;
        case "tie":
          console.log(`It's a tie. No one scores a point!`);
          console.log(`Player chose: ${playerSelection}`);
          console.log(`Computer chose: ${computerSelection}`);
          ties++;
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
    } else if (computerWins === playerWins) {
      console.log("Well it's a tie, at least you didn't lose");
    } else {
      console.log(
        "Huhuhahahahha, You can not defeat me. !!! Better Luck next time."
      );
    }
  }

  game();
});
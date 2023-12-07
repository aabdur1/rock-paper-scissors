// Use random number to get computer choice 
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (num === 1) {
    computerChoice = "rock";
  } else if (num === 2) {
    computerChoice = "paper";
  } else if (num === 3) {
    computerChoice = "scissors";
  }

  return computerChoice;
}


let rock = document.querySelector("button.rock");
let paper = document.querySelector("button.paper");
let scissors = document.querySelector("button.scissors");

let roundChoice = document.querySelector("p.roundChoice");
let roundWinner = document.querySelector("p.roundWinner");

let playerScoreboard = document.querySelector("p.playerScore");
let computerScoreboard = document.querySelector("p.computerScore");

let result = document.querySelector("p.results");


let playerChoice;

let playerScore = 0;
let computerScore = 0;

function rockChoice(){
  playerChoice = "rock";
  playRound();
};

function paperChoice(){
  playerChoice = "paper";
  playRound();
};

function scissorsChoice(){
  playerChoice = "scissors";
  playRound();
};


let winner;

function playRound() {
  let computerSelection = getComputerChoice();
  result.textContent = "";

  playerScoreboard.textContent = "Player Score: " + playerScore;
  computerScoreboard.textContent = "Computer Score: " + computerScore;


  if (computerSelection === playerChoice) {
    winner = "Tie";
    roundChoice.textContent = "You both selected " + computerSelection + ".";
    roundWinner.textContent = "It's a tie.";
  } else if (computerSelection !== playerChoice) {
    if (computerSelection === "rock" && playerChoice === "paper") {
      winner = "Player";
      roundChoice.textContent = "You selected paper. Computer selected rock.";
      roundWinner.textContent = winner + " wins! Paper beats rock.";
      playerScore++;
      playerScoreboard.textContent = "Player Score: " + playerScore;
    } else if (computerSelection === "rock" && playerChoice === "scissors") {
      winner = "Computer";
      roundChoice.textContent = "You selected scissors. Computer selected rock.";
      roundWinner.textContent = winner + " wins! Rock beats scissors.";
      computerScore++;
      computerScoreboard.textContent = "Computer Score: " + computerScore;
    } else if (computerSelection === "paper" && playerChoice === "scissors") {
      winner = "Player";
      roundChoice.textContent = "You selected scissors. Computer selected paper.";
      roundWinner.textContent = winner + " wins! Scissors beats paper.";
      playerScore++;
      playerScoreboard.textContent = "Player Score: " + playerScore;
    } else if (computerSelection === "paper" && playerChoice === "rock") {
      winner = "Computer";
      roundChoice.textContent = "You selected rock. Computer selected paper.";
      roundWinner.textContent = winner + " wins! Paper beats rock.";
      computerScore++;
      computerScoreboard.textContent = "Computer Score: " + computerScore;
    } else if (computerSelection === "scissors" && playerChoice === "rock") {
      winner = "Player";
      roundChoice.textContent = "You selected rock. Computer selected scissors.";
      roundWinner.textContent = winner + " wins! Rock beats scissors.";
      playerScore++;
      playerScoreboard.textContent = "Player Score: " + playerScore;
    } else if (computerSelection === "scissors" && playerChoice === "paper") {
      winner = "Computer";
      roundChoice.textContent = "You selected paper. Computer selected scissors.";
      roundWinner.textContent = winner + " wins! Scissors beats paper.";
      computerScore++;
      computerScoreboard.textContent = "Computer Score: " + computerScore;
    }
  }

  if (playerScore + computerScore == 5) {
    playerScoreboard.textContent = "Player Score: " + playerScore;
    computerScoreboard.textContent = "Computer Score: " + computerScore;

    if (playerScore > computerScore) {
      result.textContent = "YOU WIN!!!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore > playerScore) {
      result.textContent = "YOU LOST :(";
      playerScore = 0;
      computerScore = 0;
    }

    if (playerChoice == 0 && computerScore == 0) {
      playerScoreboard.textContent = "Player Score: " + playerScore;
      computerScoreboard.textContent = "Computer Score: " + computerScore;
    }
  }
}


rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);




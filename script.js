let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
  const randChoice = Math.floor(Math.random() * 3);

  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

window.onload = function () {
  rock.onclick = function () {
    playRound("rock", getComputerChoice());
  };
  paper.onclick = function () {
    playRound("paper", getComputerChoice());
  };
  scissors.onclick = function () {
    playRound("scissors", getComputerChoice());
  };
};

function endGame(nodeVal) {
  if (humanScore == 5) {
    nodeVal.nodeValue = "Player wins the game!";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
  } else if (computerScore == 5) {
    nodeVal.nodeValue = "Computer wins the game!";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
  }
}

function playRound(humanChoice, computerChoice) {
  var results = document.getElementById("result");
  results.innerHTML = "";
  let newNode = document.createTextNode("");
  results.appendChild(newNode);
  if (humanChoice == computerChoice) {
    newNode.nodeValue = "Tie!";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    newNode.nodeValue = "Rock beats scissors! Player wins this round.";
    humanScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    newNode.nodeValue = "Paper beats rock! Computer wins this round.";
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    newNode.nodeValue = "Scissors cut paper! Player wins this round.";
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    newNode.nodeValue = "Rock beats scissors! Computer wins this round.";
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    newNode.nodeValue = "Scissors cut paper! Computer wins this round.";
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    newNode.nodeValue = "Paper beats rock! Player wins this round.";
    humanScore += 1;
  } else {
    newNode.nodeValue = "Something went wrong.";
  }
  document.getElementById("player-score").innerHTML = humanScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  console.log(roundCounter);
  endGame(newNode);
}

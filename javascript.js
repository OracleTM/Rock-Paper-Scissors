 
function getComputerChoice() {
  let randomMath = Math.floor((Math.random() * 3) + 1)
  if (randomMath == 1) {
    return "rock";
  } else if (randomMath == 2) {
  return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let word = prompt("chose rock, paper or scissors").toLowerCase();
  if (word == "rock"){
    return "rock"
  } else if (word == "paper"){
    return "paper"
  } else if (word == "scissors"){
    return "scissors"
  } else {
    return "Wrong chose"
  }
}

function playRound() {

  let computer = (getComputerChoice());
  let human = (getHumanChoice());
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  
  if (computer === rock && human === scissors) {
    return "You Lose! scissors < rock"
  } else if (computer === paper && human === rock) {
    return "You Lose! paper > rock"
  } else if (computer === scissors && human === paper) {
    return "You lose! scissors > paper"
  } else if (human === rock && computer === scissors) {
    return "You Win! rock > scissors"
  } else if (human === paper && computer === rock) {
    return "You Win! paper > rock"
  } else if (human === scissors && computer === paper) {
    return "You Win! scissors > paper"
  } else if (human === scissors && computer === scissors) {
    return "Draw"
  } else if (human === rock && computer === rock) {
    return "Draw"
  } else if (human === paper && computer === paper) {
    return "Draw"
  } else (human === "Wrong chose"); {
   return "Wrong chose"
  }

}

let humanScore = 0;
let computerScore = 0;

function playGame() { 
  let text = playRound();
  const lose1 = "You Lose! scissors < rock";
  const lose2 = "You Lose! paper > rock";
  const lose3 = "You lose! scissors > paper";
  const win1 = "You Win! rock > scissors";
  const win2 = "You Win! paper > rock";
  const win3 = "You Win! scissors > paper";
  const wrong = "Wrong chose";
  if (lose1 === text || lose2 === text || lose3 === text ) {
    computerScore++
    return text
  } else if(win1 === text || win2 === text || win3 === text) {
    humanScore++
    return text
  } else if("Draw" === text) {
    return "Draw"
  } else if(wrong == text) {
    return "Wrong chose, try again"
  } 
}

while (computerScore < 5 && humanScore < 5){
  console.log(playGame());
  if (humanScore <= 4 && computerScore <= 4){
  console.log(humanScore + " You score");
  console.log(computerScore + " Computer score");
  } else if (humanScore == 5) {
    console.log(humanScore + " You score")
    console.log(computerScore + " Computer score")
    console.log(" You Win!"); 
  } else if (computerScore == 5) {
    console.log(humanScore + " You score")
    console.log(computerScore + " Computer score")
    console.log(" You lose ;(");
  } else {
    console.log("Error");
  }
}
 
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

function disableChoseButtons() {
  switcher.removeChild(rock);
  switcher.removeChild(paper);
  switcher.removeChild(scissors);
  const reloadButton = document.createElement("button")
  reloadButton.textContent = "Reload Page";
  switcher.appendChild(reloadButton);
  reloadButton.addEventListener("click", () => {
    location.reload()
})
};


 let humanScore = 0;
 let computerScore = 0;



function playRound(val){
  let computer = (getComputerChoice());
  let result = ""

  if ((computer == "rock" && val == "scissors") ||
      (computer == "paper" && val == "rock") ||
      (computer == "scissors" && val == "paper")) {

        computerScore = computerScore + 1
        result = ("You Lose! " + computer + "  >  " + val
          + "<br></br>Player scrore: " + humanScore + " Computer score: " + computerScore)
         

        if (computerScore == 5) {
          result = result + "<br></br>You lose! Reload page to play again !"
          disableChoseButtons()
        } 
      }

       else if (val == computer) {
        result = ("Draw " + computer + " = " + val
          + "<br></br>Player scrore: " + humanScore + " Computer score: " + computerScore)
      }

       else {
        humanScore = humanScore + 1
        result = ("You Win! " + val + " > " + computer
          + "<br></br>Player scrore: " + humanScore + " Computer score: " + computerScore)
      } 
      
              if (humanScore == 5) {
              result = result + "<br></br>You Win! Reload page to play again !"
              disableChoseButtons()
      }
      document.getElementById('result').innerHTML = result
      return
};

const switcher = document.querySelector("#switcher")



const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock");
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper");
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound("scissors");
})



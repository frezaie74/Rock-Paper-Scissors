const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const choice = choices[randomIndex];
  console.log("computer random choice", choice);
  return choice;
}


const getResult=(player, computer)=> {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}


const playRound=(playerChoice)=> {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  const resultEl = document.getElementById("result");

  if (result === "win") {
    resultEl.textContent = "YOU WIN!"
    ;
  } else if (result === "lose") {
    resultEl.textContent = "YOU LOSE";
  } else {
    resultEl.textContent = "EQUAL";
  }

}

  const reset = () => {
  const resultEl = document.getElementById("result");
  resultEl.textContent = ""; 
  
}



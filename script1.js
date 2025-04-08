alert("This is a best of 5");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 10);
    let computerChoice = "";
    if (random <= 3) {
        computerChoice = "Rock";
        console.log("Rock");
    } else if (random >= 3 && random <= 6) {
        computerChoice = "Paper";
        console.log("Paper");
    } else if (random >= 7) {
        computerChoice = "Scissors";
        console.log("Scissors");
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = "";
    humanChoice = prompt("Paper, Rock or Scissors?")
    console.log(humanChoice);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice === computerChoice){
        console.log("Draw!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
 ) {
        console.log("You won! " + humanChoice + " beats " + computerChoice);
        humanScore = (humanScore + 1);
    } else {
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
        computerScore = (computerScore + 1);
    }
    console.log("Your score is " + humanScore);
    console.log("Computer score is " + computerScore);
    return computerScore, humanScore;
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore){
        alert("Congratulations! You won against the mighty machine!" + " You won " + humanScore + " times!");
    } else{
        alert("Oh no! The cruel machine won this game!" + " The machine won " + computerScore + " times!");
    }
}

playGame();









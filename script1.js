function getComputerChoice() {
    let random = Math.floor(Math.random() * 10);
    let computerChoice = "";
    if (random <= 3) {
        computerChoice = "Rock";
    } else if (random >= 3 && random <= 6) {
        computerChoice = "Paper";
    } else if (random >= 7) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let humanChoice = "";
rock.addEventListener("click", () => {
    humanChoice = "Rock";
    playRound(humanChoice);
})

paper.addEventListener("click", () => {
    humanChoice = "Paper";
    playRound(humanChoice);
});

scissors.addEventListener("click", () => {
    humanChoice = "Scissors";
    playRound(humanChoice);
});


let humanScore = 0;
let computerScore = 0;

function resetGame(){
    window.location.reload();
}

function checkWinner(){
    if (computerScore + humanScore >= 5){
        if (humanScore > computerScore){
            alert("Congratulations! You won against the mighty machine!" + " You won " + humanScore + " times!");
            if (confirm("You want to play again?")){
                resetGame();
            } else {
                txt = "You pressed cancel!";
            }
        } else if (computerScore > humanScore){
            alert("Oh no! The cruel machine won this game!" + " The machine won " + computerScore + " times!");
            if (confirm("You want to play again?")){
                resetGame();
            } else {
                txt = "You pressed cancel!";
            }
        }
    }
}

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice){
        alert("Draw!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
 ) {
        alert("You won! " + humanChoice + " beats " + computerChoice);
        humanScore = (humanScore + 1);
    } else {
        alert("You lost! " + computerChoice + " beats " + humanChoice);
        computerScore = (computerScore + 1);
    }
    document.querySelector(".playerwins").textContent = "You have won " + humanScore + " times!";
    document.querySelector(".computerwins").textContent = "The computer has won " + computerScore + " times!";
    checkWinner();
    return computerScore, humanScore;
}






// function playGame(){
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     if (humanScore > computerScore){
//         alert("Congratulations! You won against the mighty machine!" + " You won " + humanScore + " times!");
//     } else{
//         alert("Oh no! The cruel machine won this game!" + " The machine won " + computerScore + " times!");
//     }
// }

// playGame();









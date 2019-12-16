let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click',() => game('p'));
    scissors_div.addEventListener('click',() => game('s'));
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function wins(user, computer){
    const userSelect = document.getElementById(user);
    userScore++;
    console.log("win");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You Win. 🔥`;
    userSelect.classList.add('green-glow');
    setTimeout(() => userSelect.classList.remove('green-glow'), 300);
}
function loses(user, computer){
    const userSelect = document.getElementById(user);
    computerScore++;
    console.log("lose");
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You Lose. 😞`;
    userSelect.classList.add('red-glow');
    setTimeout(() => userSelect.classList.remove('red-glow'), 300);
}
function draw(user, computer){
    const userSelect = document.getElementById(user);
    console.log("draw");
    result_div.innerHTML = `${convertToWord(computer)} - ${convertToWord(user)}. It's a Draw. 😲`;
    userSelect.classList.add('grey-glow');
    setTimeout(() => userSelect.classList.remove('grey-glow'), 300);
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];

}


main();
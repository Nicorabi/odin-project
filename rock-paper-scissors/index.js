let userScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const userScoreDiv = document.querySelector('#user-score');
const computerScoreDiv = document.querySelector('#computer-score');
const computerChoiceDiv = document.querySelector('#computer-choice');

updateScore();

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('rock', computerSelection);
    resultsDiv.textContent = result;
    computerChoiceDiv.textContent = `Computer chose ${computerSelection}.`;
    updateScore();
    checkGameEnd();
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('paper', computerSelection);
    resultsDiv.textContent = result;
    computerChoiceDiv.textContent = `Computer chose ${computerSelection}.`;
    updateScore();
    checkGameEnd();
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('scissor', computerSelection);
    resultsDiv.textContent = result;
    computerChoiceDiv.textContent = `Computer chose ${computerSelection}.`;
    updateScore();
    checkGameEnd();
});

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie!";
    } if (playerSelection === 'rock' && computerSelection === 'scissor') {
        userScore += 1;
        return 'You win!';
    } if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie!";
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore += 1;
        return 'You win!';
    } if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return "It's a tie!";
    } if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose!';
    } if (playerSelection === 'scissor' && computerSelection === 'paper') {
        userScore += 1;
        return 'You win!';
    }
}

function checkGameEnd() {
    if (userScore >= 5 || computerScore >= 5) {
        resultsDiv.textContent = game();
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        const newGameButton = document.createElement('button');
        newGameButton.textContent = 'New Game';
        newGameButton.addEventListener('click', () => {
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            userScore = 0;
            computerScore = 0;
            updateScore();
            resultsDiv.textContent = '';
            computerChoiceDiv.textContent = '';
            newGameButton.remove();
        });
        resultsDiv.appendChild(newGameButton);
    }
}


function game() {
    if (userScore > computerScore) {
        return 'Player wins!';
    } else if (userScore < computerScore) {
        return 'Computer wins!';
    }
}

function updateScore() {
    const userScoreElement = document.querySelector('#user-score');
    const computerScoreElement = document.querySelector('#computer-score');
    userScoreElement.textContent = `Your score: ${userScore}`;
    computerScoreElement.textContent = `Computer's score: ${computerScore}`;
}

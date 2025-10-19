let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restartBtn = document.querySelector('#restart');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#results');

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultDisplay.textContent = `It's a tie! You both chose ${humanChoice}.`;    
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultDisplay.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++;
        resultDisplay.textContent = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5 || computerChoice === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        resultDisplay.textContent = 'Congratulations! You win the game!';
    } else {
        resultDisplay.textContent = 'Computer wins the game! Better luck next time!';
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

rockBtn.addEventListener('click', () => {
    const humanChoice = 'rock';
    playRound(humanChoice);
});
paperBtn.addEventListener('click', () => {
    const humanChoice = 'paper';
    playRound(humanChoice);
});
scissorsBtn.addEventListener('click', () => {
    const humanChoice = 'scissors';
    playRound(humanChoice);
});
restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
})
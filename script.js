let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#result p');


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

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    let resultMessage = '';
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++;
        resultMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    resultDisplay.textContent = `${resultMessage}`;

    if (humanScore >= 5 || computerScore >= 5) {
        declareWinner();
    }
}

function playGame() {
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner! Better luck next time.");
    } else {
        console.log("It's an overall tie!");
    }
}

function declareWinner() {
    let finalMessage = '';

    if (humanScore > computerScore) {
        finalMessage = "Congratulations! You are the overall winner!";
    } else if (computerScore > humanScore) {
        finalMessage = "Computer is the overall winner! Better luck next time.";
    } else {
        finalMessage = "It's a tie!";
    }

    resultDisplay.textContent = `Game Over! ${finalMessage}`;

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.textContent = 'Make your move!';

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        restartButton.remove();
    });
    document.body.appendChild(restartButton);
}

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
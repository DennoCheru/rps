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

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;


function playGame() {
    function playRound() {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();

            if (humanChoice === computerChoice) {
                console.log(`It's a tie! Both chose ${humanChoice}.`);
            } else if (
                (humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')
            ) {
                humanScore++;
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
            } else if (
                (humanChoice === 'rock' && computerChoice === 'paper') ||
                (humanChoice === 'paper' && computerChoice === 'scissors') ||
                (humanChoice === 'scissors' && computerChoice === 'rock')
            ) {
                computerScore++;
                console.log(`Computer wins this round! ${computerChoice} beats ${humanChoice}.`);
            }
    }
    
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner! Better luck next time.");
    } else {
        console.log("It's an overall tie!");
    }
}

playGame();
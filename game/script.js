function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.appendChild(resultDiv);

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    rockBtn.addEventListener('click', () => {
        playRound('rock');
    });

    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    paperBtn.addEventListener('click', () => {
        playRound('paper');
    });

    const scissorBtn = document.createElement('button');
    scissorBtn.textContent = 'Scissor';
    scissorBtn.addEventListener('click', () => {
        playRound('scissors');
    });

    document.body.appendChild(rockBtn);
    document.body.appendChild(paperBtn);
    document.body.appendChild(scissorBtn);

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        let resultMessage;

        if (humanChoice === computerChoice) {
            resultMessage = 'Tie, both choose the same';
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        }

        resultDiv.textContent = `${resultMessage} | Current score: Human: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            announceWinner();
        }
    }

    function announceWinner() {
        if (humanScore === 5) {
            resultDiv.textContent = `You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`;
        } else {
            resultDiv.textContent = `Computer wins the game! Final score - Human: ${humanScore}, Computer: ${computerScore}`;
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    playGame();
});




function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice () {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getHumanChoice () {
        let humanChoice = prompt('Please enter rock, paper or scissors?').toLowerCase();

        while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
            humanChoice = prompt('Invalid choice!').toLowerCase();
        }
        return humanChoice;
    }

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('Tie, both choose the same');
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
        }
        console.log(`Current score: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win! Final score - Human: ${humanScore} beats Computer: ${computerScore}`);
    } else if (computerScore > computerScore) {
        console.log(`You loose! Final score - Computer: ${computerScore} beats Human: ${humanScore}`)
    } else {
        console.log(`It's a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame();

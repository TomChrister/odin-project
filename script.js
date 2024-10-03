/*function favoritePlayer (player) {
    return player + ' is my favorite player';
}

console.log(favoritePlayer('Drogba'))
console.log(favoritePlayer("Lampard"))


function add7 (number) {
    return number + 9;
}
console.log(add7('8'))


function multiply (numbers) {
    return numbers * 2;
}
console.log(multiply('8'))


function capitalize (string) {
    string = 'hello'
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize())


function lastLetter (dLetter) {
    dLetter = 'abcd';
    return dLetter.charAt(dLetter.length - 1);
}
console.log(lastLetter())


let answer = parseInt(prompt('Enter the number you would like to increase'))

for (let i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i);
    }
}


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
        console.log(`The game is a tie! Final score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();*/


function changeColor () {
    const btn = document.getElementById('btn');

    if (btn.style.color === 'red') {
        btn.style.color = 'blue'
    } else {
        btn.style.color = 'red'
    }
}
changeColor();


const names = ['Tom', 'Marius', 'Matija', 'Daniel'];
document.getElementById('string').innerHTML = names.join(' - ');

const filtered = names.filter((name) => name.startsWith('M'));
console.log(filtered);

let favoriteName = 'My friends are called ';

for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
        favoriteName += `and ${names[i]}`
    } else {
        favoriteName += `${names[i]}, `;
    }
}

console.log(favoriteName);

const redP = document.createElement('p');
redP.innerHTML = 'Hey Im red!';
redP.style.color = 'red';
document.body.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.innerHTML = 'Hey Im blue H3!';
blueH3.style.color = 'blue';
document.body.appendChild(blueH3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'Im a div'

const p = document.createElement('p');
p.innerHTML = 'ME TOO!'

div.appendChild(h1);
div.appendChild(p)

document.body.appendChild(div);

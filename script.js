function favoritePlayer (player) {
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


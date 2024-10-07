const containerDiv = document.getElementById('container');
const button = document.getElementById('newGridButton');
button.textContent = 'Click me'

function createGrid(squaresPerSide) {
    containerDiv.innerHTML = '';


    for (let i = 0; i < squaresPerSide + squaresPerSide; i++ ) {
        const newDiv = document.createElement('div');

        newDiv.className = 'new-div';
        containerDiv.appendChild(newDiv);
    }
}

button.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt('Enter number of squares per side (max 100):'));

    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100 ) {
        alert('Please enter a number between 1 and 100.');
    } else {
        createGrid(squaresPerSide);
    }
});

createGrid(16);

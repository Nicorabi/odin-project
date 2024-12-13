const contDiv = document.querySelector('.container');
const button = document.querySelector('.button');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(num) {
    const size = Math.min(num, 100);

    contDiv.textContent = '';

    const squareSize = `${Math.floor(960 / size)}px`;

    contDiv.style.gridTemplateColumns = `repeat(${size}, ${squareSize})`;
    contDiv.style.gridTemplateRows = `repeat(${size}, ${squareSize})`;

    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.style.width = squareSize;
        div.style.height = squareSize;
        contDiv.appendChild(div);
        div.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = getRandomColor();
        });
    }
}

createGrid(16);

button.addEventListener('click', () => {
    const num = parseInt(prompt("Enter the number of squares (max 100)"));
    if (!isNaN(num)) {
        createGrid(num);
    }
});

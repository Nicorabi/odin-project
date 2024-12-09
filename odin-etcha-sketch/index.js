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

// Function to create grid
function createGrid(num) {
    // Limit grid size to max of 100
    const size = Math.min(num, 100);

    // Clear existing grid
    contDiv.textContent = '';

    // Calculate the width and height of each square based on the container size
    const squareSize = `${Math.floor(960 / size)}px`;

    // Set grid size
    contDiv.style.gridTemplateColumns = `repeat(${size}, ${squareSize})`;
    contDiv.style.gridTemplateRows = `repeat(${size}, ${squareSize})`;

    // Create new grid
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

// Initial grid creation with default size of 16x16
createGrid(16);

// Add event listener to button to create new grid
button.addEventListener('click', () => {
    const num = parseInt(prompt("Enter the number of squares (max 100)"));
    if (!isNaN(num)) {
        createGrid(num);
    }
});

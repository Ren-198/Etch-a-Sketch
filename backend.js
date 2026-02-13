let container = document.querySelector("#container");
const setGrid = document.querySelector("button");
const gridSize = 16;
const containerSize = 950;
totalCells = 16*16;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(event) {
    let color = getRandomColor();
    event.target.style.backgroundColor = color;
}

function createGrid(gridSize) {
    container.innerHTML = "";

    totalCells = gridSize * gridSize;
    const squareSize = containerSize / gridSize;

    for (let i = 0; i < totalCells; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid-item");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;

        grid.addEventListener("mouseover", changeColor);
        container.appendChild(grid);

    }
}

setGrid.addEventListener('click', (event) => {
    let input = prompt("Enter the number of squares per side: ");
    let size = parseInt(input);

    if (!size || size < 1 || size > 100) {
        alert("Invalid input. please enter a number between 1 and 100. ")

        return;
    }

    createGrid(size);
    
});

createGrid(gridSize);






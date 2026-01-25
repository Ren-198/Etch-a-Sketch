let container = document.querySelector("#container");
const gridSize = 16;
totalCells = 16*16;

function changeColor(event) {
    event.target.style.backgroundColor = 'black';
}

function createGrid() {
    for (let i = 0; i < totalCells; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid-item");
        grid.addEventListener("mouseover", changeColor);
        container.appendChild(grid);

    }
}

createGrid();





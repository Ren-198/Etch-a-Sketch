let container = document.querySelector("#container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("id", `grid${i + 1}`);
        grid.appendChild(grid);

    }
}

createGrid();



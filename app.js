gridSize = 16;

let grid = document.querySelector('.grid');

for (let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    grid.appendChild(square);
}

console.log(grid)
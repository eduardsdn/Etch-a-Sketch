gridSize = 64;

let grid = document.querySelector('.grid');

for (let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    grid.style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');
    grid.style.setProperty('grid-template-rows', 'repeat(' + gridSize + ', 1fr)');

    grid.appendChild(square);

}

console.log(grid)
gridSize = 64;

let grid = document.querySelector('.grid');

for (let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    grid.style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');
    grid.style.setProperty('grid-template-rows', 'repeat(' + gridSize + ', 1fr)');

    grid.appendChild(square);

}

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener("mouseover", event => {
        item.className = 'squareHovered'
    })
})

console.log()





sizeBtn = document.querySelector('.sizeBtn');
sizeBtn.addEventListener("click", function() {
    document.querySelectorAll('.squareHovered').forEach(item => { 
        item.className = "square"});
    let gridSize = parseInt(prompt("What's the size?"));
    if (gridSize > 100) {
        alert('Please enter size below 100')
        window.location.reload();
    }
    paint(gridSize)
})





function paint(size){
    let grid = document.querySelector('.grid');

    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        grid.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)');
        grid.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)');

        grid.appendChild(square);

    }

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mouseover", event => {
            item.className = 'squareHovered';
        })
    })
}

paint()










function createGrid(size) {
    let grid = "";

    for (let i = 0; i <= size; i++) {
        grid += '<div class="row">';
        
        for (let j = 0; j <= size; j++) {
            grid += '<div class="cell"></div>';
        }
        grid += '</div>';
    }

    return grid;
}

// if cell is hovered then change color to black
function changeCellColor() {
    const pixels = document.querySelectorAll('.cell');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', e => {
            pixel.classList.add('activate');
            e.stopPropagation();
        });
    });
}

// create etch-a-sketch pixels
const container = document.querySelector('body');
const cells = document.createElement('div');
cells.classList.add('container');

cells.innerHTML = createGrid(16);;
container.appendChild(cells);

// if button clicked change size
const changeSize = document.querySelector('.resize');

changeSize.addEventListener('click', () => {
    newSize = prompt("What size? ");
    if (newSize <= 100 && Number.isInteger(Number(newSize))){
        cells.innerHTML = createGrid(newSize);
        changeCellColor();
    } else {
        alert("Invalid. Must be a whole number and no greater than 100.");
    }

});

changeCellColor();
function setGrid(gridSize) {
    const gridContainer = document.querySelector('#grid-container');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        const height = 100 / gridSize;
        row.style = 'height: ' + height + '%;';
        gridContainer.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

function draw(color) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style = "background-color: " + color;
        });
    });
}

function resetGrid() {
    const gridContainer = document.querySelector('#grid-container');
    const rows = document.querySelectorAll('.row');
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
    rows.forEach((row) => {
        gridContainer.removeChild(row);
    });
}

const btn = document.querySelector('.grid-size-btn');
btn.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Enter a number between 1 and 100 to set the grid size."));
    while (isNaN(gridSize)) {
        gridSize = parseInt(prompt("INVALID INPUT!\nEnter a number between 1 and 100 to set the grid size."));
        if (!isNaN(gridSize)) {
            if (gridSize < 1 || gridSize > 100) {
                gridSize = NaN;
            }
        }
    }
    resetGrid();
    setGrid(gridSize);
    draw("black;");

    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        resetGrid();
        setGrid(gridSize);
        draw("black;");
    });

    const drawBtn = document.querySelector('.draw-btn');
    drawBtn.addEventListener('click', () => {
        draw("black;");
    })

    const eraseBtn = document.querySelector('.erase-btn');
    eraseBtn.addEventListener('click', () => {
        draw("white;")
    })
});
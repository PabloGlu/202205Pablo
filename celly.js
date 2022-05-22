function makeArray(colums, rows) {
    let arr = new Array(colums);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows) 
    }
    return arr;
}
let grid;
let colums;
let rows;

function build() {
    grid = makeArray(colums, rows);
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = Math.floor(Math.random(2));
        }
    } 
}

function setup() {
    let next = makeArray(colums, rows);
    let state = grid[i][j]
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j]
        }
    }


let neighbors = countNeighbors(grid, i, j);

if (state == 0 && neighbors == 3) {
    next[i][j] = 1;
} else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
    next[i][j] = 0;
} else {
    next[i][j] = state;
}
grid = next;
}

function countNeighbors(grid, x, y) {
    let sum = 0
    for (let i = -1; i < 2; i ++) {
        for (let j = -1; j < 2; j++) {

            let col = (x + i + colums) % colums;
            let row = (y + j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
} 
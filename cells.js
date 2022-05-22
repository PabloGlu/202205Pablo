function makeArray(colums, rows) {
    let arr = new Array(colums);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows); 
    }
    return arr;
}
let grid;
let colums;
let rows;
let resolution = 20;
//fill the rows and colums with a random number 0 to 1
function build() {
    createCanvas(600, 400)
    colums = width / resolution;
    rows = height / resolution;
    grid = makeArray(colums, rows);
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = Math.floor(Math.random(2));
        }
    } 
}
//see colors
function draw() {
    background(0);

    
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255); 
                stroke(0);
            }
            rectangle(x, y, resolution - 1, resolution -1);   
        }
    }
    let next = makeArray(colums, rows);

    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            //edges
            //if (i == 0 || i == colums - 1 || j == 0 || j == rows - 1) {
            //    next[i][j] = state;
            //} else {

            //count neighbors
            let sum = 0;
            let neighbors = countNeighbors(grid, i, j);

            

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }

            //sum += grid[i - 1][j];
            //sum += grid[i - 1][j - 1];
            //sum += grid[i - 1][j + 1];
            //sum += grid[i + 1][j];
            //sum += grid[i][j + 1];
            //sum += grid[i][j - 1];
            //sum += grid[i + 1][j + 1];
            //sum += grid[i + 1][j - 1];
        }
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
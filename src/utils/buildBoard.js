function buildEmptyBoard(n, m){
    let emptyBoard = [];
    for (let i = 0; i < n; i++){
        let rowI = [];
        for (let j= 0; j < m; j++){
            rowI.push({
                count: 0,
                isMined: false,
                isRevealed: false,
                isFlagged: false,
                x: i,
                y: j,
                content: '',
            });
        }
    emptyBoard.push(rowI);
    }
    return emptyBoard;
}

// util function for generating random integer values
function getRandomInt(min = 0,  max){
    return Math.floor (Math.random() * (max+min) + min ); // the max is exclusive and the min is inclusive
}

function layMines(board, n, m, minesNum){
    let k = 0;
    while (k < minesNum){
        let i = getRandomInt(0, n-1);
        let j = getRandomInt(0, m-1);
        if (board[i][j].isMined === false){// no mine
            board[i][j].isMined = true;
            k++;
        } 
    }
    return;
}

function updateCount(board, n, m, minesNum){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (board[i][j].isMined === true){ // cell is mined
                continue;
            }
            
            // if cell is not mined, we will count the mines around it

            //top left
            if (i > 0 && j > 0 && (board[i-1][j-1].isMined)){
                board[i][j].count++;
            }

            //top
            if (i > 0 && (board[i-1][j].isMined)){
                board[i][j].count++;
            }

            //top right
            if (i > 0 && j < (m-1) && (board[i-1][j+1].isMined)){
                board[i][j].count++;
            }

            // left
            if (j > 0 && (board[i][j-1].isMined)){
                board[i][j].count++;
            }

            //right
            if (j < (m-1) && (board[i][j+1].isMined)){
                board[i][j].count++;
            }

            //bottom left
            if (i < (n-1) && j > 0 && (board[i+1][j-1].isMined)){
                board[i][j].count++;
            }

            //bottom
            if (i < (n-1) && (board[i+1][j].isMined)){
                board[i][j].count++;
            }

            //bottom right
            if (i < (n-1) && j < (m-1) && (board[i+1][j+1].isMined)){
                board[i][j].count++;
            }
    
        }
    }


    return;
}


export function buildBoard(n, m, minesNum){
    let board = buildEmptyBoard(n,m);
    layMines(board, n, m, minesNum);
    updateCount(board, n, m, minesNum);
    return board;
}

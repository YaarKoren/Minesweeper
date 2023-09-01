export function revealNumber(board, n, m, x, y){
    let arr = [];
    arr.unshift( [x,y] ); // add to the start of an array

    while (arr.length > 0 ) {
        let i = arr[0][0];
        let j = arr[0][1];
       
        /*
        //illegal indices - already checked
        if (i<0 || i>(n-1) || j<0 || j>(m-1)){ 
            arr.shift();
        }
        */

        //legal indices
                                       
            
            board[i][j].isRevealed = true;      //should use useState?
            board[i][j].content = board[i][j].count;
            arr.shift(); // remove the first element of an array
            
            if (board[i][j].count === 0 ) {
            //insert all 8 surrounding (i,j) if indices are legal + not in the array + not flagged + not revealed   

                //top left
                if ((i-1)>=0 && (i-1)<n && (j-1)>=0 && (j-1)<m) { //legal index
                    if (!arr.includes([i-1, j-1]) && !board[i-1][j-1].isFlagged && !board[i-1][j-1].isRevealed){
                        arr.push([i-1, j-1]);
                    }
                }

                //top
                if ((i-1)>=0 && (i-1)<n && (j)>=0 && (j)<m) { //legal index
                    if (!arr.includes([i-1, j]) && !board[i-1][j].isFlagged && !board[i-1][j].isRevealed){
                        arr.push([i-1, j]);
                    }
                }
                
                //top right
                if ((i-1)>=0 && (i-1)<n && (j+1)>=0 && (j+1)<m) { //legal index
                    if (!arr.includes([i-1, j+1]) && !board[i-1][j+1].isFlagged && !board[i-1][j+1].isRevealed){
                        arr.push([i-1, j+1]);
                    }
                }

                //left
                if ((i)>=0 && (i)<n && (j-1)>=0 && (j-1)<m) { //legal index
                    if (!arr.includes([i, j-1]) && !board[i][j-1].isFlagged && !board[i][j-1].isRevealed){
                        arr.push([i, j-1]);
                    }
                }

                //right
                if ((i)>=0 && (i)<n && (j+1)>=0 && (j+1)<m) { //legal index
                    if (!arr.includes([i, j+1]) && !board[i][j+1].isFlagged && !board[i][j+1].isRevealed){
                        arr.push([i, j+1]);
                    }
                }

                //bottom left
                if ((i+1)>=0 && (i+1)<n && (j-1)>=0 && (j-1)<m) { //legal index
                    if (!arr.includes([i+1, j-1]) && !board[i+1][j-1].isFlagged && !board[i+1][j-1].isRevealed){
                        arr.push([i+1, j-1]);
                    }
                }

                //bottom
                if ((i+1)>=0 && (i+1)<n && (j)>=0 && (j)<m) { //legal index
                    if (!arr.includes([i+1, j]) && !board[i+1][j].isFlagged && !board[i+1][j].isRevealed){
                        arr.push([i+1, j]);
                    }
                }

                //bottom right
                if ((i+1)>=0 && (i+1)<n && (j+1)>=0 && (j+1)<m) { //legal index
                    if (!arr.includes([i+1, j+1]) && !board[i+1][j+1].isFlagged && !board[i+1][j+1].isRevealed){
                        arr.push([i+1, j+1]);
                    }
                }



        }

    }
}

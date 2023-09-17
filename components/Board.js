import '../styles.css';
import Square from './Square';
import MinesCounter from './MinesCounter';
import { buildBoard } from '../utils/buildBoard';
import { revealNumber } from '../utils/revealNumber';
import { useState, useEffect } from 'react';

export default function Board( {onGameOver, n, m, minesNum, setIsAfterFirstClick} ) {

const initialBoard = buildBoard(n, m, minesNum);
    
const [board, setBoard] = useState(initialBoard);

const [minesLeft, setMinesLeft] = useState(minesNum);



useEffect(() => {
  setBoard(initialBoard); 
  setMinesLeft(minesNum); 
}, [n, m, minesNum]);

//reveal
function onLeftClick(x, y){

  setIsAfterFirstClick(true);

  //if flagged - nothing happens. the user must remove the flag first, by right click.

  //if revealed - nothing happens.

  //if not flagged and not revealed:
  
  setBoard( (prevBoard) => {
    let newBoard = prevBoard.map((row) => [...row]); // Create a shallow copy of the board

    if (!prevBoard[x][y].isRevealed && !prevBoard[x][y].isFlagged){
      
      //if it's a mine - game over
      if (prevBoard[x][y].isMined) {
        newBoard[x][y] = { ...newBoard[x][y], isRevealed: true, content: "💣" };
          onGameOver(true);
      }

      //if it's not a mine
      else{
              revealNumber(prevBoard, n, m, x, y);
              newBoard = prevBoard
      }
    }
 
     
    

      return newBoard;
  });


    return;
   
}


//put flag
function onRightClick(e, x, y) {
    e.preventDefault();
    let minusMine = 0;

    setIsAfterFirstClick(true);

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]); // Create a shallow copy of the board
      
      // if not flagged, and not revealed yet, and minesLeft>0 : put flag
      if (!prevBoard[x][y].isFlagged && !prevBoard[x][y].isRevealed && minesLeft>0) {
        newBoard[x][y] = { ...newBoard[x][y], isFlagged: true, content: "🚩" };
        minusMine = 1;
      }

      // if flagged : remove the flag
      if (prevBoard[x][y].isFlagged) {
        newBoard[x][y] = { ...newBoard[x][y], isFlagged: false, content: "" };
        minusMine = 2;
      }
  
      return newBoard;
    });

    setMinesLeft((num) => {
      if (minusMine===1){
        num--;
      }
      else if (minusMine===2){
        num++;
      }
    return num;
    });
  }

return (
    <main>
      <MinesCounter minesLeft={minesLeft} ></MinesCounter >
    <h1>{'\n'}</h1>
    <div>
       {board.map((row, rowIndex) => (
            <div className='board-row' key={rowIndex}>
            {row.map((item, itemIndex) => (
             <button
                key={`${item.x}-${item.y}`}
                className='square'
                onContextMenu={(e) => onRightClick(e, item.x, item.y)}
                onClick={() => onLeftClick(item.x, item.y)}
                >
                {item.content}
             </button>
            ))}
            </div>
        ))}
      </div>
    </main>
);


    
}
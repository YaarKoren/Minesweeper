import { useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import MinesCounter from './components/MinesCounter';
import SizeSelector from './components/SizeSelector';
import './styles.css';
import Stopwatch from './components/Stopwatch';

export default function App() {

  // [n, m , minesNumber]
  const Beginner = [9, 9, 10];
  const Intermediate = [16, 16, 40];
  const Expert = [16, 30, 99];
  
  const [gameOver, setGameOver] = useState(false);

  const [size, setSize] = useState(Beginner); //defualt size

  const [isStopWatchRunning, setIsStopWatchRunning] = useState(false); //will be true when the player click the first click (left or right)

  function gameOverHandler(){
    setGameOver(true);
    setIsStopWatchRunning(false);
  }

  function  sizeSelectHandler(e){
    if (e.value ==="Beginner"){
      setSize(Beginner);
    }
    if (e.value==="Intermediate"){
      setSize(Intermediate);
    }
    if (e.value==="Expert"){
      setSize(Expert);
    }
  }


  return (
    <>
    <h1>Welcome to minesweeper</h1>
    <Stopwatch isRunning={isStopWatchRunning}/>
    {gameOver ? <h2>Game Over!</h2> : null }
    <Board 
    onGameOver={gameOverHandler} 
    n={size[0]} m={size[1]} minesNum={size[2]}
    setIsAfterFirstClick={setIsStopWatchRunning}
    >

    </Board>
    <SizeSelector onSizeSelect={sizeSelectHandler}/>
    </>
  );

}
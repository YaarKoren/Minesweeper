import { useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import MinesCounter from './components/MinesCounter';
import SizeSelector from './components/SizeSelector';
import './styles.css';

export default function App() {

  const [gameOver, setGameOver] = useState(false);

  const Beginner = [9, 9, 10];
  const Intermediate = [16, 16, 40];
  const Expert = [16, 30, 99];

  const [size, setSize] = useState(Beginner); //defualt size


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
    
    {gameOver ? <h2>Game Over!</h2> : null }
    <Board onGameOver={setGameOver} n={size[0]} m={size[1]} minesNum={size[2]}></Board>
    <SizeSelector onSizeSelect={sizeSelectHandler}/>
    </>
  );

}
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import MinesCounter from './components/MinesCounter';
import './styles.css';

export default function App() {

  const [gameOver, setGameOver] = useState(false);


  return (
    <>
    <h1>Welcome to minesweeper</h1>
    {gameOver ? <h2>Game Over!</h2> : null }
    <Board onGameOver={setGameOver}></Board>
    </>
  );

}
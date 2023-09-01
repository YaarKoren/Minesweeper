import '../styles.css';

export default function Square( {count, isMined, isFlagged, isRevealed, x, y, onLeftClick, onRightClick, squareContent} ) {



  
  return (
    <button 
    className="square" 
    onContextMenu={(e) => onRightClick(e)}
    onClick = {onLeftClick}
    >
      {squareContent}
    </button>
  );
}
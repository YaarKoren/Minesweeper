import '../styles.css';
import { useState, useEffect } from 'react';

export default function MinesCounter( {minesLeft} ) {

    return (
        <button> #💣:{minesLeft} </button> 

      );

    
}
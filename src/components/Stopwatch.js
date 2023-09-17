import React, { useState, useEffect } from "react";

function Stopwatch( {isRunning} ){

    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);


    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;
    
    return (
        <button> 
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
        </button> 
    ) ;

}


export default Stopwatch;

import React, { useState } from "react";
import "./Greetings";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

// Trois états utilisés dans le composant StopWatch.

// time : Il mémorise le temps écoulé depuis que vous avez appuyé sur start.
// isActive: Il indique si le chronomètre est en état actif ( c’est-à -dire qu’il est en cours d’exécution ou qu’il est en pause).
// isPaused : Indique si le chronomètre est en état actif et en pause ou non.

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <div className="h-[75vh] w-[23vw] bg-[#0d0c1b] text-white flex flex-col items-center justify-between">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;
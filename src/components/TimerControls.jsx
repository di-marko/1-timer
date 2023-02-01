import React, { useContext } from 'react';
import { TimerContext } from './TimerProvider';

function TimerControls() {
  const { isRunning, startTimer, stopTimer, resetTimer } = useContext(TimerContext);

  return (
    <div className="timer-controls">
      {isRunning ? (
        <button className="timer-controls-button" onClick={stopTimer}>
          Stop
        </button>
      ) : (
        <button className="timer-controls-button" onClick={startTimer}>
          Start
        </button>
      )}
      <button className="timer-controls-button" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default TimerControls;

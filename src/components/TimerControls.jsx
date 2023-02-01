// src/components/TimerControls.js
import React, { useContext } from 'react';
import { TimerContext } from './TimerProvider';

function TimerControls() {
  const { isRunning, startTimer, stopTimer } = useContext(TimerContext);

  return (
    <div className="timer-controls">
      <button className="timer-controls-button" onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default TimerControls;

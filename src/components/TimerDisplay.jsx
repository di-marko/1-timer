import React, { useContext } from 'react';
import { TimerContext } from './TimerProvider';

function TimerDisplay() {
  const { time } = useContext(TimerContext);

  return (
    <div className="timer-display">
      <div className="timer-display-time">{time}</div>
      <div className="timer-display-label">Seconds</div>
    </div>
  );
}

export default TimerDisplay;

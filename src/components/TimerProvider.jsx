// src/components/TimerProvider.js
import React, { useState, useEffect, createContext } from 'react';

export const TimerContext = createContext();

function TimerProvider(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        isRunning,
        startTimer,
        stopTimer,
        time,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;

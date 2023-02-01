import React, { useState, useEffect, createContext } from 'react';

export const TimerContext = createContext();

function TimerProvider(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
        if (countdown > 0 && time >= countdown) {
          clearInterval(intervalId);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time, countdown]);

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
        setCountdown,
        countdown,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;

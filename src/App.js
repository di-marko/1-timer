import React from 'react';
import TimerProvider from './components/TimerProvider';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {
  return (
    <TimerProvider>
      <TimerDisplay />
      <TimerControls />
    </TimerProvider>
  );
}

export default App;

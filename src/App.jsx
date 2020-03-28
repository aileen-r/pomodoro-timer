import React from 'react';
import Timer from './components/Timer';
import SessionControl from './components/SessionControl';
import './App.css';

const App = () => (
  <div className="App">
    <main className="App-container">
      <h1>Pomodoro Timer</h1>
      <SessionControl initialVal={25} type="focus" />
      <SessionControl initialVal={5} type="break" />
      <Timer />
    </main>
  </div>
);

export default App;

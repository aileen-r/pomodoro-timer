import React from 'react';
import SessionControl from './components/SessionControl';
import './App.css';

const App = () => (
  <div className="App">
    <main className="App-container">
      <h1>
        Hello tomatoes!{' '}
        <span role="img" aria-label="tomato">
          🍅
        </span>
      </h1>
      <SessionControl initialVal={25} type="focus"/>
      <SessionControl initialVal={5} type="break"/>
    </main>
  </div>
);

export default App;

import React, { useEffect, useLayoutEffect } from 'react';
import logo from './assets/react.svg';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = React.useState("#1abc9c")

  const handleMakeTurquoise = () => {
    setBackgroundColor("#1abc9c")
  }

  const handleMakeRed = () => {
    setBackgroundColor("#e74c3c")
  }

  const handleMakeYellow = () => {
    setBackgroundColor("#f1c40f")
  }

  useEffect(() => {
    console.log("Effect called");
  });

  useLayoutEffect(() => {
    console.log("Layout called");
  });
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>Current color: {backgroundColor}</span>
        <div className="btn-group-colors">
          <button onClick={handleMakeTurquoise}>Turquoise</button>
          <button onClick={handleMakeRed}>Red</button>
          <button onClick={handleMakeYellow}>Yellow</button>
        </div>
      </header>
    </div>
  );
}

export default App;
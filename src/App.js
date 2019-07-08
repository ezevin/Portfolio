import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Elizabeth Zevin
          </p>
        <p> Timeline</p>
          <ul>
            <li> website title</li>
            <li> website video</li>
            <li> link to site</li>
            <li> link to read-me</li>
            <li> reviews</li>
          </ul>
        </header>
      </div>
  );
}

export default App;

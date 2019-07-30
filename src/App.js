import React from 'react';
import logo from './logo.svg';
import './App.css';

import TitleContainer from './Containers/TitleContainer'
import Timeline from './Containers/Timeline'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="border">
    <NavBar />
      <div className="scroll">
        <TitleContainer />
        <div className="divider"></div>
        <Timeline />
      </div>
    </div>
  );
}

export default App;

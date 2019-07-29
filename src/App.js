import React from 'react';
import logo from './logo.svg';
import './App.css';

import TitleContainer from './Containers/TitleContainer'
import Timeline from './Containers/Timeline'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="border">
      <div className="">
        <NavBar />
        <TitleContainer />
        <Timeline />
      </div>
    </div>
  );
}

export default App;

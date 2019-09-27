import React from 'react';

import './App.css';
import Timeline from './Containers/Timeline'
import NavBar from './Components/NavBar'
// import Resume from './Containers/Resume'
import IconBar from './Components/IconBar'


function App() {
  return (
    <div className="border">
    <NavBar />
    <IconBar />
    <Timeline />
    </div>
  );
}

export default App;

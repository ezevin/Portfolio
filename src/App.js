import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Timeline from './Containers/Timeline'
import NavBar from './Components/NavBar'
import Resume from './Containers/Resume'
import IconBar from './Components/IconBar'


function App() {
  return (
    <div className="border">
    <NavBar />
    <IconBar />
      <div className="scroll">
        <Route exact path="/" component={Timeline} />
        <Route exact path="/home" component={Timeline} />
        <Route exact path="/resume" component={Resume} />
        </div>
    </div>
  );
}

export default App;

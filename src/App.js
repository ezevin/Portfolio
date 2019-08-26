import React from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import TitleContainer from './Containers/TitleContainer'
import Timeline from './Containers/Timeline'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import News from './Containers/News'
import Contact from './Containers/Contact'
import Resume from './Containers/Resume'


function App() {
  return (
    <div className="border">
    <NavBar />
      <div className="scroll">
        <TitleContainer />
        <Route path="/home" component={Timeline} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </div>
    <Footer />
    </div>
  );
}

export default App;
// <Timeline />

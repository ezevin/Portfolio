import React, { Component } from 'react'

import TitleContainer from './TitleContainer'
import FabFolio from "../Components/FabFolio"
import Bookwyrm from "../Components/Bookwyrm"
import PawfectMatch from "../Components/PawfectMatch"
import AboutMe from "../Components/AboutMe"
import Resume from "./Resume"
import TimelineCSS from "../CSS/TimelineCSS.css"

class Timeline extends Component{
  render (){

    return(
      <>
        <TitleContainer />
        <div className="divider"></div>
        <div className="timelinecontainer">
        <div className="shiftRight">
        <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view?usp=sharing" target="_blank" rel="noopener noreferrer">PDF RESUME</a>
        </div>
          <center>
            <span className="timelineHeader"> Timeline </span>
            <br /><br />
          </center>
            <div className="timeline look">
            <FabFolio />
            <Bookwyrm />
            <PawfectMatch />
            <br />
            </div>
            </div>
            <div className="divider"></div>
            <Resume />
      </>
    )
  }
}

export default Timeline

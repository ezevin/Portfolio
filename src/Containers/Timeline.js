import React, { Component } from 'react'

import TitleContainer from './TitleContainer'
import FabFolio from "../Components/FabFolio"
import Bookwyrm from "../Components/Bookwyrm"
import PawfectMatch from "../Components/PawfectMatch"

class Timeline extends Component{
  render (){

    return(
      <>
        <TitleContainer />
        <div className="divider"></div>
        <div className="timelinecontainer">
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
      </>
    )
  }
}

export default Timeline

// <div class="header">
// <div class="progress-container">
// <div class="progress-bar" id="myBar">
// </div>
// </div>
// </div>

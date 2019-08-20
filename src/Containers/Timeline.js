import React, { Component } from 'react'

import FabFolio from "../Components/FabFolio"
import Bookwyrm from "../Components/Bookwyrm"
import PawfectMatch from "../Components/PawfectMatch"

class Timeline extends Component{
  render (){

    return(
      <>
        <div className="divider"></div>
        <div className="look timelinecontainer">
          <center>
            <h1> Timeline </h1>
          </center>
            <div className="timeline look">
            <FabFolio />
            <Bookwyrm />
            <PawfectMatch />
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

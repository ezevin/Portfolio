import React, { Component } from 'react'

import FabFolio from "../Components/FabFolio"
import Bookwyrm from "../Components/Bookwyrm"

class Timeline extends Component{
  render (){

    return(
      <div className="look timelinecontainer">
        <center>
          <h1> Timeline </h1>
        </center>
          <div class="timeline look">
            <div class="header">
              <div class="progress-container">
                <div class="progress-bar" id="myBar">
                </div>
              </div>
            </div>
          <FabFolio />
          <Bookwyrm />
            <div class="container right">
              <div class="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Timeline

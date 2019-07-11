import React, { Component } from 'react'


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
            <div class="container left">
              <div class="content">
                <h2>June 2019</h2>
                <h3>
                  <a href="https://fabfolio.herokuapp.com/">
                  FabFolio
                  </a><br />
                  <a href="https://github.com/ezevin/Project-tracker-frontend-2">
                  GitHub Front End
                  </a>
                </h3>
                <p>A project tracking app for the Freelance Artisan. It is a way for the artisan to track the materials they have in stock, as well as the projects they are working on. While tracking their projects they can also track notes, to-do-lists, process photos, materials used and research photos. Once a project is completed it can then be added to their Final Projects Portfolio</p>
              </div>
            </div>
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

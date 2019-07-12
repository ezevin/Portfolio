import React, { Component } from 'react'

class Bookwrym extends Component{
  render (){

    return(
      <div className="container right ">
        <div className="flip-card look">
          <div className="content">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2>June 2019</h2>
                <h3>
                  <a href="https://fabfolio.herokuapp.com/">
                  Bookwrym
                  </a><br />
                  <a href="https://github.com/ezevin/Project-tracker-frontend-2">
                  GitHub Front End
                  </a>
                </h3>
              </div>
              <div className="flip-card-back">
                <p>A project tracking app for the Freelance Artisan. It is a way for the artisan to track the materials they have in stock, as well as the projects they are working on. While tracking their projects they can also track notes, to-do-lists, process photos, materials used and research photos. Once a project is completed it can then be added to their Final Projects Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bookwrym

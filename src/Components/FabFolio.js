import React, { Component } from 'react'

class FabFolio extends Component{
  render (){

    return(
      <div className="container left ">
        <div className="flip-card look">
          <div className="content">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="img" src="https://keep.google.com/u/0/media/v2/1IF7wCjnJCVH9HFrXUbazHMHrd2Q6xPIY5sjaKF8Y_iMxrYF0gZKzvxCpEoua3g/1DJcI9P8ibu0pU6wml8vaOqGlrVitATw5xeKp3DCyUbmz7eGOVeGjV3l-oLaI?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=1441" alt="Avatar"  />
              </div>
              <div className="flip-card-back">
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
          </div>
        </div>
      </div>
    )
  }
}
export default FabFolio

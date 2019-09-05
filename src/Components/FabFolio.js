import React, { Component } from 'react'

import Fabfolio from "../assets/Fabfolio.png"

class FabFolio extends Component{
  render (){

    return(
      <div className="container left ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src={Fabfolio} alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>
                <a href="https://fabfolio.herokuapp.com/">
                FabFolio (June 2019)
                </a><br />
                <a href="https://github.com/ezevin/Project-tracker-frontend-2">
                GitHub Front End
                </a>
                </h3>
                <span className="backTag">A Fabricators Portfolio</span><br />
                <p className="backtext">A project tracking app for the Freelance Artisan. It is a way for the artisan to track the materials they have in stock, as well as the projects they are working on. While tracking their projects they can also track notes, to-do-lists, process photos, materials used and research photos. Once a project is completed it can then be added to their Final Projects Portfolio.</p>
                <div className="backFacts">
                Built With:
                <ul>
                  <li>Developed a Ruby on Rails API backend with endpoints for users, projects and materials</li>
                  <li>Implemented User Interface employing React.js with Semantic-React and Custom CSS for styling</li>
                  <li>Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</li>
                  <li>Adapted Cloudinary to upload images to page from computer files</li></ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FabFolio

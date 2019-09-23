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
              <a href="https://fabfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="backTitle">
                  FabFolio (June 2019)
                </div>
              </a>
              <div className="mobileHide">
                <div className="backTitle">
                  <a href="https://github.com/ezevin/Project-tracker-frontend-2" target="_blank" rel="noopener noreferrer">
                    GitHub Front End
                    <p className="mobileHide"> || </p>
                  </a>
                  <a href="https://github.com/ezevin/project-tracker-backend-2" target="_blank" rel="noopener noreferrer">
                    GitHub Back End
                  </a>
                </div>
                </div>
                <div className="mobileShow backTitle">
                  <a href="https://github.com/ezevin/Project-tracker-frontend-2" target="_blank" rel="noopener noreferrer">
                    GitHub Front End
                  </a>
                </div>
                <div className="mobileShow backTitle">
                  <a href="https://github.com/ezevin/project-tracker-backend-2" target="_blank" rel="noopener noreferrer">
                    GitHub Back End
                  </a>
                </div>
                <br />
                <span className="backTag">A Fabricators Portfolio</span>
                <p className="backtext">A project tracking app for the Freelance Artisan. It is a way for the artisan to track the materials they have in stock, as well as the projects they are working on. While tracking their projects they can also track notes, to-do-lists, process photos, materials used and research photos. Once a project is completed it can then be added to their Final Projects Portfolio.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FabFolio

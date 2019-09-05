import React, { Component } from 'react'

import Pawfect from "../assets/Pawfect.png"

class PawfectMatch extends Component{
  render (){

    return(
      <div className="container left ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src={Pawfect} alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>
                <a href="https://pawfect-match.herokuapp.com">
                PawfectMatch (April 2019)
                </a><br />
                <a href="https://github.com/ezevin/pawfect_match">
                GitHub
                </a>
                </h3>
                <span className="backTag">Social media/Dating app for the household pet, built in collaboration with <a href="https://github.com/danielmartin0126">Danny Martin</a></span><br />
                <p className="backtext look">Pawfect Match is a dating app for your pet. It allows your pet to go "walking with" or "sniff out" other pets of interest.</p>
              <div className="backFacts">
              Built With:
              <ul>
                <li>Developed using Ruby on Rails MVC for Frontend and Backend</li>
                <li>User login using sessions/cookies</li>
                <li>Applied bcrypt authentication for secure user login</li>
                <li>Bootstrap was employed to help style CSS</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PawfectMatch

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
                <p className="backtext look">Pawfect Match is a dating app for your pet. It allows your pet to go "walking with" or "sniff out" other pets of interest.</p>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
export default PawfectMatch

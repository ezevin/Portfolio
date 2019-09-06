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
                  <a href="https://pawfect-match.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <div className="backTitle">
                      PawfectMatch (April 2019)
                    </div>
                  </a>
                  <div className="backTitle">
                    <a href="https://github.com/ezevin/pawfect_match" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                  <br />
                <div className="backTag">       Social media/Dating app for the household pet, built in collaboration with</div> <a href="https://github.com/danielmartin0126" target="_blank" rel="noopener noreferrer" className="backTag">Danny Martin</a>
                <p className="backtext look">Pawfect Match is a dating app for your pet. It allows your pet to go "walking with" or "sniff out" other pets of interest.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PawfectMatch

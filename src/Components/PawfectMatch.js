import React, { Component } from 'react'

class PawfectMatch extends Component{
  render (){

    return(
      <div className="container left ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68943454_10162181779480322_5964619988185645056_o.jpg?_nc_cat=111&_nc_oc=AQlAcgDikwhAsKc6xgcppIRBZvkHSW32krJ5Z01CWcpBptLFZ8ZZ6QqLfpNnLNH0zmI&_nc_ht=scontent-lga3-1.xx&oh=2e2a091644dd946b6703da05bb5f6e97&oe=5DD57793" alt="Avatar"  />
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

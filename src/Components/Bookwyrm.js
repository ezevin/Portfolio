import React, { Component } from 'react'

class Bookwrym extends Component{
  render (){

    return(
      <div className="container right ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src="https://lh3.googleusercontent.com/2_Yp1xF7G6zQbeYkiqUP6ENrV1jEez4Squrj_rS9vEm7MqPLvIb5JDPl31oe04CUl7Mkp7OMVrTQNNWs06Hc6e0x268hrKM0Xpn9aclQ" alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>Bookwyrm (May 2019)
                <br />
                <a href="https://github.com/ezevin/BookWyrm">
                GitHub
                </a>
                </h3>
                <p className="backtext look">Bookwyrm is an online personal library tracker. Where you can check books in and out of your own personal library.</p>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Bookwrym

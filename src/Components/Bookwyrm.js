import React, { Component } from 'react'

import Book from "../assets/Book.png"

class Bookwrym extends Component{
  render (){

    return(
      <div className="container right ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src={Book} alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>Bookwyrm (May 2019)
                <br />
                <a href="https://github.com/ezevin/BookWyrm">
                GitHub
                </a>
                </h3>
                <span className="backTag">A personal library tracking app</span><br />
                <p className="backtext look">Bookwyrm is an online personal library tracker. Where you can check books in and out of your own personal library.</p>
                <div className="backFacts">
                Built With:
                <ul>
                  <li>Developed a Rails API backend with endpoints for users, libraries and books</li>
                  <li>Implemented User Interface employing React.js with Semantic-React and Custom CSS for styling</li>
                  <li>Utilized JSON Web Tokens and localStorage to store encrypted user information client-side</li>
                </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bookwrym

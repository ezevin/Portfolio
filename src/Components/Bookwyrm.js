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
                <div className="noLink">Bookwyrm (May 2019)</div>
                <a href="https://github.com/ezevin/BookWyrm" target="_blank" rel="noopener noreferrer">
                  <div className="noLink">
                  GitHub
                  </div>
                </a>
                <br />
                <span className="backTag">A personal library tracking app</span>
                <p className="backtext look">Bookwyrm is an online personal library tracker. Where you can check books in and out of your own personal library.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bookwrym

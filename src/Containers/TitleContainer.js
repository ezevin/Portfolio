import React, { Component } from 'react'

import Profile from "../assets/Profile.jpg"

class TitleContainer extends Component{
  render (){

    return(
      <div className="title">
        <center>
          <img className="responsive profileimg" src={Profile} alt="Avatar"  />
          <br />
          <br />
          <span className="headText"> Elizabeth Zevin </span>
          <div className="text">
            <p>
            Full Stack Web Developer 
            </p>
            <center>
            <p>
            <a href="mailto:ehzevin@gmail.com">ehzevin@gmail.com</a>
            </p>
            <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://github.com/ezevin" className="fa fa-github " target="_blank" rel="noopener noreferrer"></a>
            <a href="mailto:ehzevin@gmail.com" className="fa fa-envelope"></a>
            <a href="tel:1-914-417-1789" className="fa fa-phone"></a>
            </center>
          </div>
        </center>
      </div>
    )
  }
}

export default TitleContainer

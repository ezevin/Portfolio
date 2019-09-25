import React, { Component } from 'react'

import Profile from "../assets/Profile.jpg"

class AboutMe extends Component{
  render (){

    return(
      <div className="aboutMe">
        <center>
          <img className="responsive profileimg" src={Profile} alt="Avatar"  />
            <br />
            <br />
        </center>

        <div className="headText">
          Elizabeth Zevin
        </div>
        <br />
        <div className="text">
         Full Stack Web Developer
         <br />
         <center>
          <a href="https://www.linkedin.com/in/elizabethzevin/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href="mailto:ehzevin@gmail.com">
            <i className="fa fa-envelope" />
          </a>
          <a href="tel:1-914-417-1789">
            <i className="fa fa-phone" />
          </a>
        </center>
      </div>
    </div>
    )
  }
}

export default AboutMe

import React, { Component } from 'react'

import Profile from "../assets/Profile.jpg"

class TitleContainer extends Component{
  render (){

    return(
      <div className="title">
        <center>
          <br />
          <img className="responsive profileimg" src={Profile} alt="Avatar"  />
          <br />
          <br />
          <span className="headText"> Elizabeth Zevin </span>
          <div className="text">
            <p>
            Full stack web developer with a passion for creativity and critical thinking with experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems.
            Previous experience includes technical entertainment/theater and special effects/pyrotechnics. I pursued web development for the stimulating challenge and the joy of magically transforming visions to reality that it provides.
            </p>
            <center>
            <p>
            <a href="mailto:ehzevin@gmail.com">ehzevin@gmail.com</a>
            </p>
            <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin"></a>
            <a href="https://github.com/ezevin" className="fa fa-github "></a>
            <a href="mailto:ehzevin@gmail.com" className="fa fa-envelope"></a>
            </center>
          </div>
        </center>
      </div>
    )
  }
}

export default TitleContainer

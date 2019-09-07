import React, { Component } from 'react'

import Profile from "../assets/Profile.jpg"

class TitleContainer extends Component{
  render (){

    return(
      <>
      <div className="title ">
        <center>
          <br />
          <img className="responsive profileimg" src={Profile} alt="Avatar"  />
          <br />
          <br />
          <div className="headText"> Elizabeth Zevin </div><br />
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
        </center>
      </div>
  <div class="box-slide">
     <div class="reveal-content">
       <p className="bioText">Full Stack Web Developer with a passion for creativity and critical thinking with experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems.
       Previous experience includes technical entertainment/theater and special effects/pyrotechnics. Pursued web development for the stimulating challenge and the joy of magically transforming visions to reality that it provides.</p>
     </div>
    <div class="reveal-top">
      <div class="reveal-content caption">
        <h1>Hover me</h1>
      </div>
    </div>
  </div>
</>
    )
  }
}

export default TitleContainer

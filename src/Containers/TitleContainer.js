import React, { Component } from 'react'

import AboutMe from "../Components/AboutMe"

class TitleContainer extends Component{
  render (){

    return(
      <>
        <div className="box-slide">
          <div className="mobileHide">
            <div className="reveal-content">
             <div className="aboutgrid">
               <AboutMe />
               <div className="bioText">
                <h3>About Elizabeth:</h3>
                Full Stack Web Developer with a passion for creativity and critical thinking with experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems. <br /><br />
                Previous experience includes technical entertainment/ theater and special effects/ pyrotechnics. Pursued web development for the stimulating challenge and the joy of magically transforming visions to reality that it provides.
               </div>
             </div>
            </div>
            <div className="reveal-top">
            </div>
          </div>


      <div className="mobileShow">
         <div className="reveal-content bioText">
          <h3>About Elizabeth:</h3>
          Full Stack Web Developer with a passion for creativity and critical thinking with experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems. <br /><br />
          Previous experience includes technical entertainment/ theater and special effects/ pyrotechnics. Pursued web development for the stimulating challenge and the joy of magically transforming visions to reality that it provides.
         </div>
        <div className="reveal-top">
          <div >
            <AboutMe />
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default TitleContainer

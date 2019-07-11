import React, { Component } from 'react'

class TitleContainer extends Component{
  render (){

    return(
      <div className="look title">
        <center>
          <img className="profileimg" src="https://media.licdn.com/dms/image/C4D03AQHtZveBewmpKQ/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=O0cD11-g5vCxXs_UYg-QWAz5ucseKy8IssCkFGqoptY" alt="Avatar"  />
          <h1> Elizabeth Zevin </h1>
          <p>
            Full Stack web developer with a passion for creativity and critical thinking and experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems. Previous experience includes technical entertainment/theater and special effects/pyrotechnics. I pursued web development for the stimulating challenge it provides.
          </p>
        </center>
      </div>
    )
  }
}

export default TitleContainer

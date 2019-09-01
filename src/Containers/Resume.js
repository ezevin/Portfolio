import React, { Component } from 'react'

class Resume extends Component{
  render (){

    return(
      <>
      <br />
      <br />
      <br />
      <div>
        <center>
          <span>
            <span className="titleName">
              Elizabeth Zevin
            </span>
            <br />
            <a href="tel:1-914-417-1789" className="bodyText">1-914-417-1789 </a>
            |<a href="mailto:ehzevin@gmail.com" className="bodyText"> ehzevin@gmail.com </a>
            <span className="bodyText">| FDNY COF E-27</span>
            <br />
            <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer" className="bodyText">https://github.com/ezevin</a> | <a href="https://medium.com/@ehzevin" target="string.new" className="bodyText">Medium Blog</a> | <a href="https://www.elizabethzevin.com/" target="_blank" rel="noopener noreferrer" className="bodyText">Theatrical Portfolio</a>
          </span>
        </center>
        <br />
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view" target="_blank" rel="noopener noreferrer">pdf version</a>
        </div>
        <br />
        <div className="text">
          <span className="bodyHeader">Technical Skills:</span>
            <div className="grid bodyText">
                <div><li>Ruby (on Rails)</li></div>
                <div><li>HTML/CSS</li></div>
                <div><li>SQL</li></div>
                <div><li>JavaScript ES6</li></div>
                <div><li>React.js</li></div>
                <div><li>Semantic UI</li></div>
                <div><li>Bootstrap</li></div>
                <div><li>Heroku</li></div>
                <div><li>Git</li></div>
                <div><li>AutoCAD</li></div>
                <div><li>Photoshop</li></div>
                <div><li>Microsoft Office</li></div>
            </div>
          <span className="bodyHeader">Employment History:</span>
          <br />
          <br />
          <div>
            <span className="bold indent">
              Freelance Pyrotechnician, New York City, New York
              <br />
              Pyrotechnician, Fall 2016 - Present
              <br />
            </span>
            <span className="italics">
              Signature Theater, Playwrights Horizons, Forged In Fire  (Television)
            </span>
            <span className="bodyText">
            <br />
              +Responsible for lead set up and running effects for multiple productions
            <br />
              +Worked to maintain sustainability and reusability of effects
            <br />
              +Monitored fire and pyrotechnics on stage and set
            <br />
              +Maintained OSHA and FDNY safety standards for both actors and crew
            <br /><br />
            </span>
            <span className="bold">
              Prop n Spoon, Rahway, New Jersey
              Props Artisan, Fall 2018
            </span>
            <br />
            <span className="bodyText">
              +Researched props and scenic elements for commercials, theater, film
              <br />
              +Built and painted props and scenic elements for commercials, theater, film
            </span>
            <br /> <br />
            <span className="bold">
              J&M Special Effects, Brooklyn, New York
              <br />
              FX Technician, 2016 - 2018
            </span>
            <br />
            <span className="bodyText">
              +Created special effects for commercials, theater, film, television, print ads
              <br />
              +Lead confetti, pyrotechnics, wind, water, fire, snow, and blood effects
              <br />
              +Repaired, maintained, and procured equipment used to create special effects
              <br />
            </span>
          </div>
          <br />
          <span className="bodyHeader">Education:</span>
          <br />
          <br />
          <div>
            <span className="bold">
              Flatiron School - New York, NY - March 2019 - June, 2019
            </span>
            <br />
            <span className="bodyText">
              +Full Stack Web Development, Ruby on Rails, JavaScript, React.js
            </span>
            <br /> <br />
            <span className="bold">
              Yale School of Drama - New Haven, CT - Class of 2012
            </span>
            <br />
            <span className="bodyText">
              +Technical Internship Certificate
              <br />
              +Properties Internship Certificate
            </span>
            <br /> <br />
            <span className="bold">
              Emerson College - Boston, MA - Class of 2011
            </span>
            <br />
            <span className="bodyText">
              +B.F.A. Design Technology for Theater (Cum Laude)
            </span>
            <br /><br /><br />
          </div>
        </div>
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view" target="_blank" rel="noopener noreferrer">pdf version</a>
          <br /><br /><br />
        </div>
      </div>
      </>
    )
  }
}

export default Resume

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
          <span className="resumeHead">Skills and Experience</span>
          <br />
          <br />
          <br />
          <span>
            <span className="titleName">
              Elizabeth Zevin
            </span>
            <br />
            <a href="tel:1-914-417-1789">1-914-417-1789 </a>
            |<a href="mailto:ehzevin@gmail.com"> ehzevin@gmail.com </a>
            | FDNY COF E-27
            <br />
            <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">https://github.com/ezevin</a> | <a href="https://medium.com/@ehzevin" target="string.new">Medium Blog</a> | <a href="https://www.elizabethzevin.com/" target="_blank" rel="noopener noreferrer">Theatrical Portfolio</a>
          </span>
        </center>
        <br />
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view" target="_blank" rel="noopener noreferrer">pdf version</a>
        </div>
        <br />
        <div className="text">
          <span className="bodyHeader">Technical Skills:</span>
            <ul>
              <div className="grid bodyText">
                <div>
                  <li>Ruby (on Rails)</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                  <li>JavaScript ES6</li>
                </div>
                <div>
                  <li>React.js</li>
                  <li>Semantic UI</li>
                  <li>Bootstrap</li>
                  <li>Heroku</li>
                </div>
                <div>
                  <li>Git</li>
                  <li>AutoCAD</li>
                  <li>Photoshop</li>
                  <li>Microsoft Office</li>
                </div>
              </div>
          </ul>
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

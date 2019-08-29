import React, { Component } from 'react'

class Resume extends Component{
  render (){

    return(
      <>
      <div>
        <center>
          <h1 id="resume">Skills and Experience</h1>
          <h2>
            Elizabeth Zevin
            <br />
            914-417-1789 | ehzevin@gmail.com | FDNY COF E-27
            <br />
            https://github.com/ezevin | Medium Blog | Theatrical Portfolio
          </h2>
        </center>
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view" target="_blank" rel="noopener noreferrer">pdf version</a>
        </div>
        <div className="text">
          <h2>Technical Skills:</h2>
            <ul>
              <div className="grid">
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
          <h2>Employment History:</h2>
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
            <br />
              +Responsible for lead set up and running effects for multiple productions
            <br />
              +Worked to maintain sustainability and reusability of effects
            <br />
              +Monitored fire and pyrotechnics on stage and set
            <br />
              +Maintained OSHA and FDNY safety standards for both actors and crew
            <br /><br />
            <span className="bold">
              Prop n Spoon, Rahway, New Jersey
              Props Artisan, Fall 2018
            </span>
            <br />
              +Researched props and scenic elements for commercials, theater, film
              <br />
              +Built and painted props and scenic elements for commercials, theater, film
            <br /> <br />
            <span className="bold">
              J&M Special Effects, Brooklyn, New York
              <br />
              FX Technician, 2016 - 2018
            </span>
            <br />
              +Created special effects for commercials, theater, film, television, print ads
              <br />
              +Lead confetti, pyrotechnics, wind, water, fire, snow, and blood effects
              <br />
              +Repaired, maintained, and procured equipment used to create special effects
              <br />
          </div>
          <h2>Education:</h2>
          <div>
            <span className="bold">
              Flatiron School - New York, NY - March 2019 - June, 2019
            </span>
            <br />
              +Full Stack Web Development, Ruby on Rails, JavaScript, React.js
            <br /> <br />
            <span className="bold">
              Yale School of Drama - New Haven, CT - Class of 2012
            </span>
            <br />
              +Technical Internship Certificate
              <br />
              +Properties Internship Certificate
            <br /> <br />
            <span className="bold">
              Emerson College - Boston, MA - Class of 2011
            </span>
            <br />
              +B.F.A. Design Technology for Theater (Cum Laude)
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

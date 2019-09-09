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
          <div className="bio">
            Full Stack Web Developer with a passion for creativity and critical thinking with experience in Ruby on Rails, JavaScript, and React.js. Skilled at team-building, project management, and finding creative solutions to complex problems.
            Previous experience includes technical entertainment/theater and special effects/pyrotechnics. Pursued web development for the stimulating challenge and the joy of magically transforming visions to reality that it provides.
          </div>
          <br />
          <br />
          <br />
          <span className="titleName ">
            Skills and Experience
          </span>
        </center>
        <br />
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view?usp=sharing" target="_blank" rel="noopener noreferrer">pdf version</a>
        </div>
        <br />
        <div>
          <span className="bodyHeader">Technical Skills:</span>
          <br /><br />
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
            <br />
          <span className="bodyHeader">Technical Projects</span>
          <br />
          <br />
          <div className="resumeText">
            <div className="bold">
              FabFolio (June 2019)  <span></span>
            </div>
            <div className="italics">
              A Fabricators Portfolio
            </div>
            <div className="bodyText">
              +Developed a Ruby on Rails API backend with endpoints for users, projects and materials
            <br />
              +Implemented User Interface employing React.js with Semantic-React and Custom CSS for styling
            <br />
              +Utilized JSON Web Tokens and localStorage to store encrypted user information client-side
            <br />
              +Adapted Cloudinary to upload images to page from computer files
            </div>
            <a href="https://github.com/ezevin/Project-tracker-frontend-2" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            GitHub Front End <p className="mobileHide"> | </p>
            </a>
            <div className="mobileShow"></div>
            <a href="https://github.com/ezevin/project-tracker-backend-2" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            GitHub Back End <p className="mobileHide"> | </p>
            </a>
            <div className="mobileShow"></div>
            <a href="https://fabfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            https://fabfolio.herokuapp.com/
            </a>
            <br /> <br />
            <div className="bold">
              Bookwyrm (May 2019)  <span></span>
            </div>
            <div className="italics">
              A personal library tracking app
            </div>
            <div className="bodyText">
              +Developed a Rails API backend with endpoints for users, libraries and books
            <br />
              +Implemented User Interface employing React.js with Semantic-React and Custom CSS for styling
            <br />
              +Utilized JSON Web Tokens and localStorage to store encrypted user information client-side
            </div>
            <a href="https://github.com/ezevin/BookWyrm" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            GitHub
            </a>
            <br /> <br />
            <div className="bold">
              PawfectMatch (April 2019) <span></span>
            </div>
            <div className="italics">
              Social media/Dating app for the household pet, built in collaboration with <a href="https://github.com/danielmartin0126" target="_blank" rel="noopener noreferrer">Danny Martin</a>
            </div>
            <div className="bodyText">
              +Developed using Ruby on Rails MVC for Frontend and Backend
            <br />
              +User login using sessions/cookies
            <br />
              +Applied bcrypt authentication for secure user login
            <br />
              +Bootstrap was employed to help style CSS
            </div>
            <a href="https://github.com/ezevin/pawfect_match" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            GitHub<p className="mobileHide"> | </p>
            </a>
            <div className="mobileShow"></div>
            <a href="https://pawfect-match.herokuapp.com" target="_blank" rel="noopener noreferrer" className="resumeLinks">
            https://pawfect-match.herokuapp.com
            </a>
            <br />
          </div>
          <br />
          <br />
          <span className="bodyHeader">Employment History:</span>
          <br />
          <br />
          <div className="resumeText">
            <div className="bold mobileHide">
              Freelance Pyrotechnician, New York City, New York
              <br />
              Pyrotechnician, Fall 2016 - Present
            </div>
            <div className="bold mobileShow">
              Freelance Pyrotechnician
                <br />
              Title: Pyrotechnician
                <br />
              Fall 2016 - Present
                <br />
              New York City, New York
                <br /><br />
              Locations:
            </div>
            <div className="italics">
              Signature Theater, Playwrights Horizons, Forged In Fire  (Television)
            </div>
            <div className="bodyText">
              +Responsible for lead set up and running effects for multiple productions
            <br />
              +Worked to maintain sustainability and reusability of effects
            <br />
              +Monitored fire and pyrotechnics on stage and set
            <br />
              +Maintained OSHA and FDNY safety standards for both actors and crew
            </div><br />
            <div className="bold mobileHide">
              Prop n Spoon, Rahway, New Jersey
              <br />
              Props Artisan, Fall 2018
            </div>
            <div className="bold mobileShow">
              Prop n Spoon
                <br />
              Title: Props Artisan
                <br />
              Fall 2018
                <br />
              Rahway, New Jersey
                <br />
            </div>
            <div className="bodyText">
              +Researched props and scenic elements for commercials, theater, film
              <br />
              +Built and painted props and scenic elements for commercials, theater, film
            </div>
            <br />
            <div className="bold mobileHide">
              J&M Special Effects, Brooklyn, New York
              <br />
              FX Technician, 2016 - 2018
            </div>
            <div className="bold mobileShow">
              J&M Special Effects
                <br />
              Title: FX Technician
                <br />
              2016 - 2018
                <br />
              Brooklyn, New York
            </div>
            <div className="bodyText">
              +Created special effects for commercials, theater, film, television, print ads
              <br />
              +Lead confetti, pyrotechnics, wind, water, fire, snow, and blood effects
              <br />
              +Repaired, maintained, and procured equipment used to create special effects
              <br />
            </div>
          </div>
          <br />
          <span className="bodyHeader">Education:</span>
          <br />
          <br />
          <div className="resumeText">
            <div className="bold mobileHide">
              Flatiron School - New York, NY - March 2019 - June, 2019
            </div>
            <div className="bold mobileShow">
              Flatiron School
                <br />
              March 2019 - June, 2019
                <br />
              New York, NY
            </div>
            <div className="bodyText">
              +Full Stack Web Development, Ruby on Rails, JavaScript, React.js
            </div><br />
            <div className="bold mobileHide">
              Yale School of Drama - New Haven, CT - Class of 2014
            </div>
            <div className="bold mobileShow">
              Yale School of Drama
                <br />
              Class of 2014
                <br />
              New Haven, CT
            </div>
            <div className="bodyText">
              +Technical Internship Certificate
              <br />
              +Properties Internship Certificate
            </div><br />
            <div className="bold mobileHide">
              Emerson College - Boston, MA - Class of 2011
            </div>
            <div className="bold mobileShow">
              Emerson College
                <br />
              Class of 2011
                <br />
              Boston, MA
            </div>
            <div className="bodyText">
              +B.F.A. Design Technology for Theater (Cum Laude)
            </div>
          </div>
          <br />
          <span className="bodyHeader">Certifications:</span>
          <br />
          <div className="resumeText">
            <p className="bodyText">
              <li>FDNY Certificate of Fitness Class C E-27 - Pyrotechnics</li>
            </p>
          </div>
          <div>
          </div>
          <br /><br /><br />
        </div>
        <div className="shiftRight">
          <a href="https://drive.google.com/file/d/0Bzo7b51IJkBOOUVrSm1VNGZGVWRCajRXeUxnR09DOFNBYkJn/view?usp=sharing" target="_blank" rel="noopener noreferrer">pdf version</a>
          <br /><br /><br />
        </div>
      </div>
      </>
    )
  }
}

export default Resume

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component{
  handleResponse() {
  const top = document.getElementById("myTopnav");
  if (top.className === "topnav") {
    top.className += " responsive";
  } else {
    top.className = "topnav";
  }
}
  render (){
    return (
      <>
        <div className="topnav" id="myTopnav">
          <a href="https://medium.com/@ehzevin" target="string.new" className="navBarLink">Blog</a>
          <a href="https://www.elizabethzevin.com/" target="_blank" rel="noopener noreferrer" className="navBarLink">Theatre</a>
          <a href="https://www.etsy.com/shop/CraftandEffect" target="_blank" rel="noopener noreferrer" className="navBarLink">Etsy</a>
          <a  className="icon" onClick={this.handleResponse}>&#9776;</a>
          <div className="mobileHide navIcon" >
          <a href="https://www.linkedin.com/in/elizabethzevin/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin mobileHide" />
            <p className="mobileShow "> <i className="fa fa-linkedin"/>
              <span className="navLogo">  LinkedIn </span>
            </p>
          </a>
          <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github mobileHide" />
            <p className="mobileShow "> <i className="fa fa-github"/>
              <span className="navLogo"> GitHub </span>
            </p>
          </a>
          <a href="mailto:ehzevin@gmail.com">
            <i className="fa fa-envelope mobileHide"/>
            <p className="mobileShow "> <i className="fa fa-envelope"/>
              <span className="navLogo"> Gmail </span>
            </p>
          </a>
          <a href="tel:1-914-417-1789">
           <i className="fa fa-phone mobileHide" />
           <p className="mobileShow "> <i className="fa fa-phone"/>
            <span className="navLogo"> Phone Number </span>
           </p>
          </a>
          </div>
        </div>
      </>
    )
  }
}
export default NavBar;

// <li><Link to="/News" className="navBarLink">News</Link></li>
// <Link to="/Resume" className="navBarLink">Resume</Link>

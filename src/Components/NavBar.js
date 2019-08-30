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
          <Link to="/home" className="active">Home</Link>
          <Link to="/Resume" className="navBarLink">Resume</Link>
          <a href="https://medium.com/@ehzevin" target="string.new" className="navBarLink">Blog</a>
          <a href="https://www.elizabethzevin.com/" target="_blank" rel="noopener noreferrer" className="navBarLink">Theatre</a>
          <a href="https://www.etsy.com/shop/CraftandEffect" target="_blank" rel="noopener noreferrer" className="navBarLink">Etsy</a>
          <a  class="icon" onClick={this.handleResponse}>&#9776;</a>
          <a href="https://www.linkedin.com/in/elizabethzevin/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin mobileHide" />
            <p className="mobileShow"> <i className="fa fa-linkedin"/>  LinkedIn</p>
          </a>
          <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github mobileHide" />
            <p className="mobileShow"> <i className="fa fa-github"/>  GitHub</p>
          </a>
          <a href="mailto:ehzevin@gmail.com">
            <i className="fa fa-envelope mobileHide"/>
            <p className="mobileShow"> <i className="fa fa-envelope"/>  Gmail</p>
          </a>
        </div>
      </>
    )
  }
}
export default NavBar;

// <Link to="/Contact" className="navBarLink">Contact</Link>
// <li><Link to="/News" className="navBarLink">News</Link></li>

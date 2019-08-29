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
          <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin active" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/ezevin" className="fa fa-github active" target="_blank" rel="noopener noreferrer"></a>
          <a href="mailto:ehzevin@gmail.com" className="fa fa-envelope active"></a>
        </div>
      </>
    )
  }
}
export default NavBar;

// <Link to="/Contact" className="navBarLink">Contact</Link>
// <li><Link to="/News" className="navBarLink">News</Link></li>

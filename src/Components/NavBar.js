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
          <Link to="/Contact" className="navBarLink">Contact</Link>
          <a href="https://www.elizabethzevin.com/" target="_blank" rel="noopener noreferrer" className="navBarLink">Theatre</a>
          <a href="https://www.etsy.com/shop/CraftandEffect" target="_blank" rel="noopener noreferrer" className="navBarLink">Etsy</a>
          <a  class="icon" onClick={this.handleResponse}>&#9776;</a>
          <span>
          <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin active"></a>
          <a href="https://github.com/ezevin" className="fa fa-github active"></a>
          <a href="Gmail" className="fa fa-google active"></a>
          <a href="link" className="fa fa-facebook active"></a>
          <a href="link" className="fa fa-instagram active" float="right"></a>
          </span>
          </div>
      </>
    )
  }
}
export default NavBar;

// <li><Link to="/News" className="navBarLink">News</Link></li>

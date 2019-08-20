import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component{
  render (){
    return (
      <>
        <ul className="topnav">
          <li className="navbarlist"><Link to="/home">Home</Link></li>
          <li><a href="https://www.elizabethzevin.com/" target="_blank">Theatre</a></li>
          <li><i className="fab fa-linkedin"></i></li>
          <li></li>
        </ul>
      </>
    )
  }
}
export default NavBar;
// <li><Link to="/News">News</Link></li>
// <li><Link to="/Resume">Resume</Link></li>
// <li><a href="https://medium.com/@ehzevin" target="string.new">Blog</a></li>

// <li><Link to="/Contact">Contact</Link></li>

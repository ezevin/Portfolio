import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component{
  render (){
    return (
      <>
        <ul className="topnav">
          <li className="navbarlist"><Link to="/home">Home</Link></li>
          <li><Link to="/News">News</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Resume">Resume</Link></li>
          <button>linkedin</button>
        </ul>
      </>
    )
  }
}
export default NavBar;

import React, { Component } from 'react'

class NavBar extends Component{
  render (){
    return (
      <>
      <ul className="navbartop look">
        <li className="navbarlist"><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      </>
    )
  }
}
export default NavBar;

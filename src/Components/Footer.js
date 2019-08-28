import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component{
  render (){
    return (
      <>
          <span>
          <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin active"></a>
          <a href="https://github.com/ezevin" className="fa fa-github active"></a>
          <a href="mailto:ehzevin@gmail.com" className="fa fa-google active"></a>
          </span>
      </>
    )
  }
}
export default Footer;

// <li><Link to="/News" className="navBarLink">News</Link></li>

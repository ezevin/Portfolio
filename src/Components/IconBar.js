import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class IconBar extends Component{

  render (){
    return (
      <>
        <br /><br />
        <div class="icon-bar">
          <a href="https://www.linkedin.com/in/elizabethzevin/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href="mailto:ehzevin@gmail.com">
            <i className="fa fa-envelope" />
          </a>
        </div>
      </>
    )
  }
}
export default IconBar;

import React, { Component } from 'react'

import "../CSS/SocialMedia.css"

class IconBar extends Component{

  render (){
    return (
        <div className="icon-bar">
          <a href="https://www.linkedin.com/in/elizabethzevin/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/ezevin" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href="mailto:ehzevin@gmail.com">
            <i className="fa fa-envelope" />
          </a>
          <a href="tel:1-914-417-1789">
            <i className="fa fa-phone" />
          </a>
        </div>
    )
  }
}
export default IconBar;

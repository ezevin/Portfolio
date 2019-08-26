import React, { Component } from 'react'

class Contact extends Component{
  render (){

    return(
      <>
      <div className="divider"></div>
      <div>
        <center>
          <h1>Contact</h1>
          <p>
            <a href="https://www.linkedin.com/in/elizabethzevin/" className="fa fa-linkedin"></a>
            <a href="https://www.linkedin.com/in/elizabethzevin/">LinkedIn</a><br />
            <a href="https://github.com/ezevin" className="fa fa-github"></a>
            <a href="https://github.com/ezevin">GitHub</a><br />
            <a href="link" className="fa fa-google"></a>
            <a href="link">Gmail</a><br />
            <a href="link" class="fa fa-facebook"></a>
            <a href="link">Facebook</a><br />
            <a href="link" class="fa fa-instagram"></a>
            <a href="">Instagram</a><br />
          </p>
        </center>
      </div>
      </>
    )
  }
}

export default Contact

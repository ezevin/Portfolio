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
            <a href="" className="fa fa-google"></a>
            <a href="">Gmail</a><br />
            <a href="#" class="fa fa-facebook"></a>
            <a href="">Facebook</a><br />
            <a href="#" class="fa fa-instagram"></a>
            <a href="">Instagram</a><br />
          </p>
        </center>
      </div>
      </>
    )
  }
}

export default Contact

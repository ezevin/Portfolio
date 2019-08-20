import React, { Component } from 'react'

class Bookwrym extends Component{
  render (){

    return(
      <div className="container right ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68669578_10162181793655322_2950477485348749312_n.jpg?_nc_cat=109&_nc_oc=AQnhG7UrDl1m-X1EcxUomx8bBBr0X1qk5IOLxgbRH2hvVv5QlM8tivcN9qJD2Kr1LkA&_nc_ht=scontent-lga3-1.xx&oh=33620d165cb5a93b8cba44ff396df039&oe=5DCDC25D" alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>Bookwyrm (May 2019)
                <br />
                <a href="https://github.com/ezevin/BookWyrm">
                GitHub
                </a>
                </h3>
                <p className="backtext look">Bookwyrm is an online personal library tracker. Where you can check books in and out of your own personal library.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bookwrym

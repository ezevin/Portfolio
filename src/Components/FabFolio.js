import React, { Component } from 'react'

class FabFolio extends Component{
  render (){

    return(
      <div className="container left ">
        <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="imgcard" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/69259232_10162181772585322_8478469277156900864_o.jpg?_nc_cat=111&_nc_oc=AQlsiyFp2b7-aR5FbT75UWjkx8rcOlLCLU_KIpVx5t5k5uVjNh-jAgkTDo9AhjTO_9I&_nc_ht=scontent-lga3-1.xx&oh=1d9182fd1ec9ff7e84087edcc00fcc0e&oe=5DD1BCC9" alt="Avatar"  />
              </div>
              <div className="flip-card-back">
                <h3>
                <a href="https://fabfolio.herokuapp.com/">
                FabFolio (June 2019)
                </a><br />
                <a href="https://github.com/ezevin/Project-tracker-frontend-2">
                GitHub Front End
                </a>
                </h3>
                <p className="backtext look">A project tracking app for the Freelance Artisan. It is a way for the artisan to track the materials they have in stock, as well as the projects they are working on. While tracking their projects they can also track notes, to-do-lists, process photos, materials used and research photos. Once a project is completed it can then be added to their Final Projects Portfolio</p>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
export default FabFolio

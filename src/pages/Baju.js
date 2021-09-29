import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import baju1Img from '../assets/img/baju1.png'
import baju2Img from '../assets/img/baju2.png'
import '../assets/css/baju.css'
import Footer from '../component/Footer'


function Baju() {
    return (
        <div>
             <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
      <div className="text-center">
            <div className="row">
              <div className="col-md-6 ml-5" >   
              <img className="my-baju1" src={baju1Img}  className="img-fluid"  className="rounded float-start" alt="profile-pic justify-content-center"/>
              <p>
              ARZENA SHIRT
              <br></br>
              RP. 139.000
              </p>
              </div>

             <div className="col-md-6 ml-5" >
              <img className="my-baju2" src={baju2Img}  className="img-fluid"  className="rounded float-end" alt="profile-pic justify-content-center"/>
              <p>
              ALISYAH TUNIK
              <br></br>
              RP. 129.000
                  </p>
              </div>
              </div>
         </div>
      </div>
    </div>
    <Footer/>
    </div>
    )
}

export default Baju

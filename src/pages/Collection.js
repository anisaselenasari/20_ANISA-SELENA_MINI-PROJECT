import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import foto from '../assets/img/foto.png'
import tunik from '../assets/img/tunik.png'
import tops from '../assets/img/tops.png'
import outher from '../assets/img/outher.png'
import celana from '../assets/img/celana.png'

function Collection() {
    return (
        <div>
    <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-1">
          <div className="row mb-5"></div>
        </div>
        <div className="row">
        <div className="col-md-6 ">
              <img className="my-img" src={foto} alt="profile-pic justify-content-center" />
            </div>
            <div className="col-md-6">
            Your place to find perfect everyday shirt! Selling since 2009, we are totally trusted!!!

Sekarang kamu bisa belanja shirt dari House of Selendang dimanapun dan kapanpun. Cek katalog terbaru kami dan langsunsung check out.

Happy Shopping Shopadict
              </div>
              <div className="container">
              {/* <div className="row"> */}
              <div className="col-md-3 ">  
              <NavLink
                exact
                to=""
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                  <img className="my-img" src={tunik} alt="profile-pic justify-content-center" />
              </NavLink> 
              
              <div className="col-md-3 ">  
              <NavLink
                exact
                to=""
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <img className="my-img" src={tops} alt="profile-pic justify-content-center" />
              </NavLink> 

              <div className="col-md-3 ">   
              <NavLink
                exact
                to=""
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                   <img className="my-img" src={outher} alt="profile-pic justify-content-center" />
               </NavLink> 
             
              <div className="col-md-3 ">   
              <NavLink
                exact
                to=""
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
              <img className="my-img" src={celana} alt="profile-pic justify-content-center" />
              </NavLink> 
              </div>
              </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        // </div>
    )
}

export default Collection

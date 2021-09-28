import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import model from '../assets/img/Foto layar utama.png'
import '../assets/css/home.css'
import footer from '../assets/img/Component 13.png'

function Home() {
    return (
            <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-1">
          <div className="row mb-5">
            {/* <p className="timestamp">{timestamp}</p> */}
          </div>
          <div className="row">
            <div className="col-md-8 ">
              <img className="my-img" src={model} alt="profile-pic justify-content-center" />
            </div>
            <div className="col-md-4">
              </div>
            <div className="my-img2" src={footer} alt="profile-pic justify-content-center"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home

import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import foto from '../assets/img/foto.png'
import tunik from '../assets/img/tunik.png'
import tops from '../assets/img/tops.png'
import outher from '../assets/img/outher.png'
import celana from '../assets/img/celana.png'
import '../assets/css/collection.css'
import Footer from '../component/Footer'




function Collection() {
  

    return (
        <div>
    <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
      

        <div className="container row" >
        <div className="col-md-6 ">
          <br></br>
          <br></br>
          <br></br>
        <div className="container"></div> 
        <p style={{textAlign: "justify"}}>
        Your place to find perfect everyday shirt! Selling since 2009, we are totally trusted!!!
        <div className="container"></div>
            <br></br>
            
            Sekarang kamu bisa belanja shirt dari House of Selendang dimanapun dan kapanpun.
            <div className="container"></div>
            <br></br>

            Cek katalog terbaru kami dan langsung check out.
            <div className="container"></div>
            <br></br>
            Happy Shopping Shopadict
            </p>
              </div>
              

            <div className="col-md-6">
            <br></br>
            <img 
            className="img-fluid" 
              className="my-gambar" 
              src={foto} 
              alt="profile-pic justify-content-center" 
              />
            </div>
           
            </div>
        </div>

              <div className="container row">
               
             
                <div className="col-md-3 ">  
                <NavLink
                exact
                to="/Baju/tunik"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                  <img 
                  className="my-img1" 
                  src={tunik} 
                  alt="profile-pic justify-content-center" />
                  <h6 style={{color: "black", textAlign: "center"}}>TUNIK </h6>
              </NavLink> 
              </div>

             
              <div className="col-md-3 ">  
              <NavLink
                exact
                to="/Baju"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <img 
              className="my-img2" 
              src={tops} 
              alt="profile-pic justify-content-center" />
              <h6 style={{color: "black", textAlign: "center"}}>TOPS </h6>
              </NavLink> 
              </div>

              <div className="col-md-3 ">   
              <NavLink
                exact
                to="/Baju"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                   <img 
                   className="my-img3" 
                   src={outher} 
                   alt="profile-pic justify-content-center" />
                   <h6 style={{color: "black", textAlign: "center"}}>OUTHER </h6>
               </NavLink> 
               </div>

               {/* {(data.Produk)} */}
              <div className="col-md-3 ">   
              <NavLink
              
                exact 
                to="/Baju"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
              <img 
              className="my-img4" 
              src={celana} 
              alt="profile-pic justify-content-center" />
              <h6 style={{color: "black", textAlign: "center"}}>BUTTOMS </h6>
              </NavLink> 
              </div>
             
              </div>
        </div>
        <Footer/>
    </div>
    


    )
}

export default Collection

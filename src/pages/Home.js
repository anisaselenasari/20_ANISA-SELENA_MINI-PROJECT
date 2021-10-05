import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import model from '../assets/img/layarutama.png'
import '../assets/css/home.css'
import pengirimanImg from '../assets/img/return.png'
import payImg from '../assets/img/pay.png'
import mobilImg from '../assets/img/mobil.png'
import garansiImg from '../assets/img/garansi.png'
import { Height } from '@material-ui/icons'


function Home() {
    return (
       <div>  
      <Navbar />
      <div id="my-content">

      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-1">
          <div className="row mb-5">
            
          </div>
          <div className="text-center">
          <img style={{paddingBottom: "80px"}}
          className="my-img" 
          src={model} 
          className="img-fluid"  
          className="rounded" 
          alt="profile-pic justify-content-center"/>
            </div>
            
              <div className="row" >
              <div className="col-md-6 d-flex" >   
              {/* baris ke 27 yg ada ml tuh buat ngasih jarak */}
              <img 
              className="my-return" 
              src={pengirimanImg} 
              alt="profile-pic justify-content-center"/>
              <h6 style={{paddingLeft: "30px", }}>
              2 Days Return
              Salah pilih ukuran atau warna ? Tenang bisa
              return. Batas 2 hari setelah barang diterima
              </h6>
              </div>

             <div className="col-md-6 d-flex">
              <img 
             
              className="my-pay" 
              src={payImg} 
              alt="profile-pic justify-content-center"/>
              <h6 style={{paddingLeft: "30px", }}>
              Easy Payment Methods
              Transfer Bank, Tunai Alfamart, Ovo, Dana,
                Shopeepay
                  </h6>
              </div>
              </div>
              
              <br></br>
              <br></br>
              <div className="row">
              <div className="col-md-6 d-flex">
              <img 
              className="my-garansi" 
              src={garansiImg} 
              alt="profile-pic justify-content-center"/>
              <h6 style={{paddingLeft: "30px", }}>
              Garansi
              Pesananmu defect atau tidak sesuai ? Tenang, kami akan ganti
                  </h6>
              </div>

              <div className="col-md-6 d-flex">
              <img 
              className="my-mobil" 
              src={mobilImg} 
              alt="profile-pic justify-content-center"/>
              <h6 style={{paddingLeft: "30px", }}>
              Fast Shipping 
              Payment sebelum jam 3 sore, akan kami kirim di hari yang sama 
                  </h6>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Home

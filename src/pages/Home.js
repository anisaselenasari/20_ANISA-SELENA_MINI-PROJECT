import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import model from '../assets/img/layarutama.png'
import '../assets/css/home.css'
import pengirimanImg from '../assets/img/return.png'
import payImg from '../assets/img/pay.png'
import mobilImg from '../assets/img/mobil.png'
import garansiImg from '../assets/img/garansi.png'


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
          <img className="my-img" src={model} className="img-fluid"  className="rounded" alt="profile-pic justify-content-center"/>
            </div>
              <div className="row" >
              <div className="col-md-6 ml-5" >   
              {/* baris ke 27 yg ada ml tuh buat ngasih jarak */}
              <img className="my-return" src={pengirimanImg} alt="profile-pic justify-content-center"/>
              <p>
              2 Days Return
              Salah pilih ukuran atau warna ? Tenang bisa
              return. Batas 2 hari setelah barang diterima
              </p>
              </div>

             <div className="col-md-6 ml-5" >
              <img className="my-pay" src={payImg} alt="profile-pic justify-content-center"/>
              <p>
              Easy Payment Methods
              Transfer Bank, Tunai Alfamart, Ovo, Dana,
                Shopeepay
                  </p>
              </div>
              </div>

              <div className="row">
              <div className="col-md-6" >
              <img className="my-garansi" src={garansiImg} alt="profile-pic justify-content-center"/>
              <p>
              Garansi
              Pesananmu defect atau tidak sesuai ? Tenang, kami akan ganti
                  </p>
              </div>
              <div className="col-md-6" >
              <img className="my-mobil" src={mobilImg} alt="profile-pic justify-content-center"/>
              <p>
              Fast Shipping 
              Payment sebelum jam 3 sore, akan kami kirim di hari yang sama 
                  </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Home

import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import detailBajuImg from '../assets/img/baju1.png'
import { Badge } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons'
import CardContent from "@material-ui/core/CardContent";

export default function DetailBaju() {
    return (
        <div>
             <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
      <div className="container mt-1">
          <div className="row mb-5">

        <div className="row">
        <div className="col-md-6" > 
      <figure className="figure">
    <img src={detailBajuImg} className="img-fluid" className="figure-img img-fluid rounded" alt="profile-pic justify-content-center"/>
    <figcaption className="figure-caption"> <h3>ARZENA SHIRT 
        <br></br>
        RP. 139.000 </h3></figcaption>
    </figure>
      </div>
      <div className="col-md-6" > 
      <div className="container">
      <br></br>
      <br></br>
      <p>
      Arzena shirt merupakan jenis blouse yang casual look. Dengan detail cuttingan bagian leher turtle, 
      lengan bercutting loose dan sedikit oversize pada bagian dada. </p>
      
      <p> Material : Crinkle Knit stretch </p>
      
     <p> Jenis kain tebal tapi tidak kaku, walaupun memiliki tekstur crinkle yang
     timbul namun tetap halus dan lembut </p>
     
     <p>  Jenis kainnya jatuh dan adem saat dipakai</p> 
     
    <p>  Dengan jenis kain yang tidak mudah kusut sehingga lebih memudahkan dalam perawatan dan penyimpanannya </p>
    
    <p>Ukuran : All Size Fit to XL
        dengan LD 122 cm
        <br></br>
        Berat : 350g
    </p>
      </div>
      <NavLink
                exact
                to="/Login"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
      <CardContent>
      <button className="btn btn-primary" className="btn btn-outline-dark"
      type="submit">Beli Sekarang
          
          <Badge color = "primary"> 
               <ShoppingCartOutlined/>
                    </Badge>
         
                    </button>
      </CardContent>
      </NavLink> 
      
      <div className="review">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1"></input>
    
  </div>
  
  <div class="mb-3">
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Pesan Untukku</label>
</div>
</div>
  <button type="submit" style={{background: "#DCAB92"}} className="btn btn-primary">Submit</button>
</form>
      </div>
      </div>
      </div>
      </div>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}


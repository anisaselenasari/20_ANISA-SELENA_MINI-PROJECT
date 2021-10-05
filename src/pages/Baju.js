import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import baju1Img from '../assets/img/baju1.png'
import baju2Img from '../assets/img/baju2.png'
import '../assets/css/baju.css'
import Footer from '../component/Footer'
import { gql, useQuery, useLazyQuery} from '@apollo/client';
import { useEffect } from 'react'
import LoadingSvg from '../component/LoadingSvg'


function Baju(props) {
  console.log("ini props baju = ", props.match.params.id);
  const GetTodo = gql`
  query MyQuery {
    Produk {
      nama
      gambar
      harga
      is_ready
      deskripsi_Produk
      id
      id_Kategori
      Date
    }
  }  
  `
  const GetShirt = gql`
  query MyQueryCopy($id_Kategori: Int!) {
    Produk(where: {id_Kategori: {_eq: $id_Kategori}}) {
      deskripsi_Produk
      gambar
      harga
      nama
      id
      id_Kategori
    }
  }
   `
   
  
  // const { data, loading, error } = useQuery(GetTodo);
  const [getShirt, { data, loading, error }] = useLazyQuery(GetShirt);
  console.log(data);

  
  useEffect (()=>{
    getShirt({variables : {id_Kategori: props.match.params.Collection}});
    console.log("saya masuk ke get shirt");
  }, [])

  const clickImg = (elementImg) => {
    console.log("klik gambar")
  };
  {
    console.log("sebelum masuk return")
  }

  if (loading){
    return <LoadingSvg />
   }

  
    return (
        <div>
          {console.log("masuk return")}
             <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
      <div className="text-center">
            <div className="row">

            {data?.Produk.map((elementProduk)=>(
              <div className="col-md-6 ml-5" >   
              <NavLink
                exact
                to={"/DetailBaju/" + elementProduk.id}
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <img style={{width: "400px", height:"600.39px" , left: "46px", top: "186px" }}
              className="my-baju1" 
              onClick={clickImg}
              src={elementProduk.gambar}  
              className="img-fluid"  
              alt="profile-pic justify-content-center"/>
              <h5 style={{color: "black"}}>{elementProduk.nama}</h5>
              <h5 style={{color: "black"}}>{elementProduk.harga}</h5>
              <p>{elementProduk.Date}</p>
              </NavLink>
              </div>
            ))}
            

           


             {/* <div className="col-md-6 ml-5" >
             <NavLink
                exact
                to="/DetailBaju"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <img 
              className="my-baju2" 
              src={baju2Img}  
              className="img-fluid"  
              className="rounded float-end" 
              alt="profile-pic justify-content-center"/>
              <p>
              ALISYAH TUNIK
              <br></br>
              RP. 129.000
                  </p>
                  </NavLink>
              </div> */}
              </div>
         </div>
      </div>
    </div>
    <Footer/>
    </div>
    )
}

export default Baju

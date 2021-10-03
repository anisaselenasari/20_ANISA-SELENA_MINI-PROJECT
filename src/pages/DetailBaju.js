import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import detailBajuImg from '../assets/img/baju1.png'
import { Badge } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons'
import CardContent from "@material-ui/core/CardContent";
import { gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useEffect } from 'react'
import LoadingSvg from '../component/LoadingSvg'

export default function DetailBaju(props) {
  const GetTodoShirt = gql`
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
  const GetDetailShirt = gql`
   query MyQuery($id: Int!) {
    Produk(where: {id: {_eq: $id}}) {
      deskripsi_Produk
      gambar
      harga
      is_ready
      nama
      id_Kategori
      id
      Date
    }
  }
  `
  const DeleteMessage = gql`
  mutation MyMutation($id: Int!) {
    delete_Message_by_pk(id: $id) {
      id
      message
      username
    }
  }
  `
  const UpdateMessage = gql `
  mutation MyMutation($id: Int!, $message: String = "") {
    update_Message_by_pk
    (pk_columns: {id: $id},
    _set: {message: $message}) {
      id
    }
  }
  `
  const InsertMessage = gql`
  mutation MyMutation($object: Message_insert_input!) {
    insert_Message_one(object: $object) {
      id
    }
  }
  
  `
  // const { data, loading, error } = useLazyQuery(GetDetailShirt);
   const [getDetailShirt, { data, loading, error }] = useLazyQuery(GetDetailShirt);
  console.log("detail baju props", data);

  const [updateMessage, { loading:loadingUpdate}] = useMutation(UpdateMessage);

  const [deleteMessage, {loading : loadingDelete}] = useMutation(DeleteMessage,{
    refetchQueries: [GetTodoShirt]
  });
  const [insertMessage, {loading:loadingInsert}] = useMutation(InsertMessage, {
    refetchQueries: [GetTodoShirt]
  })
 

  useEffect (()=>{
    getDetailShirt({variables : {id: props.match.params.id}});
    console.log("saya masuk ke get detail shirt");
  }, [])

  if (loading || loadingUpdate || loadingDelete || loadingInsert){
    return <LoadingSvg />
   }

   const onSubmitList = (e) => {
    e.preventDefault();
    inserTodo({variables :{
      object : {
        message: message,
        id: 1
      }

      // const onDeleteItem = (idx) => {
      //   deleteMessage({variables :{
      //     id:idx
      //   }})
      // };

    return (
        <div>
           
             <Navbar />
      <div id="my-content">
      <div className="header-body d-flex justify-content-center ">
      <div className="container mt-1">
          <div className="row mb-5">

          {data?.Produk.map((elementProduk)=>(
        <div className="row">
        <div className="col-md-6" > 
      <figure className="figure">
    <img 
    src={elementProduk.gambar} 
    className="img-fluid" 
    className="figure-img img-fluid rounded" 
    alt="profile-pic justify-content-center"/>
    <figcaption className="figure-caption"> 
    <h3>{elementProduk.nama} 
        <br></br>
        {elementProduk.harga} </h3></figcaption>
    </figure>
      </div>
      <div className="col-md-6" > 
      <div className="container">
      <br></br>
      <br></br>
      <p>{elementProduk.deskripsi_Produk} </p>
      
      {/* <p>
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
    </p> */}
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
      <form onSubmit={onSubmitList}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input 
    type="text" 
    className="form-control" 
    id="exampleInputEmail1"></input>
    
  </div>
  
  <div className="mb-3">
  <div className="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Pesan Untukku</label>
</div>
</div>
  <button type="submit" style={{background: "#DCAB92"}} className="btn btn-primary">Submit</button>
</form>
      </div>
      </div>
        </div>
      ))}
      {/* <div className="review">
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
      </div> */}
      </div>
      </div>
      
        </div>
        </div>
        <Footer/>
        </div>
    )
}


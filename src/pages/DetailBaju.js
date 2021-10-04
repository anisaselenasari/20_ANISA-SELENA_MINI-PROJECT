import React from 'react'
import Navbar from './NavbarHome'
import { NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import detailBajuImg from '../assets/img/baju1.png'
import { Badge } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons'
import CardContent from "@material-ui/core/CardContent";
import { gql, useQuery, useLazyQuery, useMutation} from '@apollo/client';
import { useEffect, useState } from 'react'
import LoadingSvg from '../component/LoadingSvg'
import '../component/style.css'

export default function DetailBaju(props) {
  const GetTodo = gql`
  query MyQuery {
    Produk {
      berat
      deskripsi_Produk
      gambar
      harga
      id
      id_Kategori
      is_ready
      material
      nama
      ukuran
      Date
    }
  }
   
  `
// const GetMessage = gql`
// query MyQuery {
//   Message {
//     id
//     message
//     username
//   }
// }
// `
const GetMessage = gql`
query MyQuery {
  Message(limit: 1, order_by: {id: desc}) {
    message
    id
    username
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
      material
      ukuran
      berat
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
  mutation MyMutation2($id: Int!, $message: String = "") {
    update_Message_by_pk(pk_columns: {id: $id}, _set: {message: $message}) {
      id
      message
      username
    }
  }
  `
  const InsertMessage = gql`
  mutation MyMutation($object: Message_insert_input!) {
    insert_Message_one(object: $object) {
      id
      message
      username
    }
  }
  `

  const initialData = {    //ini buat message
    username: "",
    message: "" 
   
}
 
  
  const [getDetailShirt, { data, loading, error }] = useLazyQuery(GetDetailShirt);
  console.log("detail baju props", data);

  const { data: dataMessage, loading:loadingMessage, error:errorMessage } = useQuery(GetMessage);
  console.log("detail baju props", data);
  const [user, setUser] = useState(initialData);
  const [updateMessage, { loading:loadingUpdate}] = useMutation(UpdateMessage);
  const [deleteMessage, {loading : loadingDelete}] = useMutation(DeleteMessage,{
    refetchQueries: [GetMessage]
  });
  const [insertMessage, {loading:loadingInsert}] = useMutation(InsertMessage, {
    refetchQueries: [GetMessage]
  })
 

  useEffect (()=>{
    getDetailShirt({variables : {id: props.match.params.id}});
    console.log("saya masuk ke get detail shirt");
  }, [])

  if (loading || loadingUpdate || loadingDelete || loadingInsert){
    return <LoadingSvg />
   }


   // untuk menjalankan pas submit
   const onSubmitList = (e) => {
     console.log("masuk submit")
     e.preventDefault();
     insertMessage({variables : {
       object : {
         username: user.username,
        message: user.message
      }
     }});
     setUser(initialData)
   };


   // untuk masukkan input
   const handleInput = (e) => {
     console.log("masuk handle input")
    const name = e.target.name
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
};

// untuk delete pesan yang sudah kita tulis
const onDeleteItem =  (idx) => {
console.log("idx= detele item", idx.target.value )
  deleteMessage({variables: {
    id: idx.target.value
  }})
};

const onUpdateItem =  (idx) => {
  console.log("idx= update item", idx.target.value )
    updateMessage({variables: {
      id: idx.target.value
    }})
  };

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
      <h6>{elementProduk.nama} </h6>
      <br></br>
      <h6>{elementProduk.deskripsi_Produk} </h6>
      <br></br>
      <h6>{elementProduk.material}</h6>
      <br></br>
      <h6>{elementProduk.ukuran}</h6>
      <br></br>
      <h6>{elementProduk.berat}</h6>

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
     
      <form className="formmessage" onSubmit={onSubmitList}>
  <div class="mb-3" className="form-group">
    <label 
    for="username" 
    className="form-label">Username</label>
    <input 
    type="text" 
    className="form-control" 
    onChange={handleInput} 
    id="nama" 
    name="username" 
    value={user.username}
    placeholder="Masukkan Nama"
    ></input>   
  </div>
  
  <div className="mb-3">
  <div className="form-group">
  <label 
  for="floatingTextarea2"
  className="form-label">Pesan Untukku</label>
  <textarea 
  className="form-control" 
  onChange={handleInput} 
  name="message" 
  value={user.message} 
  rows="12"
  id="floatingTextarea2" 
  placeholder="Masukkan Pesan"
  style={{height: "100px"}}></textarea>
  {/* <label 
  for="floatingTextarea2"
  className="form-label">Pesan Untukku</label> */}
</div>

</div>
<button type="submit" style={{background: "#DCAB92"}} className="btn btn-primary">Submit</button>
</form>
      </div>   
      </div>
        </div>
      ))}
      </div>
      {dataMessage?.Message.map((show) => (
                            <li className='komen-list card-kontent mb-4'>
                              
                                  <div className="">
                                      <h5 style={{paddingLeft: "20px"}} className="card-titles ml-4 mt-3">{show.username}</h5>
                                      <p 
                                      style={{paddingRight: "100px", paddingLeft: "55px"}}
                                      className="card-text ml-4 mt-3">{show.message}</p>
                                      <button 
                                      type="submit" style={{background: "#FFDAC1"}} className="btn"
                                      onClick={onDeleteItem} value={show.id} className="del">Delete</button>
                                      <button 
                                      type="submit" style={{background: "#FFDAC1"}} className="btn"
                                      onClick={onUpdateItem} value={show.id} className="edit">Edit</button>
                                  </div>
                          </li>
                          

                        ))}
      </div>
    </div>
  </div>
  <Footer/>
</div>
    )
}


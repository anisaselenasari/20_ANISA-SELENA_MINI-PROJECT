import React from "react";
import Navbar from "./NavbarHome";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import detailBajuImg from "../assets/img/baju1.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import LoadingSvg from "../component/LoadingSvg";
import "../component/style.css";

export default function DetailBaju(props) {
  console.log("ini props di detail baju=", props);
  // const get todo untuk menampilkan semua yang telah kita buat di hasura
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
  `;

  // const getDetailshirt untuk menampilkan produk sesuai id yang sudah kita buat di arah hasura dan const ini berkaikatan dengan uselazyquery
  const GetDetailShirt = gql`
    query MyQuery($id: Int!) {
      Produk(where: { id: { _eq: $id } }) {
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
  `;
  // const get message adalah untuk menampilkan message dengan 1 kali tampilan saja. jadi message yang akan masuk ke dalam
  // database adalah message yang terakhir dibuat
  const GetMessage = gql`
    query MyQuery {
      Message(limit: 1, order_by: { id: desc }) {
        message
        id
        username
      }
    }
  `;
  // const get message untuk mendelete message yang sudah kita buat
  const DeleteMessage = gql`
    mutation MyMutation($id: Int!) {
      delete_Message_by_pk(id: $id) {
        id
        message
        username
      }
    }
  `;
  // const update message untuk mengedit message yang sudah kita buat
  // const UpdateMessage = gql `
  // mutation MyMutation2($id: Int!, $message: String = "") {
  //   update_Message_by_pk(pk_columns: {id: $id}, _set: {message: $message}) {
  //     id
  //     message
  //     username
  //   }
  // }
  // `

  const UpdateMessage = gql`
    mutation MyMutationedit($id: Int!, $message: String!) {
      update_Message(where: { id: { _eq: $id } }, _set: { message: $message }) {
        affected_rows
      }
    }
  `;

  // const insert message ini untuk memasukkan message yang kita inginkan
  const InsertMessage = gql`
    mutation MyMutation($object: Message_insert_input!) {
      insert_Message_one(object: $object) {
        id
        message
        username
      }
    }
  `;

  const [TitleStatus, setTitleStatus] = useState(false);
  const [TitleBaru, setTitleBaru] = useState("");

  const clickTitle = () => {
    console.log(" edit message");

    return setTitleStatus(!TitleStatus);
  };

  const SubmitTitle = (e, id) => {
    e.preventDefault();
    console.log("title submit yang baru=", TitleBaru);
    updateMessage({
      variables: {
        message: TitleBaru,
        id: id,
      },
    });
    setTitleBaru("");
  };

  const onEditTitle = (e) => {
    setTitleBaru(e.target.value);
    console.log("TitleBaru =", TitleBaru);
  };

  //ini buat message. const initial data disini adalah ketika kita memasukkan data, itu datanya masih kosong
  const initialData = {
    username: "",
    message: "",
  };

  const [getDetailShirt, { data, loading, error }] =
    useLazyQuery(GetDetailShirt);
  // use lazy query akan bekerja kalau dia ke trigger sesuatu. karna di gql kita menulis (id interger!) berarti use lazyquery ini akan
  // bekerja setiap ada id yang terpanggil. dan dia akan menampilkan data sesuai yang kita inginkan
  // data disini adalah database yang sudah kita buat di hasura, lalu kita ambil disini
  console.log("detail baju props", data);

  const {
    data: dataMessage,
    loading: loadingMessage,
    error: errorMessage,
  } = useQuery(GetMessage);
  // usequery itu berfungsi mengambil semua data yang kita buat di hasura tanpa harus spesifik datanya
  console.log("data message", dataMessage);

  // const setuser ini berfungsi untuk mengisi message atau merubah message. kita gunain use state. use state disini kan manggil initial data
  // initial data yang udh kita buat di baris ke 93 sampai 95 itu kan masih kosong. ketika kita gunain use state, data kosong itu akan terganti
  // atau terisi dengan apa yang kita masukkan nanti
  const [user, setUser] = useState(initialData);

  //const update message itu untuk mengedit message
  const [updateMessage, { loading: loadingUpdate }] = useMutation(
    UpdateMessage,
    {
      refetchQueries: [GetMessage],
    }
  );

  //const deletemessage itu untuk mengahpus pesan. di dalam nya terdapat {refetchQuery() adalah pemanggilan fungsi langsung.}
  // jadi refetchqueries ini akan menampilkan get message setelah delete selesai melakukan mutasi
  // tetapi karna kita disini hanya menampilkan message 1 kali, jadi ketika kita menjalankan delete, maka tampilannya akan tidak terlihat
  const [deleteMessage, { loading: loadingDelete }] = useMutation(
    DeleteMessage,
    {
      refetchQueries: [GetMessage],
    }
  );

  // const insertmessage itu untuk memasukkan pesan. di dalam nya terdapat {refetchQuery() adalah pemanggilan fungsi langsung.}
  // jadi refetchqueries ini akan menampilkan get message yg ada di baris ke 53, stelah kita menulis pesan maka
  // pesan yang akan tampil ialah hanya pesan yang terakhir. karna sudah kita setting hanya 1 kali keluaran saja
  const [insertMessage, { loading: loadingInsert }] = useMutation(
    InsertMessage,
    {
      refetchQueries: [GetMessage],
    }
  );

  // use effect ini dijalankan setelah masuk ke return. si return berjalan dlu. baru useeffect ini akan bekerja
  // disini kita memanggil const getDetailShirt yg ada di baris ke 98.
  // karna sebelumnya kita hanya ingin menampilkan berdasarkan id. maka kita tulis id: props.match.params.id
  // id adalah pemanngilan id
  // props adalah objct yg kita panggil, nah di dalam props itu terdapat params dan match
  useEffect(() => {
    getDetailShirt({ variables: { id: props.match.params.id } });
    console.log("saya masuk ke get detail shirt");
  }, []);

  // if loading untuk menampilkan animasi ketika loading
  if (loading || loadingDelete || loadingInsert) {
    return <LoadingSvg />;
  }

  // untuk menjalankan pas submit
  // preventDefault() adalah sebuah method yang berfungsi untuk mencegah terjadinya event bawaan dari sebuah DOM,
  //misalnya tag "a href" jika kita klik, maka halaman browser akan melakukan reload, atau sebuah form jika kita klik tombol
  //submit maka akan melakukan reload pula.  disini juga terdapat object. berguna untuk menjalankan baris 112
  const onSubmitList = (e) => {
    console.log("masuk submit");
    e.preventDefault();
    insertMessage({
      variables: {
        object: {
          username: user.username,
          message: user.message,
        },
      },
    });
    setUser(initialData);
  };

  // untuk masukkan input. disini kita akan spesifik untuk memasukkan input name dan value
  // set user disini adalah untuk merubah isi value nya ini
  // ...user ini fungsinya mengambil semua data yang ada di initial data
  // karna di initial data kita pangil username dan message. maka agar data kita ketindih kita gunakan baris ke 211
  const handleInput = (e) => {
    console.log("masuk handle input");
    const name = e.target.name;
    console.log("ini nama=", name);
    const value = e.target.value;
    console.log("ini value=", value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  // untuk delete pesan yang sudah kita tulis. mendelete id nya . jadi id tersebut akan terhapus semua
  const onDeleteItem = (idx) => {
    console.log("idx= detele item", idx.target.value);
    deleteMessage({
      variables: {
        id: idx.target.value,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div id="my-content">
        <div className="header-body d-flex justify-content-center ">
          <div className="container mt-1">
            <div className="row mb-5">
              {/* di baris yg berisi {data?.Produk.map((elementProduk)=>( ini mksdnya adalah 
    // data itu sebagai data yang kita punya di dalam hasura // tanda tanya disini berfungsi kek misal
    // ini data apa yang bakal kita panggil gtu. dan yg kita panggil kan .Produk. maka nanti yang akan tampil adalah data dari Produk
    //.Produk itu karna kita memanggil tabel Produk yg ada di hasura, dan yang sudah kita tulis di gql baris ke 17
    // map ini map adalah fungsi untuk mentransformasi nilai dalam suatu array / object. */}

              {data?.Produk.map((elementProduk) => (
                <div className="row">
                  <div className="col-md-6">
                    <figure className="figure">
                      <img
                        src={elementProduk.gambar}
                        className="img-fluid"
                        className="figure-img img-fluid rounded"
                        alt="profile-pic justify-content-center"
                      />
                      <figcaption className="figure-caption">
                        <h3>
                          {elementProduk.nama}
                          <br></br>
                          {elementProduk.harga}{" "}
                        </h3>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-6">
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
                        <button
                          className="btn btn-primary"
                          className="btn btn-outline-dark"
                          type="submit"
                        >
                          Beli Sekarang
                          <Badge color="primary">
                            <ShoppingCartOutlined />
                          </Badge>
                        </button>
                      </CardContent>
                    </NavLink>

                    <div className="review">
                      <form className="formmessage" onSubmit={onSubmitList}>
                        <div class="mb-3" className="form-group">
                          <label for="username" className="form-label">
                            Username
                          </label>
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
                              className="form-label"
                            >
                              Pesan Untukku
                            </label>
                            <textarea
                              className="form-control"
                              onChange={handleInput}
                              name="message"
                              value={user.message}
                              rows="12"
                              id="floatingTextarea2"
                              placeholder="Masukkan Pesan"
                              style={{ height: "100px" }}
                            ></textarea>
                          </div>
                        </div>
                        <button
                          type="submit"
                          style={{ background: "#DCAB92" }}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* di baris yg berisi {datamessage?.mesage.map((show)=>( ini mksdnya adalah 
    // data itu sebagai data yang kita punya di dalam hasura
    // tanda tanya tuh fungsinya . misal data itu false dia gak akan ngejalanin yang selanjutnya. tpi kalo dia bener itu data message, dia bakal jalanin semuanya
    // tanda tanya disini berfungsi kek misal ini data apa yang bakal kita panggil gtu. dan yg kita panggil kan .message. maka nanti yang akan tampil adalah data dari message
    //.message itu karna kita memanggil tabel message yg ada di hasura, dan yang sudah kita tulis di gql baris ke 
    // map ini map adalah fungsi untuk mentransformasi nilai dalam suatu array / object. 
    // map itu adalah pengulangan . jadi data itu akan di ulang ulang trus*/}

            {dataMessage?.Message.map((show) => (
              <li className="komen-list card-kontent mb-4">
                <div className="">
                  <h5
                    style={{ paddingLeft: "20px" }}
                    className="card-titles ml-4 mt-3"
                  >
                    {show.username}
                  </h5>
                  <p
                    style={{ paddingRight: "100px", paddingLeft: "55px" }}
                    className="card-text ml-4 mt-3"
                  >
                    {show.message}
                  </p>
                  <button
                    type="submit"
                    style={{ background: "red" }}
                    className="btn"
                    onClick={onDeleteItem}
                    value={show.id}
                    className="del"
                  >
                    Delete
                    
                  </button>
                  
                  {TitleStatus ? (
                    <form onSubmit={(e) => SubmitTitle(e, show.id)}>
                      <input  onChange={onEditTitle} placeholder={TitleBaru} />
                    </form>
                    
                  ) : (
                    ""
                  )}
                   <button
                    type="submit"
                    style={{ background: "#FFDAC1", marginBottom: "30px" }}
                    className="btn"
                    onClick={clickTitle}
                    value={show.id}
                    className="edit"
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

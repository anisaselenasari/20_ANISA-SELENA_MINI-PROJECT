import React from 'react'
import modelloginImg from '../assets/img/modellogin.png'
import "../assets/css/login.css"
// import { useHistory } from 'react-router-dom'
import { useState, useRef } from 'react'
import form from '../component/form.css'

export default function Login() {
// const dataKosong itu di setting gak ada tulisan apapun
    const dataKosong ={
        email: "",
        password: "",
        
    }
// const [data, setData] = useState(dataKosong) disini kita menggunakan usestate karna nanti ketika kita set data . data kosong itu 
// akan terganti menjadi data yan kita masukkan
    const [data, setData] = useState(dataKosong)
    const regexEmail =/^[a-zA-Z0-9](([a-zA-Z0-9]+\.)|([a-zA-Z0-9])*)[a-zA-Z0-9]+@([a-zA-Z]+\.)+([a-zA-Z]+)$/
    const regexPassword =/^[a-zA-Z][a-zA-Z\s]{6,50}/
// const [errMsg, setErrMsg] = useState("") untuk mensetting error messagenya. kenapa disini use statenya kosong ?
// agar nanti kita bisa seetting lagi eror yang mau kita tampilkan gimana aja
    const [errMsg, setErrMsg] = useState("")


    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
// baris 29 artinya . jika name sama dengan email. disini kita sudah setting ketentuan email di const regex email
//maka jika udah sesuai dengan yang kita mau dia tidak akan memumculkan apapun
// tetapi jika name = email yang kita masukkan tidak sesuai dengan yang sudah ada di regexemail. maka dia akan memunculkan messageeror
// begitu pun sama dengan name = password
        if (name === "email") {
            if (regexEmail.test(value)) {
                setErrMsg("")
            } else {
                setErrMsg("Email tidak valid. contoh: example@mail.com")

            }
        }

        if (name === "password") {
            if (regexPassword.test(value)) {
                setErrMsg("")
            } else {
                setErrMsg("Password harus berupa huruf!!! minimal 6 huruf")

            }
        }
       
        // set data berhubungan dengan baris ke 17 
        setData({
            ...data,
            [name]: value
        })
        console.log("data", data)
    }

    const handleSubmit = (event) => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert(`Data Berhasil Diterima`)
        }
        resetData()
        event.preventDefault()
    }
    
    const resetData = () => {
        setData(dataKosong);
        setErrMsg("")
    }


    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-md-5 col-sm-4">
                        <div className="left-image">
                        <img 
                        className="my-modelLogin" 
                        src={modelloginImg} 
                        className="img-fluid" 
                        className="figure-img img-fluid rounded" 
                        alt="profile-pic justify-content-center"/>
                        </div>
                    </div>
                    
                    
                    <form className="data-container col-md-7 col-sm-8" onSubmit={handleSubmit}>
                    <div className="container"></div>
                  
                    <h2 style={{textAlign: "center", marginTop: "100px", paddingBottom: "85px"}}>LOGIN TO CONTINUE</h2>
                    <div className="container">
                    <div className="mb-3">
                    <label 
                    for="exampleInputEmail1" 
                    class="form-label">USERNAME</label>
                     <input 
                     style={{width: "616px", background: "#C4C4C4" }} 
                     type="email" 
                     name="email"
                     class="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
                     onChange={handleInput}
                     value={data.email}>  
                     </input>   
                    </div>


                    <div class="mb-3">
                     <label 
                     for="exampleInputPassword1" 
                     class="form-label">PASSWORD
                     </label>
                     <input 
                     style={{width: "616px", background: "#C4C4C4" }} 
                     type="password" 
                     name="password"
                     className="form-control" 
                     id="exampleInputPassword1"
                     onChange={handleInput}
                     value={data.password}></input>
                   </div>


                   <div class="mb-3 form-check">
                     <input 
                     type="checkbox" 
                     className="form-check-input" 
                     id="exampleCheck1">
                     </input>
                     <label 
                     className="form-check-label" 
                     for="exampleCheck1">Remember Me</label>
                     
                       </div>
                       <span style={{color: "red"}}>{errMsg}</span> <br/>
                       <button 
                       style={{width: "616px" , background: "#DBA88D"}} 
                       className={{errMsg}}
                       type="submit" 
                       value="Submit"
                       className="btn">LOGIN</button>
                       </div>
                    </form>
                    
                </div>    
            </div>
        </div>

    )
}

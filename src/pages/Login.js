import React from 'react'
import modelloginImg from '../assets/img/modellogin.png'
import "../assets/css/login.css"
// import { useHistory } from 'react-router-dom'

export default function Login() {

    // const history = useHistory() 
    // function submitHandler(e) {    // disini adalah untuk submit, ketika dia sudah sesuai dia akan lanjut.nah tapi ketika dia 
    //     e.preventDefault()           // gak sesuai dia akan munculin tulisan erornya
    //     let isValid = true
    
    //     for (const field in Login) {
    //       const input = Login[field]
    
    //       if (input.err || (input.required && !input.value)) {
    //         isValid = false
    //         break
    //       }
    //     }
       
       
    // }
    // !isValid && alert ('Form Tidak Valid!')
    // isValid ? history.push('')

    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-md-5 col-sm-4">
                        <div className="left-image">
                        <img className="my-modelLogin" src={modelloginImg} className="img-fluid" className="figure-img img-fluid rounded" alt="profile-pic justify-content-center"/>
                        </div>
                    </div>
                    
                    
                    <form className="data-container col-md-7 col-sm-8">
                    <div className="container"></div>
                  
                    <h2 style={{textAlign: "center"}}>LOGIN TO CONTINUE</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="container">
                    <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">USERNAME</label>
                     <input style={{width: "616px", background: "#C4C4C4" }} 
                     type="email" 
                     class="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp">
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
                     className="form-control" 
                     id="exampleInputPassword1"></input>
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

                       <button 
                    //    onClick={submitHandler}
                       style={{width: "616px" , background: "#DBA88D"}} 
                       type="submit" 
                       className="btn">LOGIN</button>
                       </div>
                    </form>
                    
                </div>    
            </div>
        </div>

    )
}

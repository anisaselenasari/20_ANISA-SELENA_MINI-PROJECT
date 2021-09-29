import React from 'react'
import modelloginImg from '../assets/img/modellogin.png'
import "../assets/css/login.css"

function Login() {
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
                    <h2>LOGIN TO CONTINUE</h2>
                    <div className="container">
                    <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">USERNAME</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
                     <input type="password" class="form-control" id="exampleInputPassword1"></input>
                   </div>
                   <div class="mb-3 form-check">
                     <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                     <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                       </div>
                       <button type="submit" class="btn btn-primary">LOGIN</button>
                       </div>
                    </form>
                    
                </div>    
            </div>
        </div>

    )
}

export default Login

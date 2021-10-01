// import { Badge } from '@material-ui/core';
// import { Search, ShoppingCartOutlined } from '@material-ui/icons'
// import React from 'react'
// import styled from 'styled-components'
// import logo from '../assets/img/Logo.png'

// const Container = styled.div`
//     height : 60px;
// `;

// const Wrapper = styled.div`

//     padding : 10px 20px;
//     display : flex;
//     justify-content : space-between;
//     align-items: center;
//     background-color: #FFDAC1;
  
// `;


// const Left=styled.div`
//     flex : 1;
//     display: flex;
//     align-items: center;
//     `;
    

// const Logo = styled.h1`
// font-weight: bold;
// `

// const Right=styled.div`
//     flex : 1;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
// `;

// const MenuItem = styled.div`
// font-size: 14px;
// cursor: pointer;
// margin-left: 25px;

// `

// const NavbarHome = () => {
//     return (
//         <Container>
//             <Wrapper>
//                 <Left>
//                 <Logo className="navbar-brand" to="/">
//                  <img src={logo} alt="logo " />
//                 </Logo>
                   
                    
//                 </Left>
                
//                 <Right>
//                     <MenuItem style={{color:'#2E2E2E'}}>HOME</MenuItem>
//                     <MenuItem style={{color:'#2E2E2E'}}>COLLECTION</MenuItem>
//                     <MenuItem style={{color:'#2E2E2E'}}>LOGIN</MenuItem>
//                     <MenuItem>
//                     <Badge badgeContent = {1} color = "primary"> 
//                     <ShoppingCartOutlined/>
//                     </Badge>
//                     </MenuItem>
                   
//                 </Right>
//             </Wrapper>
            
//         </Container>
//     )
// }

// export default NavbarHome







import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/Logo.png'
import { Badge } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons'
import '../assets/css/navbar.css'
import styled from 'styled-components'


const ul=styled.div`
    background-color : #FFDAC1;
    `


function NavbarHome() {
    return (
     

        <nav className="navbar navbar-expand-lg navbar-light bg-light background-color: #FFDAC1!important;
      }px-5 shadow-sm"  >
        {/* style={{background-color: "FFDAC1"}}> */}
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img src={logo} alt="logo " />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className ="navbar-nav d-flex align-items-center">
          {/* <ul className style={{color:'#FFDAC1'}}></ul>   tadinya buat nampilin background warna */}
            <li className="nav-item px-2 ">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink exact to="/Collection" 
              className="nav-link" 
              aria-current="page">
                COLLECTION
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/Login"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                LOGIN
              </NavLink>
            </li>
            <Badge badgeContent = {1} color = "primary"> 
               <ShoppingCartOutlined/>
                    </Badge>
          </ul>
        </div>
      </div>
    </nav>
   
  )
}

export default NavbarHome

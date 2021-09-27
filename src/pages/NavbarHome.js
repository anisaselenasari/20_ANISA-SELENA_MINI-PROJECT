import React from 'react'
import {Nav,NavDropdown,Navbar,Form,Button,Container} from 'react-bootstrap'
function NavbarHome() {
// const Navbar = () => {
    return (
        <>
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><b><strong>HOME</strong></b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
    );
};


// export default NavbarComponent;
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           {/* <img src={logo} alt="logo perusahaan" /> */}
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
//           <ul className="navbar-nav d-flex align-items-center">
//             <li className="nav-item px-2 ">
//               <NavLink
//                 exact
//                 to="/"
//                 className="nav-link"
//                 activeClassName="my-active"
//                 aria-current="page"
//               >
//                 HOME
//               </NavLink>
//             </li>
//             <li className="nav-item px-2">
//               <NavLink exact to="/" className="nav-link" aria-current="page">
//                 COLLECTION
//               </NavLink>
//             </li>
//             <li className="nav-item px-2">
//               <NavLink
//                 exact
//                 to="/news"
//                 className="nav-link"
//                 activeClassName="my-active"
//                 aria-current="page"
//               >
//                 LOGIN
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default NavbarHome

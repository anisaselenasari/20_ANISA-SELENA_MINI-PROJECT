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
     

        <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: "#FFDAC1"}}>
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
            <Badge > 
               <ShoppingCartOutlined/>
                    </Badge>
          </ul>
        </div>
      </div>
    </nav>
   
  )
}

export default NavbarHome

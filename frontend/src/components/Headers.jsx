import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"
import logo from '../logo.jpg'
import logo1 from '../logo-png.png'
const Headers = () => {
  return (
    <>
      <Navbar style={{backgroundColor:'rgb(57,86,97)'}}>
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none" style={{fontFamily:'initial'}}>
            <img src={logo1} style={{width:100}}/></NavLink>
          <Nav className="">
            <NavLink to="/register" className="mt-3 mx-2 text-light text-decoration-none" style={{fontFamily:'initial'}}>Register</NavLink>
            <img src={logo} style={{width:50 , borderRadius:"30px"}} alt="" />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers
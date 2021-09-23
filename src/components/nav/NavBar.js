import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




export const NavBar = () => {


    return (
        <>

            {/* <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/posts"><img className="brandLogo"
                        src="logo.png" /></Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/category">Category</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/search">Search</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/login"
                        onClick={
                            () => {
                                localStorage.removeItem("workout_token")
                            }
                        }>
                        Logout
                    </Link>
                </li>


            </ul> */}
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/posts"><img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />Workout Plus</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Category</Nav.Link>
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/login"
       onClick={
        () => {
            localStorage.removeItem("workout_token")
        }
    }>Logout</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>


        </>
    )

}

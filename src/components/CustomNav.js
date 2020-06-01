import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

class CustomNav extends Component {
    render() {
        const Styles=styled.nav`
    background: #0B132B;
    box-shadow:  5px 6px 8px #888888;

    .navbar-nav .nav-link{
      color: #F08080;
      padding-left:15px;
      padding-right:15px;
      font-size:1.5em;
      font-weight: bold;
    }

    .navbar-nav .nav-link:hover{
      border: 1px solid white;
      border-radius:10px;
      color: gray;
    }

    .navbar-brand{
      font-size:1.7em;
      font-weight: bold;
      color:white;
      text-shadow: 2px 2px 1px grey;
    }

    .navbar-brand:hover{
      border:1px solid white;
      border-radius:10px;
    }

    .custom-toggler{
      border:2px solid white;
    }
    .custom-toggler:hover{
        border:2px solid gray;
      }
    
  `;

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" className="navbar-dark py-3">
      <Navbar.Brand href="/" className="px-2">Internia</Navbar.Brand>
      <Navbar.Toggle className='custom-toggler'/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home </Nav.Link>
          <Nav.Link href="/signup"> Sign-up </Nav.Link>
          <Nav.Link href="/signin">Sign-in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
        )
    }
}

export default CustomNav;
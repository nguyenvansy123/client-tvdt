import React, { useState } from 'react'
import "./header.css"
import logo from "../../Images/logoRHM-1-2-768x189.png"
import { NavLink } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { Container, Nav, Navbar } from "react-bootstrap"

export const Header = () => {
  const [showMenu, setShowMenu] = useState("")

  const togglerMenu = () => {
  }


  return (
    <>
      <header id='header'>
        <div className="container">
          <section id="header__banner" className="my-4">
            <img src={logo} alt="Logo" id="header__logo" />
          </section>

        </div>
      </header>
      <div id='main-nav' className='w-100'>
        <div className="container">
          <Navbar expand="md" >
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler d-md-none btn-menu">
                <FiAlignJustify />
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <ul className="navbar-nav w-100">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">Giới thiệu</NavLink>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
      </div>
    </>
  )
}
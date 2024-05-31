import React, { useState, useEffect } from 'react'
import "./header.css"
import { Link, NavLink } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn } from '../../actions/auth.action'
import { IoIosArrowDown } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";


export const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <section id='header'>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-4">
            <div className="header__logo">
              <img src='../images/logoRHM-1-2-768x189.png' alt="Logo" />
            </div>
          </div>

          <div className="col-sm-8 col-xs-8 mobile-pading">
            <div id='main-nav'>
              <div className="container">
                <Navbar expand="sm" className='header-navbar' >
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler d-md-none btn-toggle-menu">
                      <FiAlignJustify />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav>
                        <ul className="header-menu">
                          <li className="menu-li">
                            <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                          </li>

                          <li className="menu-li">
                            <NavLink className="nav-link" to="/article-management">Tài liệu</NavLink>
                          </li>

                          <li className="menu-li">
                            <NavLink className="nav-link" to="/about">Giới thiệu</NavLink>
                          </li>

                          <li className="menu-li">
                            {/*
                             <div>
                              <Link to="signup" className="btn-outline">Đăng ký</Link>
                              /
                              <Link to="login" className="btn-outline">Đăng nhập</Link>
                            </div> 
                            */}

                            {/* <div className="profile_info">
                              <a className='user_if'>
                                Hi nobody!!
                                <IoIosArrowDown />
                              </a>
                              <div className="profile_info_iner">
                                <div className="profile_info_details">
                                  <a href="#"><IoReorderThreeOutline /> Quản lý bài viết</a>
                                  <a href="#"><BsPencilSquare /> Đăng bài viết</a>
                                  <a href="#"><PiSignOutBold /> Đăng xuất</a>
                                </div>
                              </div>
                            </div> */}
                            {
                              auth.authenticate
                                ?
                                <div className="profile_info">
                                  <a className='user_if'>
                                    Hi {auth.user.username}!!
                                    <IoIosArrowDown />
                                  </a>
                                  <div className="profile_info_iner">
                                    <div className="profile_info_details">
                                      <a href="#"><IoReorderThreeOutline /> Quản lý bài viết</a>
                                      <a href="#"><BsPencilSquare /> Đăng bài viết</a>
                                      <a href="#"><PiSignOutBold /> Đăng xuất</a>
                                    </div>
                                  </div>
                                </div>
                                :
                                <div>
                                  <Link to="signup" className="btn-outline">Đăng ký</Link>
                                  /
                                  <Link to="login" className="btn-outline">Đăng nhập</Link>
                                </div>
                            }
                          </li>



                        </ul>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
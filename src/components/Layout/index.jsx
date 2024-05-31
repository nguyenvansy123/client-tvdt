import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate, Outlet } from "react-router-dom"
import { Header } from '../Header'
import { Footer } from '../Footer'
import "./style.css"
import { Sidebar } from '../Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { createSessionId, isUserLoggedIn, signout } from '../../actions/auth.action'
import useOnceEffect from '../../helpers/UseOnceEffect'

export const Layout = () => {
    const auth = useSelector(state => state.auth);
    const effectRan = useRef(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useOnceEffect(() => {
        const sessionId = window.localStorage.getItem("sessionId")
        if (!sessionId) {
            dispatch(createSessionId())
        }
    }, [])

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }
    }, [auth.authenticate, dispatch]);

    return (
        <>
            <Header />
            {/* <main id='page-container'>
                <div className="container">
                    <div className="row"> */}
            {/* <aside id="sidebar" className="col-md-4 col-lg-3">
                            <section className="sidebar-widget" id="member-widget">
                                {
                                    auth.authenticate ?
                                        (
                                            <div className="userLogin">
                                                <h3 className="sidebar-widget__title fs-4">Tài khoản của tôi</h3>
                                                <div className="sidebar-info border-solid user-info">
                                                    <p className="fs-5">Tên: {auth.user.username}</p>
                                                    <p className="fs-5">Chức danh: {auth.user.role}</p>
                                                    <button className='btn btn-primary fs-3' onClick={() => dispatch(signout(navigate))}>đăng xuất</button>
                                                </div>
                                            </div>

                                        )
                                        :
                                        (
                                            <div id="widgetLogin">
                                                <h3 className="sidebar-widget__title fs-4">Đăng nhập</h3>
                                                <div className="sidebar-widget__body" id="userLogin">
                                                    <Link to="login" className="btn btn-sm btn-block btn-login fs-5">Đăng nhập</Link>
                                                    <Link to="signup" className="btn btn-sm btn-block fs-5">Đăng ký</Link>
                                                </div>
                                            </div>
                                        )
                                }
                            </section>
                            <Sidebar />
                        </aside> */}

            {/* <section className='col-md-8 col-lg-9'>
                            <div className="main-content">
                                <Outlet />
                            </div>
                        </section>
                    </div>
                </div>
            </main> */}

            <div className="main-content">
                <Outlet />
            </div>

            {/* <Footer /> */}

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                // closeOnClick
                rtl={false}
                // pauseOnFocusLoss
                draggable
            // pauseOnHover
            />
        </>
    )
}

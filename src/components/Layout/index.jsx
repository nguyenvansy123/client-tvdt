import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate, Outlet } from "react-router-dom"
import { Header } from '../Header'
import { Footer } from '../Footer'
import "./style.css"
import { Sidebar } from '../Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn, signout } from '../../actions/auth.action'

export const Layout = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn());
        }
    }, [auth.authenticate, dispatch]);

    const renderLoggedInLinks = () => {
        if (auth.user.role === 'quản trị viên') {
            return (
                <>
                    <NavLink to="category" className="btn_3">Quản lý danh mục</NavLink>
                    <NavLink to="user-management" className="btn_3">Quản lý user</NavLink>
                </>
            );
        }
    }


    return (
        <>
            <Header />
            <main id='page-container'>
                <div className="container">
                    <div className="row">
                        <aside id="sidebar" className="col-md-4 col-lg-3">
                            <section className="sidebar-widget" id="member-widget">
                                {
                                    auth.authenticate ?
                                        (
                                            <div className="userLogin">
                                                <h3 className="sidebar-widget__title fs-4">Tài khoản của tôi</h3>
                                                <div className="sidebar-info border-solid user-info">
                                                    <h5>{auth.user.email}</h5>
                                                    <p>chức danh : {auth.user.role}</p>
                                                    <button className='btn btn-primary fs-3' onClick={() => dispatch(signout(navigate))}>đăng xuất</button>
                                                </div>
                                                <div className="user-menu" id="userLogin">
                                                    <NavLink to="article-management" className="btn_3" >Quản lý bài viết</NavLink>
                                                    <NavLink to="profile" className="btn_3" >Profile</NavLink>
                                                    {renderLoggedInLinks()}
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
                        </aside>

                        <section className='col-md-8 col-lg-9'>
                            <div className="main-content">
                                <Outlet />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />

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

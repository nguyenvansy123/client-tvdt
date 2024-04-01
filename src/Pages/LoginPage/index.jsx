import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../actions/auth.action';
import "./LoginForm.css"
import { Link, useNavigate } from 'react-router-dom';
import { EnterKeyListener } from '../../components/HOC/EnterKeyListener';



export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email)
            errors.email = 'Vui lòng nhập email.';
        else if (!emailRegex.test(email))
            errors.email = 'Vui lòng nhập một địa chỉ email hợp lệ.';

        if (!password)
            errors.password = 'Vui lòng nhập mật khẩu.';
        else if (password.length < 6)
            errors.password = 'Mật khẩu phải dài từ 6 ký tự trở nên';

        return errors;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleRegister()
        }
    };

    const handleRegister = () => {
        const errors = validate();
        const user = { email, password }
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        dispatch(login(user, navigate))
    };

    return (
        <div className="row justify-content-md-center">
            <div className="white_box mb_30">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="modal-content cs_modal">
                                <div className="modal-header">
                                    <h5 className="modal-title">Đăng nhập tài khoản</h5>
                                </div>

                                <div className="modal-body">

                                    <form onKeyDown={handleKeyDown}>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                className={validationErrors.email ? "form-control input-error" : "form-control"}
                                                placeholder="Enter your email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className="feedback invalid-feedback ">Chưa nhập địa chỉ email</div>
                                            {validationErrors.email && <div className="feedback invalid-feedback feedback-active">{validationErrors.email}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className={validationErrors.password ? "form-control input-error" : "form-control"}
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <div className="feedback invalid-feedback ">Chưa nhập địa chỉ email</div>
                                            {validationErrors.password && <div className="feedback invalid-feedback feedback-active">{validationErrors.password}</div>}
                                        </div>
                                        <a className="btn_2 w-100 text-center" onClick={handleRegister}>
                                            Đăng nhập
                                        </a>

                                        <div className="text-center">
                                            <Link
                                                to="/forgetpasswordpage"
                                                data-bs-toggle="modal"
                                                data-bs-target="#forgot_password"
                                                data-bs-dismiss="modal"
                                                className="pass_forget_btn"
                                            >
                                                Quên mật khẩu?
                                            </Link>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { signup } from '../../actions/auth.action';
import "./style.css"
import { useNavigate } from 'react-router-dom';


export const SignupPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [image, setImage] = useState(null);

    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});



    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username)
            errors.username = 'Vui lòng nhập tên.';

        if (!email)
            errors.email = 'Vui lòng nhập email.';
        else if (!emailRegex.test(email))
            errors.email = 'Vui lòng nhập một địa chỉ email hợp lệ.';

        if (!password)
            errors.password = 'Vui lòng nhập mật khẩu.';
        else if (password.length < 6)
            errors.password = 'Mật khẩu phải dài từ 6 ký tự trở nên';

        if (!repeatPassword)
            errors.repeatPassword = 'Bạn cần xác nhận lại mật khẩu!';
        else if (password !== repeatPassword)
            errors.repeatPassword = 'Mật khẩu xác nhận không trùng khớp!';

        if (!image)
            errors.image = "vui lòng nhập hình ảnh tốt nghiệp"

        return errors;
    };

    const handleRegister = () => {
        const errors = validate();

        const formdata = new FormData()
        formdata.append("username", username)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("degree", image)
        console.log(image);
        // const user = { username, email, password, image }
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }
        dispatch(signup(formdata, navigate))
    };



    return (

        <div className="row justify-content-md-center">
            <div className="white_box mb_30">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="modal-content cs_modal">
                                <div className="modal-header">
                                    <h5 className="modal-title">Đăng ký</h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                className={validationErrors.username ? "form-control input-error" : "form-control"}
                                                placeholder="Họ và tên"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            {validationErrors.username && <div className="feedback invalid-feedback feedback-active">{validationErrors.username}</div>}

                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                className={validationErrors.email ? "form-control input-error" : "form-control"}
                                                placeholder="Địa chỉ email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {validationErrors.email && <div className="feedback invalid-feedback feedback-active">{validationErrors.email}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className={validationErrors.password ? "form-control input-error" : "form-control"}
                                                placeholder="Mật khẩu"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {validationErrors.password && <div className="feedback invalid-feedback feedback-active">{validationErrors.password}</div>}
                                        </div>

                                        <div className="mb-4">
                                            <input
                                                type="password"
                                                className={validationErrors.repeatPassword ? "form-control input-error" : "form-control"}
                                                placeholder="Nhập lại mật khẩu "
                                                onChange={(e) => setRepeatPassword(e.target.value)}
                                            />
                                            {validationErrors.repeatPassword && <div className="feedback invalid-feedback feedback-active">{validationErrors.repeatPassword}</div>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label ps-4 fs-5">
                                                vui lòng gửi ảnh bằng tốt nghiệp để admin có thế xác nhận là bác sĩ
                                            </label>
                                            <input className="form-control" type="file" id="formFile" accept="image/*"
                                                onChange={(e) => setImage(e.target.files[0])}
                                            />
                                            {validationErrors.image && <div className="feedback invalid-feedback feedback-active">{validationErrors.image}</div>}
                                        </div>


                                        <a className="btn_2 w-100 text-center cursor-pointer" onClick={handleRegister}>
                                            Đăng ký
                                        </a>
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

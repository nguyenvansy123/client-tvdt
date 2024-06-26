import React, { useState } from 'react'
import "./style.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { passwordReset } from '../../actions';



export const ForgetPasswordPage = () => {

    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const ResetPassword = () => {
        dispatch(passwordReset(navigate,email))
    }

    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="white_box mb_30">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="modal-content cs_modal">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Quên mật khẩu</h5>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <a href="#" onClick={ResetPassword} className="btn_2 w-100 text-center">
                                                Gửi
                                            </a>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import "./style.css"



export const ForgetPasswordPage = () => {

    const [isShowLoginForm, setIsShowLoginForm] = useState(true);
    const [isShowSignupForm, setIsShowSignupForm] = useState(false);



    const ToggleLogin = () => {

        setIsShowLoginForm(!isShowLoginForm)
    }


    const ToggleSignup = () => {

        setIsShowSignupForm(!isShowSignupForm)
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
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <a href="#" className="btn_2 w-100 text-center">
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

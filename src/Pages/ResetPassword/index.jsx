import React, { useState } from 'react'
import "./style.css"
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../actions';
import { toast } from 'react-toastify';

export const ResetPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const params = useParams();
    // let { userId } = useParams(); 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetPassword = () => {
        if (confirmPassword != password) {
            toast.error("Confirm Password và New Password không giống nhau")
            return;
        }
        console.log("test");
        dispatch(changePassword(navigate, params.userId, password))
    }

    return (
        <div className="mainDiv">
            <div className="cardStyle">
                <div>
                    <img src="" id="signupLogo" />
                    <h2 className="formTitle">Login to your account</h2>
                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="password">
                            New Password
                        </label>
                        <input type="password" id="password" name="password" required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="buttonWrapper">
                        <button
                            id="submitButton"
                            onClick={resetPassword}
                            className="submitButton pure-button pure-button-primary"
                        >
                            <span>Continue</span>
                            {/* <span id="loader" /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

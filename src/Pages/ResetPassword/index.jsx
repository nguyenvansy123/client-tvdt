import React from 'react'
import "./style.css"

export const ResetPassword = () => {
    return (
        <div className="mainDiv">
            <div className="cardStyle">
                <form action="" method="post" name="signupForm" id="signupForm">
                    <img src="" id="signupLogo" />
                    <h2 className="formTitle">Login to your account</h2>
                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="password">
                            New Password
                        </label>
                        <input type="password" id="password" name="password" required="" />
                    </div>
                    <div className="inputDiv">
                        <label className="inputLabel" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <div className="buttonWrapper">
                        <button
                            type="submit"
                            id="submitButton"
                            onclick="validateSignupForm()"
                            className="submitButton pure-button pure-button-primary"
                        >
                            <span>Continue</span>
                            {/* <span id="loader" /> */}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

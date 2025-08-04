import React, { useState } from 'react'
import './login.css'

const Login = ({showlogin}) => {
    const [loginSignin, setLoginSignin] = useState("login")
    return (
        <div className='login'>
            <div className="login-container">
                <div className="login-heading">
                    <h2>{loginSignin === "login" ?"Login": "Sign in"}</h2>
                    <i class="fa-solid fa-xmark" onClick={()=>showlogin(false)}></i>
                </div>
                {loginSignin === "login" ? <></>: <input type="text" className='input-box' placeholder='Your Name' />}
                <input type="email" className='input-box' placeholder='Your Email' />
                <input type='password' className='input-box' placeholder='Password' />
                <button type='button' className='input-box login-btn'>{loginSignin === "login" ? "Login": "Create account"}</button>
                <div className='confirm'>
                    <input className='checkbox' type="checkbox" />
                    <label htmlFor="confirm">By continuing, i agree to the terms of use & privacy policy.</label>
                </div>
                <p>{loginSignin === "login" ? "Create a new account?": "Already have an account?"} <span className='click-here' onClick={()=>loginSignin === "login" ? setLoginSignin("signin"): setLoginSignin("login")}>{loginSignin === "login" ? "Click here": "Login here"}</span></p>
            </div>
        </div>
    )
}

export default Login

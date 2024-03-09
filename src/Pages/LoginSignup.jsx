import React from 'react'
import './CSS/LoginSignup.css'
import spice from './CSS/spice4.jpg'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="image-left">
        <img src={spice} alt="" />
      </div>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>CONTINUE</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

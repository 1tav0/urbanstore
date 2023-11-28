import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './Login.css';
const Login = () => {
  return (
    <div className="login">
      <StorefrontIcon className='login__icon'/>
      <div className="login__wrapper">
        <h1>Sign-In</h1>
        <form action="" className='login__form'>
          <h5>Email</h5>
          <input type='text' className='login__input'/>
          <h5>Password</h5>
          <input type='password' className='login__input'/>
          <button>Sign In</button>
        </form>
        <h5>Don't Have an Account?</h5>
      </div>
    </div>
  )
}

export default Login
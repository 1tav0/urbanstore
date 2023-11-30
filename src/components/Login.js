import React, { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './Login.css';
const Login = ({ submit }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
  }
  return (
    <div className="login">
      <StorefrontIcon className='login__icon'/>
      <div className="login__wrapper">
        <h1>Sign-In</h1>
        <form action="" className='login__form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input type='text' className='login__input'     id='email'
            value={values.email}
            onChange={handleChange}
          />
          
          <label htmlFor='password'>Password:</label>
          <input type='password' className='login__input' id='password'
            value={values.password}
            onChange={handleChange}
          />
          <button>Sign In</button>
        </form>
        <h5>Don't Have an Account?</h5>
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import '../style.scss'
import Chat from '../images/chat.jpg'

const Login = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
          <img src={Chat} alt='Avatar' width='100%' height='150px' />
          <span className='logo'>Friends Adda</span>
          <span className='title'>Login</span>
          <form action=''>
              <input type='text'placeholder='Your Phone Number' />
              <input type='password' placeholder='Type Password' />
              <button>Sign in</button>
          </form>
          <p>You don't have an account? Register</p>
       </div>
    </div>
  )
}

export default Login

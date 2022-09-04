import React from 'react'
import '../style.scss'
import Avatar from '../images/avatar.jpg'
import Chat from '../images/chat.jpg'

const Register = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
          <img src={Chat} alt='Avatar' width='100%' height='150px' />
          <span className='logo'>Friends Adda</span>
          <span className='title'>Register</span>
          <form action=''>
              <input type='text' placeholder='Your name' />
              <input type='email'placeholder='Your Email' />
              <input type='password' placeholder='Type Password' />
              <input style={{display:'none'}} type='file' id='file' />
              <label htmlFor='file'>
                  <img src={Avatar} alt="Avatar" width={32}/>
                  <span>Upload your picture</span>
              </label>
              <button>Sign up</button>
          </form>
          <p>You have an account? Login</p>
       </div>
    </div>
  )
}

export default Register

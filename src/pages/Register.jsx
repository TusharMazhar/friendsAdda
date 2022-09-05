import React from 'react'
import '../style.scss'
import Avatar from '../images/avatar.jpg'
import Chat from '../images/blood.png'

const Register = () => {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
          <img src={Chat} alt='Avatar' width='100%' height='150px' />
          <span className='title'>Register</span>
          <form action=''>
              <input type='text' placeholder='Your name' />
              <input type='text' placeholder='Your Phone Number' />
              <input type='text' placeholder='District Name' />
              <select name="cars" id="cars">
                <option selected disabled>Select Your Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
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

import React from 'react'
import Add from '../../images/add.png'
import Cam from '../../images/cam.png'
import More from '../../images/more.png'

const Navbar = () => {
  return (
    <div className='navbar'>
       <span className='name'>Tushar</span>
        <div className='setting'> 
           <img src={Cam} alt=""  height={24} />
           <img src={Add} alt=""  height={24} />
           <img src={More} alt=""  height={24} />
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Attach from '../../images/attach.png'
import Avatar from '../../images/addAvatar.png'
const ReplyBar = () => {
  return (
    <div className='ReplyContainer'>
        <input type="text" placeholder='Reply from here...' />
        <div className='reply'>

          <input style={{display:'none'}} type="file" id='file' /> 
          <label htmlFor='file'>
             <img src={Attach} alt="" height={24} />
          </label>
          <input style={{display:'none'}} type="file" id='file2' /> 
          <label htmlFor='file2'>
             <img src={Avatar} alt="" height={24} />
          </label>
  
          <button>Send</button>
        </div>
    </div>
  )
}

export default ReplyBar
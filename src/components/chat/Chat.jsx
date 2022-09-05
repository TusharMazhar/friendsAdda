import React from 'react'
import Navbar from './Navbar'
import ChatBox from './ChatBox'
import ReplyBar from './ReplyBar'

const Chat = () => {
  return (
    <div className='chats'>
       <Navbar />
       <ChatBox />
       <ReplyBar />
    </div>
  )
}

export default Chat
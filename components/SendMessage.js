import React from 'react'
import { useState } from 'react';
import { useMoralis } from 'react-moralis'

function SendMessage(props) {
  const {user, Moralis} = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = e => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages') // basically like create a Messages table in Moralis, this returns a class
    const messagesInstance = new Messages()

    // save the thing, returns a promise
    messagesInstance
      .save({
        message,
        username: user.get('username'),
        ethAddr: user.get('ethAddress') // eth wallet address of the user
      }).then(message => {
        // this indicates successful sending the message, the message is returned
        console.log(message)
      }).catch(err => {
        alert('The message was not successfully sent')
        console.log(err) // the message was not successfully sent
      })

    // scroll to the end of the message (from what I know safari doesn't support behavior smooth)
    props.endOfMessagesRef.current.scrollIntoView({behavior: 'smooth'})

    // clear the messages
    setMessage('')
  }
  
  return (
    <form className='flex justify-center fixed bottom-8 z-50 p-4 px-6 bg-background bg-opacity-90 mx-auto my-2 w-1/2 min-w-[326px] rounded-full border-secondary border-2'>
      <input 
        type="text" 
        name="message" 
        id="message" 
        value={message}
        onChange={e => setMessage(e.target.value)}
        className='flex-grow outline-none bg-transparent placeholder-secondary' 
        placeholder={`Enter your message here, ${user.get('username')}`} />
      <button
        type='submit'
        onClick={sendMessage}
        className='text-accent'
      >Send</button>
    </form>
  )
}

export default SendMessage

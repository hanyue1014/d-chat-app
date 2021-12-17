import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from './Message';
import SendMessage from './SendMessage';

function Messages() {
  const {user} = useMoralis()
  const endOfMessagesRef = useRef(null)
  const {data, loading, error} = useMoralisQuery(
    `Messages`, // query the Messages table
    query => {
      // do filter in here
      // createdAt is a handy field that moralis automatically assigns
      // i think the limit function limits how many 
      // i used the descending method to get the latest created messages, limit them to 20
      // haven't figure out a way to append message to the end instead of in front
      // return query.descending('createdAt').limit(20)
      // will just get everything from the database
      return query.ascending('createdAt')
    },
    [], // no dependency
    {
      live: true // data will update in real time
    }
  )

  // copy the data since data is read-only
  // reverse the data so the messages come in ascending order
  // not working either
  // let updatedData = [...data]
  // updatedData.reverse()

  // all elements will be moralisObject in the data and updatedData
  // console.log(data, updatedData)

  return (
    <div className='pb-52'>
      <ByMoralis variant='dark' style={{margin: '10px auto'}} />

      <div className='space-y-8 p-4'>
        {/* a component that renders all the messages will be here */}
        {
          // will let the component handle the message itself
          data.map(message => <Message key={message.id} message={message} />)
        }
      </div>

      <div className='w-full flex justify-center z-10'>
        {/* Lets the user send a message */}
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      {/* to be able to point to this element after the message was sent */}
      <div ref={endOfMessagesRef} className='w-1/4 min-w-[230px] mx-auto rounded-full bg-background bg-opacity-70 p-2'>
        {/* tell the user they are up to date */}
        <p className='text-center'>You are up to date, {user.get('username')}!!</p>
      </div>
    </div>
  )
}

export default Messages

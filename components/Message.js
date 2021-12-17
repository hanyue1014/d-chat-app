import React from 'react'
import {useMoralis} from 'react-moralis'
import Avatar from './Avatar'

function Message(props) {
  const {user} = useMoralis()

  // will be checking for ethereum address because the user can change their own username
  const belongsToUser = props.message.get('ethAddr') === user.get('ethAddress')

  return (
    <div>
      <div className={`flex w-full relative ${
        belongsToUser ? 'justify-end' : 'justify-start'
      }`}>
        <p className='bg-background p-4 max-w-[50%] w-fit rounded-lg mr-4'>{props.message.get('message')}</p>
        <div>
          <Avatar username={user.get('ethAddress')} className='h-10 w-10 border-2' />
        </div>
        <p className='absolute -bottom-5'>{user.get('username')}</p>
      </div>
    </div>
  )
}

export default Message

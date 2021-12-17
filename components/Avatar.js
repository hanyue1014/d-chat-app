import React from 'react'

import Image from 'next/image'
import {useMoralis} from 'react-moralis'

function Avatar(props) {
  const {user, logout} = useMoralis()

  return (
    <div className={`relative rounded-full border-accent cursor-pointer lg:mx-auto ${props.className}`}>
      <Image 
        src={`https://avatars.dicebear.com/api/pixel-art/${
          props.username || user.get('username')
        }.svg`} 
        onClick={() => props.logoutOnPress && logout()}
        layout='fill'
        objectFit='contain'
        className='rounded-full bg-background' />
    </div>
  )
}

export default Avatar

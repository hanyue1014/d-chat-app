import React from 'react'
import { useMoralis } from 'react-moralis'

import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const {user} = useMoralis()

  return (
    <div className='lg:text-center sticky top-0 p-2 z-50 bg-background border-b-2 border-accent'>
      <Avatar logoutOnPress={true} className='h-48 w-48 border-4'/>
      <h1 className='text-3xl lg:text-center'>Welcome To Web 3</h1>
      <h2 className='text-3xl truncate lg:text-center'>{user.get('username')}</h2>
      <ChangeUsername />
    </div>
  )
}

export default Header

import React from 'react'

import Header from './Header'
import Messages from './Messages'

function MainApp() {
  return (
    <div className='bg-gradient-to-b from-background to-accent text-text h-full min-h-screen'>
      <div className='max-w-5xl mx-auto'>
      <Header />
      <Messages />
      </div>
    </div>
  )
}

export default MainApp

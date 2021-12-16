import React from 'react'
import {useMoralis} from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className='bg-background relative h-screen w-full text-text'>
      <div className='flex flex-col absolute h-5/6 w-full items-center justify-center space-y-8 z-50'>
        <div className='bg-accent h-48 w-48 rounded-full'></div>

        <button 
          className='bg-accent p-4 rounded-md animate-pulse hover:bg-secondary' 
          onClick={authenticate}>
            Proceed to the app
        </button>
      </div>

    </div>
  )
}

export default Login

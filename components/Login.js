import React from 'react'
import {useMoralis} from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className='bg-background relative h-screen w-full text-text flex justify-center items-center'>
      <div className='bg-secondary bg-opacity-80 flex flex-col absolute h-1/2 w-1/4 p-5 items-center justify-center space-y-8 z-50 rounded-md'>
        <div className='bg-accent h-48 w-48 rounded-full'></div>

        <h1 className='text-3xl font-extrabold'>Hello, Welcome</h1>

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

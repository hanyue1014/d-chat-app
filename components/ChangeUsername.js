import React from 'react'

import {useMoralis} from 'react-moralis'

function ChangeUsername() {
  const {setUserData, isUserUpdating, userError, user} = useMoralis()

  const setUserName = () => {
    const username = prompt('Enter your new username: ')

    if (!username) return

    // tell moralis to update the username based on what user entered
    setUserData({
      username
    })
  }

  return (
    <div>
      <button 
        disabled={isUserUpdating}
        onClick={setUserName} 
        className='bg-accent p-3 m-3 rounded-md hover:bg-secondary'
      >Change Username</button>
    </div>
  )
}

export default ChangeUsername

import React from 'react'

function MainApp(props) {
  return (
    <div>
      <h1>Hello, Welcome</h1>
      <button onClick={props.funcLogout}>Log out</button>
    </div>
  )
}

export default MainApp

import { useMoralis } from 'react-moralis'

import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()

  if (!isAuthenticated) {
    return (<>
      <Head>
        <title>Decentralised Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>)
  }

  return (
    <div className="">
      <Head>
        <title>Decentralised Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello, Welcome</h1>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

import { useMoralis } from 'react-moralis'

import Head from 'next/head'
import Login from '../components/Login'
import MainApp from '../components/MainApp'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()

  if (!isAuthenticated) {
  }

  return (
    <div className="">
      <Head>
        <title>Decentralised Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated ? <MainApp funcLogout={logout}/> : <Login />}
    </div>
  )
}

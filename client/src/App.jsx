import React from 'react'
import { Link } from 'react-router'

function App() {


  return (
    <>
    <h1>Home</h1>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </>
  )
}

export default App
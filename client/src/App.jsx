import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const insertUser = async (e) => {
    e.preventDefault()
    
    const userData = {
      username: username,
      password: password,
      email: email,
    }

    axios.post('http://localhost:3000/api/user/register', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('User created:', response.data);
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });

  }

  return (
    <>
    <form onSubmit={insertUser}>
      <div>
        <label htmlFor="">username</label>
        <input type="text" autoComplete='off' onChange={(e)=>{setUsername(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" autoComplete='off' onChange={(e)=>{setPassword(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input type="email" autoComplete='off' onChange={(e)=>{setEmail(e.target.value)}} />
      </div>
      <button type="submit">Create</button>
    </form>
    </>
  )
}

export default App
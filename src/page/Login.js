import React, { useState } from 'react'

function Login() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  async function login(e){
    e.preventDefault()
    await fetch('http://localhost:9001/user/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers:{'Content-Type':'application/json'}
    })
  }
  return (
    <div>
    <form className='login' onSubmit={login}>
    <h1>Login</h1>
    <input type='text' placeholder='Masukan Username Anda' value={username} onChange={e => setUsername(e.target.value)} />
    <input type='password' placeholder='Masukan Password Andas' value={password} onChange={e => setPassword(e.target. value)} />
    <button>Login</button>
    </form>
    </div>
  )
}

export default Login
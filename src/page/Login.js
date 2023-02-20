import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  async function login(e){
    e.preventDefault()
    const response = await fetch('http://localhost:9001/user/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers:{'Content-Type':'application/json'},
      credentials: 'include', 
    })
    if(response.ok){
      setRedirect(true)
    }else{
      alert('username atau password anda salah')
    }
  }
  if (redirect){
    return <Navigate to={'/'} />
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
import React, { useState } from 'react'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  async function register(e){
    e.preventDefault()
    await fetch('http://localhost:9001/user/register', {
      method: 'POST',
      body:JSON.stringify({username, password}),
      headers:{'Content-Type':'application/json'}
    })
  }

  return (
    <div>
    <form className='register' onSubmit={register}>
    <h1>Daftar</h1>
    <input type='text' placeholder='Masukan Username Anda' value={username} onChange={e => setUsername(e.target.value)} />
    <input type='password' placeholder='Masukan Password Andas' value={password} onChange={e => setPassword(e.target.value)} />
    <button>Daftar</button>
    </form>
    </div>
  )
}

export default Register
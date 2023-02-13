import React from 'react'

function Login() {
  return (
    <div>
    <form className='login'>
    <h1>Login</h1>
    <input type='text' placeholder='Masukan Username Anda' />
    <input type='password' placeholder='Masukan Password Andas' />
    <button>Login</button>
    </form>
    </div>
  )
}

export default Login
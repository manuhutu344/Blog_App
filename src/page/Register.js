import React from 'react'

function Register() {
  return (
    <div>
    <form className='register'>
    <h1>Daftar</h1>
    <input type='text' placeholder='Masukan Username Anda' />
    <input type='password' placeholder='Masukan Password Andas' />
    <button>Daftar</button>
    </form>
    </div>
  )
}

export default Register
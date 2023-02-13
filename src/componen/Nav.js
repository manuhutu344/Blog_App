import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
    <Link to={'/'} className='logo'>Blog Saya</Link>
    <nav>
    <Link to={'/login'}>Login</Link>
    <Link to={'/daftar'}>Daftar</Link>
    </nav>
    </header>
  )
}

export default Nav
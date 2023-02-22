import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom'

function Nav() {
  const [username, setUsername] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:9001/user/profile', {
      credentials: 'include',
    }).then(response =>{
      response.json().then(userInfo =>{
        setUsername(userInfo.username)
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:9001/user/logout', {
      credentials: 'include',
      method:'POST',
    })
  }

  return (
    <header>
    <Link to={'/'} className='logo'>Blog Saya</Link>
    <nav>
    {username && (
      <>
      <Link to='/buat'>Buat post baru</Link>
      <a onClick={logout}>Logout</a>
      </>
    )}
    {!username &&(
      <>
    <Link to={'/login'}>Login</Link>
    <Link to={'/daftar'}>Daftar</Link>
      </>
    )}
    </nav>
    </header>
  )
}

export default Nav
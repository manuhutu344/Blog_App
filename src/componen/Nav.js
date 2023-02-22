import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

function Nav() {
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:9001/user/profile', {
      credentials: 'include',
    }).then(response =>{
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:9001/user/logout', {
      credentials: 'include',
      method:'POST',
    })
    setUserInfo(null)
  }

  const username = userInfo?.username

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
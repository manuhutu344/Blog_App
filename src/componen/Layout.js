import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Layout() {
  return (
    <main>
    <Nav />
    <Outlet />
    </main>
  )
}

export default Layout
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <div>About</div>
      <Link to="profile">Profile</Link>
      <Outlet/>
    </div>
  )
}

export default About
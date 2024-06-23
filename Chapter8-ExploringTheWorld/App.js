import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
      <h1>Routing</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/about"></Link> */}
      </div>
      <Outlet/>
    </div>
  )
}

export default App
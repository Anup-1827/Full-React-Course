import React, { useContext } from 'react'
import { AuthProvider } from '../App'

function About() {
  const {status, setStatus} = useContext(AuthProvider)
  return (
    <div>About
      {status}
    </div>
  )
}

export default About
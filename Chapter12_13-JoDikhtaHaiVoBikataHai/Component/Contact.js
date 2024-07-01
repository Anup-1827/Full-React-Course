import React, { useContext } from 'react'
import { AuthProvider } from '../App'


function Contact() {
  const {status,setStatus} = useContext(AuthProvider)

  return (
    <div>Contact
      <button onClick={()=>setStatus(()=> status=="LoggedIn" ? "Logout" :"LoggedIn")}>Click Me</button>
    </div>
  )
}

export default Contact
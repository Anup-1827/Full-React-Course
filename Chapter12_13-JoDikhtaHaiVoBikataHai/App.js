import React, { createContext, useState } from 'react'
import About from './Component/About'
import Contact from './Component/Contact'

export const AuthProvider = createContext()

function App() {
  const [status, setStatus] = useState("LoggedIn")
  
  return (
    <AuthProvider.Provider value={{status, setStatus}}>
      <div>
        Hii
        <About/>
        <Contact/>
      </div>
      
    </AuthProvider.Provider>
  )
}

export default App
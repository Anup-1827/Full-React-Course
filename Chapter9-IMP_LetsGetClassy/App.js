import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './Components/Error'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Profile from './Components/Profile'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        // errorElement: <Error/>,
        children:[
            {
                path:"/about",
                element: <About/>,
                children: [
                    {
                        path:"profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element: <Contact/>
            },
        ]
    }
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
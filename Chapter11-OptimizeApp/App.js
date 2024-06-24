import React, { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
// import Contact from './Components/Contact'

const Contact = lazy(()=> import("./Components/Contact"))

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        children:[
            {
                path:"/about",
                element: <About/>, 
            },
            {
                path:"/contact",
                element:    <Suspense fallback={"Loading.... Contact"}> <Contact/></Suspense>, 
            }
        ]
    }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
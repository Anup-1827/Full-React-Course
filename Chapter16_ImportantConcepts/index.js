import React from "react"
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "./App"
import HigherOrderComp from "./Components/_1_HigherOrderComp"
import { HOCRoute } from "./route"

const RouterComponent = ()=>{
    const router = createBrowserRouter([
        {
        path:"/",
        element: <App/>,
        children:[
            {
                path: HOCRoute,
                element: <HigherOrderComp/>
            }
        ]
      }
    ])
    return <RouterProvider router={router}/>
}



ReactDOM.createRoot(
    document.getElementById("root")
).render(<RouterComponent />)
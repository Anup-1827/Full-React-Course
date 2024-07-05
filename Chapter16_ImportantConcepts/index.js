import React from "react"
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "./App"
import HigherOrderComp from "./Components/_1_HigherOrderComp"
import { HOCRoute, UseMemoRoute } from "./route"
import UseMemo from "./Components/_2_UseMemo"

const RouterComponent = ()=>{
    const router = createBrowserRouter([
        {
        path:"/",
        element: <App/>,
        children:[
            {
                path: HOCRoute,
                element: <HigherOrderComp/>
            },
            {
                path: UseMemoRoute,
                element: <UseMemo/>
            },

        ]
      }
    ])
    return <RouterProvider router={router}/>
}



ReactDOM.createRoot(
    document.getElementById("root")
).render(<RouterComponent />)
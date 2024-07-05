import React from "react"
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "./App"
import HigherOrderComp from "./Components/_1_HigherOrderComp"
import { HOCRoute, UseCallbackRoute, UseMemoRoute } from "./route"
import UseMemo from "./Components/_2_UseMemo"
import UseCallback from "./Components/_3_UseCallback"

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
            {   
                path: UseCallbackRoute,
                element: <UseCallback/>
            }

        ]
      }
    ])
    return <RouterProvider router={router}/>
}



ReactDOM.createRoot(
    document.getElementById("root")
).render(<RouterComponent />)
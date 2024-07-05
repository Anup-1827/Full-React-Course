import React, { lazy, Suspense } from "react"
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from "./App"
import HigherOrderComp from "./Components/_1_HigherOrderComp"
import { HOCRoute, LazyLoadRoute, UseCallbackRoute, UseMemoRoute, UseReducerRoute } from "./route"
import UseMemo from "./Components/_2_UseMemo"
import UseCallback from "./Components/_3_UseCallback"
import UseReducer from "./Components/_5_UseReducer"
// import LazyLoad from "./Components/_4_LazyLoad"


const LazyLoadComp = lazy(()=> import('./Components/_4_LazyLoad'))

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
            },
            {   
                path: LazyLoadRoute,
                element: 
                <Suspense fallback={<h1>Loading..........</h1>}>
                    <LazyLoadComp/>
                </Suspense>
            },
            {
                path: UseReducerRoute,
                element: <UseReducer/>
            }
        ]
      }
    ])
    return <RouterProvider router={router}/>
}



ReactDOM.createRoot(
    document.getElementById("root")
).render(<RouterComponent />)
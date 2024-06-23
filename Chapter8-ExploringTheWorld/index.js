import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Restaurants from "./Components/Restaurants";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         errorElement: <Error/>
//     },
//     {
//         path: "/about",
//         element: <About/>
//     },
//     {
//         path: "/contact",
//         element: <Contact/>

//     }
// ])

// Nested Route
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:id",
                element: <Restaurants/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root"))
.render(<RouterProvider router={router}/>)



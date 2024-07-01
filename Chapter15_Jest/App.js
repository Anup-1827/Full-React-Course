import React, { Children, lazy } from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AppLayout from "./components/AppLayout";


const router = createBrowserRouter([{
  path:"/",
  element: <AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  ]
}])

function App() {
  return (
    <RouterProvider  router={router}/>
  );
}
    
export default App;
    
   
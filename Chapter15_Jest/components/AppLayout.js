import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import { Provider } from "react-redux";
import store from "../store"


function AppLayout() {
  return (
    <Provider store={store}>

        <div>
            <Header/>
        </div>
         <Outlet/>
    </Provider>
  )
}

export default AppLayout
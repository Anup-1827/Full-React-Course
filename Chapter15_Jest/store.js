import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./redux/Slice/CreateSlice"

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store
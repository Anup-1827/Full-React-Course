import React, { useReducer } from 'react'

const initalState = {
    count:0
}
function UseReducer() {
    const [state, dispatch] = useReducer(CountReducer, initalState)
  return (
    <div>
        <h1>Counter:-- {state.count}</h1>

        <div>
            <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
            <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
        </div>
    </div>
  )
}

export default UseReducer


function CountReducer(state, action){
    const {type} = action

    if(type === "increment"){
        return { count: state.count +1 }
    }
    else if(type === "decrement"){
        return { count: state.count -1 }
    }
    else{
        return state
    }
}
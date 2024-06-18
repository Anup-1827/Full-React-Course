import React from "react";
import ReactDOM from "react-dom/client"


const myHeading = React.createElement("h1", {
    className:"heading",
},
'This is a Heading'
)


// JSX comes with parecel 
const HeaderComponent = ()=>(
    <div>
        {myHeading}
        Hello Header Component
    </div>
)

const root = ReactDOM.createRoot( document.getElementById("root"))
root.render(<HeaderComponent/>)
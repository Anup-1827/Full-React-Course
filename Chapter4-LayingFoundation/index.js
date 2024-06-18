import React from "react";
import ReactDOM from "react-dom/client"

// This is React Element
const li1 = React.createElement('li', {key:1}, "Home")
const li2 = React.createElement('li', {key:2}, "Support Us")
const li3 = React.createElement('li', {key:3}, "Contact Us")

const div = React.createElement("div",
    {
        "className": "header"
    },
    React.createElement("h1",{}, "Hello Anup"),
    React.createElement('ul',{}, [li1,li2,li3])
)


// console.warn("Hi I am warning")

// This is JSX expression
const mainDiv = <div className="mainDiv">
    {div}
</div>

// Functional Component
const MainComponent = ()=>(
    mainDiv
)

const root =  ReactDOM.createRoot(document.getElementById("root"))
// root.render(<MainComponent/>)
root.render(MainComponent())
import React from "react"
import ReactDOM from "react-dom/client"


const element = React.createElement("h1",{id:"heading"},"working")

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(element)
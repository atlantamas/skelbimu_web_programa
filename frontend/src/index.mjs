import React from "react"
import  ReactDOM  from "react-dom/client"
import App from "./App.jsx"

const element_id_root = document.getElementById("root")

const result_of_createRoot = ReactDOM.createRoot(element_id_root)

const result_of_createElement = React.createElement(App)

result_of_createRoot.render(result_of_createElement)
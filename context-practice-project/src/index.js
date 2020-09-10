import React from "react"
import ReactDOM from "react-dom"
import ThemeContext from "./themeContext"


ReactDOM.render(
<ThemeContext.Provider value>
<App/>
</ThemeContext.Provider>
,document.getElementById('root'))
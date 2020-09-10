import React, {useState} from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = useState('')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
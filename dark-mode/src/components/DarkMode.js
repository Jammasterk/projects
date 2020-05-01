import React, {Component} from 'react'
import {ThemeProvider, createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props =>
          props.theme.mode === "dark" ? "#111" : "#eee"}
        color: ${props =>
          props.theme.mode === "dark" ? "#eee" : "#111"}
    }
`;

class DarkMode extends Component{
    render(){
        return(
           <ThemeProvider theme={{mode: "light"}}>
               <>
               <GlobalStyle/>
            <div>
                <h1>Hello React</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima, explicabo. Cumque ipsam aperiam laborum saepe.</p>
            </div>
                
             </>
           </ThemeProvider>
        )
    }
}

export default DarkMode
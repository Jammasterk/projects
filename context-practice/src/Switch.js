import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"
import {FormControlLabel} from "@material-ui/core"


const Switch = () => {
    const context = useContext(ThemeContext)
    
    
    return (
      <div className={`${context.theme}-theme`}>
        <div className="custom-control custom-switch  d-flex p">
          {/* <label htmlFor="customSwitches">
          </label> */}
          <input
            onClick={context.toggleTheme}
            type="checkbox"
            className="custom-control-input w-25"
            id="customSwitches"
            readOnly
          />
          <label className="custom-control-label" htmlFor="customSwitches">
          </label>
        </div>
      </div>
    );
}

export default Switch


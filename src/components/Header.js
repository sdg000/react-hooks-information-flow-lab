import React from "react"

function Header({onDarkModeClick, color}){
    //const color = onDark
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{color? "Light Mode" : "Dark Mode"}</button>
      </header>
    )
}

export default Header

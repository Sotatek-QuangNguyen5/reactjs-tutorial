import { useContext } from "react"
import Paragraph from "./Paragraph"
import { ThemeContext } from "./ThemeContext"


function Context({ styles }) {

    const context = useContext(ThemeContext)
    // console.log(context)

    return (

        <div
            style={{

                ...styles
            }}
        >
            <button
                onClick={context.toggleTheme}
            >Toggle Theme</button>
            <Paragraph />
        </div>
    )
}

export default Context
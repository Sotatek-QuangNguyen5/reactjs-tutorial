import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Paragraph({ styles }) {

    const context = useContext(ThemeContext)

    return (

        <div
            style={{

                ...styles
            }}
        >
            <h1
                className={context.theme}
            >Hoan Joker. This is paragraph!!!</h1>
        </div>
    )
}

export default Paragraph
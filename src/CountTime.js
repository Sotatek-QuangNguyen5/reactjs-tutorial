import { useEffect, useRef, useState } from "react"


function CountTime({ styles }) {

    const [countTime, setCountTime] = useState(60)


    let timeID = useRef()
    const startFunc = () => {

        if (!timeID.current) {

            timeID.current = setInterval(() => setCountTime(prevTime => prevTime - 1), 1000)
        }
    }

    const stopFunc = () => {

        clearInterval(timeID.current)
        timeID.current = undefined
    }

    return (

        <div
            style={{

                ...styles
            }}
        >
            <h1>{countTime}</h1>
            <button
                onClick={startFunc}
            >Start</button>
            <button
                onClick={stopFunc}
            >Stop</button>
        </div>
    )
}

export default CountTime
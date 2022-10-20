import { useEffect, useRef, useState } from "react"


function CountTime({ styles }) {

    const [countTime, setCountTime] = useState(60)


    const timeID = useRef()
    const h1Ref = useRef()
    const startFunc = () => {

        if (!timeID.current) {

            timeID.current = setInterval(() => setCountTime(prevTime => prevTime - 1), 1000)
        }
    }

    const stopFunc = () => {

        clearInterval(timeID.current)
        timeID.current = undefined
    }

    useEffect(() => {

        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
        console.log(h1Ref.current)
    })

    return (

        <div
            style={{

                ...styles
            }}
        >
            <h1
                ref={h1Ref}
            >{countTime}</h1>
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
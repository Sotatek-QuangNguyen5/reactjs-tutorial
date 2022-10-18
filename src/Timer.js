import React, { useEffect, useState } from "react"


function Timer() {

    const [timer, setTimer] = useState(200)

    //setInterval(() => setTimer(prevTime => prevTime - 1), 1000)

    //const jokerFunction = () => {

        // setTimer(prevTime => prevTime - 1)
        // setTimer(prevTime => prevTime - 1)
        // setTimer(prevTime => prevTime - 1)
        // setTimer(timer - 1)
        // setTimer(timer - 1)
        // setTimer(timer - 1)
        // setInterval(() => setTimer(timer - 1), 1000)
    //}

    //useEffect(() => {

        console.log('joker')
        // const timerId = setInterval(() => {
        //     setTimer(prevTime => prevTime - 1)
        // }, 1000)

        // return () => clearInterval(timerId)
    //}, [])

    return (

        <div>

            <h1
                style={{

                    marginLeft: 90,
                    marginTop: 30
                }}
            >{timer}</h1>
            {/* <button
                style={{

                    marginLeft: 90,
                    marginTop: 10
                }}
                //onClick={() => jokerFunction()}
            >
                Joker
            </button> */}
        </div>
    )
}

export default Timer
import { useCallback, useRef, useState } from "react"
import Memo from "./Memo"


function ComponentMemo({ styles }) {

    const [count, setCount] = useState(1)

    // const handleIncrease = useCallback(() => {

    //     setCount(count + 1)
    // }, [])

    const handleIncrease = useCallback(() => {

        setCount(prev => prev + 1)
    }, [])

    return (

        <div
            style={{ ...styles }}
        >
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >Increase</button>
            <Memo
                // count={count}
                onIncrease={handleIncrease}
            />
        </div>
    )
}

export default ComponentMemo
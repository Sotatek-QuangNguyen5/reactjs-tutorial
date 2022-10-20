import { useState } from "react"
import Memo from "./Memo"


function ComponentMemo({ styles }) {

    const [count, setCount] = useState(1)

    return (

        <div
            style={{ ...styles }}
        >
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >Increase</button>
            <Memo
                count={count}
            />
        </div>
    )
}

export default ComponentMemo
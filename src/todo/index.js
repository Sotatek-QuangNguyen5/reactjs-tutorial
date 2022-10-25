import { useReducer, useRef } from "react"
import reducer, { initState } from "./reducer"
import { setJob, addJob, removeJob } from "./action"
import logger from "./logger"


function TodoList({ styles }) {

    const [todo, dispatch] = useReducer(logger(reducer), initState)
    const handleAdd = () => {

        dispatch(addJob(todo.job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const handleRemove = (index) => {

        // console.log(index)
        dispatch(removeJob(index))
    }
    const inputRef = useRef()
    return (

        <div
            style={{ ...styles }}
        >
            <h1>TodoList</h1>
            <input
                value={todo.job}
                onChange={e => dispatch(setJob(e.target.value))}
                ref={inputRef}
            />
            <button
                onClick={handleAdd}
            >Add</button>
            {
                todo.jobs.map((element, index) => {

                    return (

                        <li key={index}>{element}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span
                            onClick={() => handleRemove(index)}
                            style={{

                                cursor: 'default'
                            }}
                        >&times;</span>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default TodoList
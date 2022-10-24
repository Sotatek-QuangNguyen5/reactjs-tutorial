import { useReducer, useRef } from "react"

const initState = {

    job: '',
    jobs: []
}


const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const REMOVE_JOB = 'remove_job'

const setJob = (job) => {

    return {

        type: SET_JOB,
        job
    }
}

const addJob = (job) => {

    return {

        type: ADD_JOB,
        job
    }
}

const removeJob = (job) => {

    return {

        type: REMOVE_JOB,
        job
    }
}

const reducer = (state, action) => {

    let joker = {}

    switch(action.type) {

        case SET_JOB:
            joker = {

                ...state,
                job: action.job
            }
            break
        case ADD_JOB:
            joker = {

                ...state,
                jobs: [...state.jobs, action.job]
            }
            break
        case REMOVE_JOB:
            console.log(action.job)
            joker = {

                ...state,
                jobs: state.jobs.splice(action.job, 1)
            }
            break
        default:
            throw new Error('invalid action!!!')
    }

    return joker
}
function TodoList({ styles }) {

    const [todo, dispatch] = useReducer(reducer, initState)
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
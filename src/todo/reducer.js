import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants"

export const initState = {

    job: '',
    jobs: []
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

export default reducer
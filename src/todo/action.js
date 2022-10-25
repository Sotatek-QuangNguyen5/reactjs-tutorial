import { SET_JOB, ADD_JOB, REMOVE_JOB } from "./constants"

export const setJob = (job) => {

    return {

        type: SET_JOB,
        job
    }
}

export const addJob = (job) => {

    return {

        type: ADD_JOB,
        job
    }
}

export const removeJob = (job) => {

    return {

        type: REMOVE_JOB,
        job
    }
}
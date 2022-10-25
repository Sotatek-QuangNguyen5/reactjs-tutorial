import { useEffect, useRef } from "react"
import Video from "./video"


function Imperative({ styles }) {

    const videoRef = useRef()
    useEffect(() => {

        console.log(videoRef.current)
    })

    const playVideoHandle = () => {

        videoRef.current.play()
    }

    const pauseVideoHandle = () => {

        videoRef.current.pause()
    }

    return (

        <div
            style={{ ...styles}}
        >
            <Video ref={videoRef}/>
            <br/>
            <button
                onClick={playVideoHandle}
            >Play</button>
            <button
                onClick={pauseVideoHandle}
            >Pause</button>
        </div>
    )
}

export default Imperative
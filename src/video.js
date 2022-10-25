import { forwardRef, useImperativeHandle, useRef } from "react"
import video from "./Video/cuoiluonduockhong.mp4"

function Video(props, videoRef) {

    const ref = useRef()
    useImperativeHandle(videoRef, () => ({

        play() {

            ref.current.play()
        },
        pause() {

            ref.current.pause()
        }
    }))

    return (

        <video
            src={video}
            width={600}
            ref={ref}
        />
    )
}

export default forwardRef(Video)
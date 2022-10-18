import { useEffect, useState } from "react"


function Avatar({ styles }) {

    const [image, setImage] = useState()
    const choiceImage = (e) => {

        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        console.log(file)
        setImage(file)
        e.target.value = null
    }

    useEffect(() => {

        return () => (image && image.preview) ? URL.revokeObjectURL(image.preview) : false
    }, [image])

    return (

        <div 
            style = {{ ...styles }}
        >
            <input
                type='file'
                onChange={choiceImage}
            />
            {
                image && <img
                            src={image.preview ?? ''}
                            width="500px"
                        />
            }
        </div>
    )
}

export default Avatar
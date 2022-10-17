import React, { useEffect, useState } from "react"


function Content({ styles }) {

    const types = ['posts', 'comments', 'albums']
    const [type, setType] = useState('posts')
    const [title, setTitle] = useState()
    const [data, setData] = useState([])
    const [scroll, setScroll] = useState(false)

    useEffect(() => {

        document.title = title ?? 'Joker App'
    })

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    useEffect(() => {

        // const handlerScroll = () => setScroll(window.scrollY >= 200)
        const handlerScroll = () => {
            if (window.scrollY >= 200) {

                setScroll(true)
            } else {

                setScroll(false)
            }
        }
        window.addEventListener('scroll', handlerScroll)

        // return () => {

        //     window.removeEventListener('scroll', handlerScroll)
        //     console.log('unmount.....')
        // }
    }, [])

    return (

        <div
            style={{...styles}}
        >

            <h1>Joker</h1>
            {
                types.map((item, index) => {

                    return (

                        <button
                            key={index}
                            style={{

                                marginRight: 20
                            }}
                            onClick={() => setType(item)}
                        >{item}</button>
                    )
                })
            }
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            {
                scroll && <button
                style={{

                    position: 'fixed',
                    right: 20,
                    bottom: 40,
                }}
                onClick={() =>  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })}
                >Go to top</button>
            }
            {
                data.map((row, index) => {

                    return (

                        <li key={index}>{row.title || row.name}</li>
                    )
                })
            }
        </div>
    )
}

export default Content
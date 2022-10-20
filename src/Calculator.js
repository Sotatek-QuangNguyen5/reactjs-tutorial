import { useEffect, useMemo, useRef, useState } from "react"


function Calculator({ styles }) {

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [product, setProduct] = useState([])

    const nameRef = useRef()
    
    const handleAdd = () => {

        setProduct([...product, {

            name: name,
            cost: +cost
        }])
        setName('')
        setCost('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        
        const result = product.reduce((sum, value) => {
        
                console.log('re calculator...')
                return sum + value.cost
            }, 0)
            
        return result    
    }, [product])

    return (

        <>
            <div
                style={{ ...styles }}
            >
                <input
                    type='text'
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef}
                />
                <br/><br/>
                <input
                    type='text'
                    placeholder="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                >Add</button>
                <br/><br/>
                <h2>total: {total}</h2>
                {
                    product.map((item, index) => {

                        return (

                            <li key={index}>product name : {item.name}, cost : {item.cost}</li>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Calculator
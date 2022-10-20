import { memo } from 'react'

function Memo({ count }) {

    console.log('okeeee')

    return (

        <div>
            <h1>Memo Component</h1>
            <h1>{count}</h1>
        </div>
    )
}

export default memo(Memo)
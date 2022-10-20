import { memo } from 'react'

function Memo({ count, onIncrease }) {

    console.log('okeeee')

    return (

        <div>
            <h1>Memo Component</h1>
            <h1>{count}</h1>
            <button
                onClick={onIncrease}
            >Increase</button>
        </div>
    )
}

export default memo(Memo)
import React, { useContext } from 'react'
import { counterContext } from './Index';


function CompA() {
    // import the counterContext from the Index.js file and load to a variable
    const countContext = useContext(counterContext)
    return (
        <div> Component A

            <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => countContext.countDispatch({ type: 'increment' })}>+</button>

        </div>
    )
}

export default CompA

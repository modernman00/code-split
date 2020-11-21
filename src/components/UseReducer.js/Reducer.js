import React, { useReducer, useState } from 'react'

// const initial = 10

const initial =  {
        firstCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return {...state, firstCounter: state.firstCounter + 1}
        case 'decrease':
            return {...state, firstCounter: state.firstCounter - 1}
        case 'reset':
            return 0
        default:
            return state
    }
}

function Reducer() {
    const [count, dispatch] = useReducer(reducer, initial)
// count refers to the entire state value
    const [val, setVal] = useState('')

    return (
        <div>
            <h1>USING HOOK REDUCER</h1>
            <h2>Start editing me {count.firstCounter} - {val}</h2>
            <button onClick={() => dispatch({ type: val})} > Increase </button>
            <button onClick={() => dispatch({ type: 'decrease'})  } > Decrease </button>
           
            <input type='text' value={val} onChange={(event) => setVal(event.target.value)} />


        </div>
    )
}

export default Reducer


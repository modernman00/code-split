import React, { useReducer } from 'react'
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
export const counterContext = React.createContext()

const initialState = { count: 35 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1 };
        case 'decrement':
            return {...state, count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Index() {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1> This is the Count: {counter.count}</h1>

            <counterContext.Provider value = {{ countState: counter.count, countDispatch: dispatch }}>
                <CompA />
                <CompB />
                <CompC />

            </counterContext.Provider>

        </div>
    )
}

export default Index

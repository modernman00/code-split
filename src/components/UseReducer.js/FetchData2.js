import React, { useState, useEffect, useReducer} from 'react'
import axios from 'axios'

 const initialState = {
        loading: true,
        error: '',
        post: {}
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'SUCCESS':
                return { ...state, post: action.payload, loading: false }
            case 'FAILURE':
                return { ...state, error: action.payload, loading: false }  
            default:
                return state
        }
    }


function FetchData() {
   const [data, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => dispatch({ type: 'SUCCESS', payload: response.data}))
        .catch(error => dispatch({ type: 'FAILURE', payload: error}))
    }, [])

    return (
         (data.loading) ? <h1> Loading...</h1> :
        <div>
           
            <h1>Data Title :  { data.post.id}  </h1>

            
        </div>
    )
}

export default FetchData

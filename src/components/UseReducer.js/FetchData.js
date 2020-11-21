import React, { useState, useEffect} from 'react'
import axios from 'axios'

function FetchData() {

    const [data, setData] = useState({
        loading: true,
        error: '',
        post: {}
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => setData({ post: response.data, loading: false}))
        .catch(error => setData(error))
    }, [])

    console.log(data.post)

    return (
         (data.loading) ? <h1> Loading...</h1> :
        <div>
           
            <h1>Data Title :  { data.post.body}  </h1>

            
        </div>
    )
}

export default FetchData

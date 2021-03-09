<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import Foods from './Foods'
import axios from 'axios'

=======
import React from 'react'
import Foods from './Foods'
>>>>>>> 777437b43d9835f89af8eb027bfcc9459bd80b00

const Homepage = () => {
    useEffect(() => {
        getFoods()
    },[])
    const [foods, setFoods] = useState([])
    const getFoods = async () => {
        let res = await axios.get('/api/foods')
        setFoods(res.data)
    }
    return (
        <div>
            <h1>Bobs Burgers</h1>
<<<<<<< HEAD
            <Foods foods={foods}/>
            
=======
            <Foods />
>>>>>>> 777437b43d9835f89af8eb027bfcc9459bd80b00
        </div>
    )
}
export default Homepage
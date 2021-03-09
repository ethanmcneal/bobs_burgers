import React, {useState, useEffect} from 'react'
import Foods from './Foods'
import axios from 'axios'


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
            <Foods foods={foods}/>
            
        </div>
    )
}
export default Homepage
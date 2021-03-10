import React, {useState, useEffect} from 'react'
import Foods from './Foods'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


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
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1>Bobs Burgers</h1>
            <Link to='/foods/new'>
                <Button>New Food</Button>
            </Link>
            
            </div>
            
        
            
            <Foods foods={foods}/>
        </div>
    
            
        
    )
}
export default Homepage
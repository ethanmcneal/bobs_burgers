import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'



const Cooks = () => {

    useEffect(()=>{
        getCooks()
    },[])

    const [cooks, setCooks] = useState([])
       
    const getCooks = async () => {
        try{
            let res = await axios.get('/api/cooks')
            setCooks(res.data)
            console.log(res)
        } catch(err){
            alert('error occurred please look at the console')
        }
    }

    const renderCooks = () => {
        return cooks.map ( cook => {
            return (
                 <div>
                    < br />
                     <h2>The cook's name is: {cook.name}</h2>
                     <h3>Their specialty is: {cook.specialty}</h3>
                 </div>
            )
        })
    }

    return (
        <>
            <h1> 
                <span>Cooks</span>
                <p></p>
                <Link to='/cooks/new'>
                    <Button>New Cook</Button>
                </Link>
            </h1>
            {renderCooks()}
        </>
    )
}
export default Cooks


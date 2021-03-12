import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import CookUpdate from "./CookUpdate"




const Cooks = () => {

    useEffect(()=>{
        getCooks()
    },[])

    const [cooks, setCooks] = useState([])
    const [showForm, setShowForm] = useState(false)
    
    let history = useHistory()
       
    const getCooks = async () => {
        try{
            let res = await axios.get('/api/cooks')
            setCooks(res.data)
            // console.log(res)
        } catch(err){
            alert('error occurred please look at the console')
        }
    }

    const deleteCook = async(id) => {
        let res = await axios.delete(`/api/cooks/${id}`)
        history.push('/cooks')
        window.location.reload()
    }

    // const editCook = async(id) => {
    //     let res = await axios.push(`/api/cooks/${id}`)
    //     history.push('/cooks')
    // }

    const renderCooks = () => {
        return cooks.map ( cook => {
            return (
                 <div>
                    < br />
                     <h2>The cook's name is: {cook.name}</h2>
                     <h3>Their specialty is: {cook.specialty}</h3>
                     <Button onClick={()=>deleteCook(cook.id)}>Delete</Button>
                     <Button onClick={ ()=> {setShowForm(!showForm)}}>Edit</Button>
                     {showForm && <CookUpdate key={cook.id} cook={cook} /*name={cook.name} specialty={cook.specialty}*//>}
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


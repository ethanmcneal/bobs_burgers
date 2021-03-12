


import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const CookUpdate = (props) => {
    const {id, cook} = props
    const [nameInt, setName] = useState('')
    const [specialtyInt, setSpecialty] = useState('')
   
    const handleSubmit = async(e, id) =>{
      e.preventDefault()
      try{
            let res = await axios.put(`/api/cooks/${id}`, {name: nameInt, specialty: specialtyInt})
            console.log(res)
            setName(res.data.name)
            setSpecialty(res.data.specialty)
        }catch(err){
            alert(err)
        }
    }
    return(
        <div>
        <h1> Editing Cook Name: fix stuff here </h1>
            <Form onSubmit={(e)=>handleSubmit(e, cook.id)}>
            <Form.Field>
                <p>Name</p>
                <input 
                value={nameInt}
                onChange={(e) => setName(e.target.value)}
                defaultValue={nameInt}
                placeholder="Name" 
                />
            </Form.Field>
            <Form.Field>
                <p>Specialty</p>
                <input 
                value={specialtyInt}
                onChange={(e) => setSpecialty(e.target.value)}
                defaultValue={specialtyInt}
                placeholder="Specialty" 
                />
            </Form.Field>
            <Button type='submit'>Update</Button>
            </Form>
    </div>
    )
}

export default CookUpdate
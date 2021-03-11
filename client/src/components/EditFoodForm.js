import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const EditFoodForm = (props) => {
    const {defaultName} = props
    const {id} = useParams()
   
    const [name, setName] = useState('')
    const history = useHistory()
    const handleSubmit = async() =>{
        try{
            let res = axios.put(`/api/foods/${id}`,{name})
            setName(res.data)
            history.push('/')
        }catch(err){
            alert(err)
        }
    }
    return( <div>
        <div>
        <h1> Edit Form </h1>
        <h1> Editing food: {defaultName} </h1>
        <Button onClick={history.goBack}>Go back</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <p>Name</p>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue={defaultName}
                placeholder={`${defaultName}`} />
                
                </Form.Field>
                <Button type='submit'>Edit</Button>
            </Form>
        
    </div>
    )
}

export default EditFoodForm
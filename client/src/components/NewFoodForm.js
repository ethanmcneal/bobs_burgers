import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const NewFoodForm = () => {
    const [name, setName] = useState('')
    const history = useHistory()
    const handleSubmit = async() =>{
        try{
            axios.post(`/api/foods`,{name})
        }catch(err){
            alert(err)
        }
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1>New Food form</h1>
            <Button onClick={history.goBack}>Go back</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <p>Name</p>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                placeholder='Name of Food' />
                
                </Form.Field>
                <Button type='submit'>add</Button>
            </Form>
        </div>
    )
}

export default NewFoodForm
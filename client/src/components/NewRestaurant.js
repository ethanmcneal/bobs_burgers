import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Button, Form } from "semantic-ui-react"
import axios from 'axios'

const NewRestaurant = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory()
    const {id} = useParams()
    const handleSubmit = async() =>{
        try{
            await axios.post(`/api/foods/${id}/restaurants`,{name, address})
            history.goBack()
        }catch(err){
            alert(err)
        }
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1>New restaurant form</h1>
            <Button onClick={history.goBack}>Go back</Button>
            </div>
            <Form onSubmit={handleSubmit}>
            <Form.Field>
                <p>Name</p>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                placeholder='Name of restaurant' />
                
                </Form.Field>
            <Form.Field>
                <p>Address</p>
                <input value={address}
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={address}
                placeholder='Restaurant Address' />    
            </Form.Field>
                <Button type='submit'>add</Button>
            </Form>
        </div>
    )
}


export default NewRestaurant
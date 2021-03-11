import {Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import { useState, } from 'react'
import {useParams} from 'react-router-dom'

const EditRestaurantForm = ({restaurant, foodId}) => {
    // const {nameInt, addressInt, restaurantId, foodId} = props
    const [name, setName] = useState(restaurant.name)
    const [address,setAddress] = useState(restaurant.address)

    // const {foodId} = useParams()
    const handleSubmit = async()=>{

        try{
            let res = await axios.put(`/api/foods/${foodId}/restaurants/${restaurant.id}`,{name, address})
            setName(res.data.name)
            setAddress(res.data.address)


        }catch(err){
            alert(err)
        }
    }

    return(
    <div>
        <h2>Edit Restaurant</h2>
        {/* <h3>{name}</h3> */}
    
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Name</label>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            defaultValue= {name}
            placeholder="Restaurant Name"
            />
        </Form.Field>
        <Form.Field>
            <label>Address</label>
            <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            defaultValue={address}
            />
        </Form.Field>
        <Button type='submit'>Edit</Button>
    </Form>
    </div>
    
    
        )
}

export default EditRestaurantForm
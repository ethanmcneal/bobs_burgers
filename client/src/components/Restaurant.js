import { Card, Button } from "semantic-ui-react"
import {useState, useEffect} from "react"
import EditRestaurantForm from "./EditRestaurant"
import axios from "axios"
import Food from "./Food"
import { useHistory } from "react-router-dom"


const Restaurant = ({foodId, restaurant}) => {
  // const {foodId, id, name, address} = props
  const [showForm, setShowForm] = useState(false)
  const history = useHistory()

  const deleteRestaurant = async() => {
    try {
      let res = await axios.delete(`/api/foods/${foodId}/restaurants/${restaurant.id}`)
      history.push(`/foods/${foodId}`)
    } catch (error) {
      alert(error)
      
    }

  }
  if (showForm) {
    return ( 
      <Card>
    <EditRestaurantForm  foodId={foodId} restaurant={restaurant}/>
    < Button onClick={ ()=>{setShowForm(!showForm)}}>Hide Form</Button>
    </Card>
    )
    
  } else {
  return (
    <div >
      <Card>
        <Card.Content>
          <Card.Header>{restaurant.name}</Card.Header>
          <Card.Meta>{restaurant.id}</Card.Meta>
          <Card.Description>
            {restaurant.address}
          </Card.Description>
        </Card.Content> 
        <div style={{display:'flex'}}>
        < Button onClick={ ()=>{setShowForm(!showForm)}}>Edit</Button>
        {/* {showForm && <EditRestaurantForm  foodId={foodId} restaurant={restaurant}/>} */}
        <Button onClick={deleteRestaurant} style={{width:'200px'}} color='red'>Delete</Button>
        </div>
      </Card>
    </div>
  )}
}
export default Restaurant
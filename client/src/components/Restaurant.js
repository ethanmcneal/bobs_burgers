import { Card, Button } from "semantic-ui-react"
import {useState, useEffect} from "react"
import EditRestaurantForm from "./EditRestaurant"


const Restaurant = ({foodId, restaurant}) => {
  // const {foodId, id, name, address} = props
  const [showform, setshowform] = useState(false)
  
  return(

    <div>
      <Card>
        <Card.Content>
          <Card.Header>{restaurant.name}</Card.Header>
          <Card.Meta>{restaurant.id}</Card.Meta>
          <Card.Description>
            {restaurant.address}
          </Card.Description>
        </Card.Content>
        < Button onClick={ ()=>{setshowform(!showform)}}>Edit</Button>
        {showform && <EditRestaurantForm  foodId={foodId} restaurant={restaurant}/>}
      </Card>
    </div>
  )
}
export default Restaurant
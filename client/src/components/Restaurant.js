import { Card, Button } from "semantic-ui-react"
import {useState, useEffect} from "react"
import EditRestaurantForm from "./EditRestaurant"


const Restaurant = (props) => {
  const {foodId, id, name, address} = props
  const [showform, setshowform] = useState(false)
  
  return(

    <div>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{id}</Card.Meta>
          <Card.Description>
            {address}
          </Card.Description>
        </Card.Content>
        < Button onClick={ ()=>{setshowform(!showform)}}>Edit</Button>
        {showform && <EditRestaurantForm/>}
      </Card>
    </div>
  )
}
export default Restaurant
import { Card } from "semantic-ui-react"


const Restaurant = (props) => {
  const {foodId, id, name, address} = props
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
      </Card>
    </div>
  )
}
export default Restaurant
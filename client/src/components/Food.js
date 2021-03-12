import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import { Button, Card, } from 'semantic-ui-react'
import EditFoodForm from './EditFoodForm'
import Restaurant from './Restaurant'

const Food = () => {
  const {id} = useParams()
  const [food, setFood] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [showForm, setShowForm] = useState(false)
  let history = useHistory();

  useEffect(() => {
    // showRestaurants(),
    showFood()
},[])

  const showFood = async () => {
    let res = await axios.get(`/api/foods/${id}`)
    setFood(res.data.food) 
    setRestaurants(res.data.restaurants)
    console.log(res.data.food)
    console.log(res.data.restaurants)
  }

  const deleteFood = async () => {
    let res = await axios.delete(`/api/foods/${id}`)
    history.push('/')
  }

  const renderRestaurants = ()=>{
    return restaurants.map(restaurant => <Restaurant key={restaurant.id} foodId={id} restaurant={restaurant} showFood={showFood}/>)
  }

  return (
    <>
    <div >
    
    <Card fluid color='red' style={{display:'flex', justifyContent:'space-between'}}>
      <h1>{food.name}</h1>
      
      <div style={{display:'flex'}}>
    
    <Button onClick={deleteFood} color='red' style={{width:'200px'}}>delete</Button>
    
    <Button onClick={() => {setShowForm(!showForm)}} style={{width:'200px'}}>{showForm ? 'Hide Edit Form' : 'Show Edit Form'}</Button>
    {showForm && <EditFoodForm defaultName={food.name} showFood={showFood}/>}
      </div>
    </Card>
    </div>
    <Link to={`/foods/${food.id}/restaurants/new`}>
      <Button>New restaurant</Button>
      </Link>
    <Button onClick={()=> history.goBack()}>Go BAAAAACK!</Button> 
    
    <div >
    {renderRestaurants()} 
    </div>
    </>
  )

}
export default Food

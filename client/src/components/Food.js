import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Restaurant from './Restaurant'

const Food = () => {
  const {id} = useParams()
  const [food, setFood] = useState([])
  const [restaurants, setRestaurants] = useState([])
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
    return restaurants.map(restaurant => <Restaurant key={restaurant.id} foodId={id} {...restaurant}/>)
  }

  return (
    <>
    <h1>{food.name}</h1>
    <h3>{renderRestaurants()}</h3>

    <Button onClick={deleteFood}>delete</Button>
    <Button onClick={()=> history.goBack()}>Go BAAAAACK!</Button>
    </>
  )

}
export default Food

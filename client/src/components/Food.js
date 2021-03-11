import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
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
    return restaurants.map(restaurant => <Restaurant key={restaurant.id} foodId={id} {...restaurant}/>)
  }

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <h1>{food.name}</h1>
    <Button onClick={deleteFood} color='red'>delete</Button>
    <Button onClick={()=> history.goBack()}>Go BAAAAACK!</Button>
    </div>
    <div>
      
    <Button onClick={() => {setShowForm(!showForm)}}>{showForm ? 'Hide Edit Form' : 'Show Edit Form'}</Button>
    {showForm && <EditFoodForm defaultName={food.name}/>}
    </div>
    <h3>{renderRestaurants()}</h3>

    
    </>
  )

}
export default Food

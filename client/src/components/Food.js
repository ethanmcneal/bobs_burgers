import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'

const Food = () => {
  const {id} = useParams()
  let history = useHistory();

  const deleteFood = async () => {
    let res = await axios.delete(`/api/foods/${id}`)
    history.push('/')
  }
  return (
    <>
    <h1>Food has an id of: {id}</h1>

    <p onClick={deleteFood}>delete</p>
    <p onClick={()=> history.goBack()}>Go BAAAAACK!</p>
    </>
  )

}
export default Food

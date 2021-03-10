import axios from 'axios'
import {useState} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

const CookNew = () => {
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const history = useHistory()

  const handleSubmit = async () => {
    try{
      axios.post(`/api/cooks`,{name, specialty})
      history.push('/cooks')

    } catch(err) {
      alert('error')
    }
  }

  return(
    <div>
      <h1>New Cook Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Specialty</label>
          <input
            value={specialty}
            onChange={(e)=>setSpecialty(e.target.value)}
            placeholder='Specialty' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )

}
//need to refresh page to show newest list. 
export default CookNew
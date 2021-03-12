import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from "semantic-ui-react"



const Foods = (props) => {
    const {foods} = props
    const renderFoods = () => {
        return foods.map (food => {
            return (
                <Link to={`/foods/${food.id}`}>
               <Card>
                <Card.Content>
               <Card.Header>{food.name}
                </Card.Header> 
                </Card.Content>
                </Card>
                </Link>
            )
        })
    }
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
            {renderFoods()}
            </div>
            
            
        </div>
    )
}
export default Foods


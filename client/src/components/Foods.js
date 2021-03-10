import { useState } from "react"
import React from 'react'
import { Link } from 'react-router-dom'



const Foods = (props) => {
    const {foods} = props
    const renderFoods = () => {
        return foods.map (food => {
            return (
                <Link to={`/foods/${food.id}`}>
                <div>
                    <h2>{food.name}</h2>
                    
                </div>
                </Link>
            )
        })
    }
    return (
        <div>
            {renderFoods()}
        </div>
    )
}
export default Foods
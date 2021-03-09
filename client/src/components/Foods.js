import { useState } from "react"
import React from 'react'

const dummyData = [
    {name: 'Taco'},
    {name: 'Burger'}
]

const Foods = () => {
    const renderFoods = () => {
        return dummyData.map (food => {
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
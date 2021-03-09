import { useState } from "react"
import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 777437b43d9835f89af8eb027bfcc9459bd80b00

const dummyData = [
    {name: 'Taco'},
    {name: 'Burger'}
]

const Foods = () => {
    const renderFoods = () => {
<<<<<<< HEAD
        return dummyData.map (food => {
            return (
                <Link to={`/foods/${food.id}`}>
                <div>
                    <h2>{food.name}</h2>
                    
                </div>
                </Link>
=======
        return dummyData.map( food => {
            return (
            <div>
                <h2>{food.name}</h2>
            </div>
>>>>>>> 777437b43d9835f89af8eb027bfcc9459bd80b00
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
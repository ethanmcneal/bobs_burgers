import React from 'react'

const dummyData = [
    {name: 'Taco'},
    {name: 'Burger'}
]

const Foods = () => {
    const renderFoods = () => {
        return dummyData.map( food => {
            return (
            <div>
                <h2>{food.name}</h2>
            </div>
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
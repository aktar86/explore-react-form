import React from 'react';

const Meal = ({meal}) => {
    const {idMeal, strMeal, Dessert, strMealThumb} = meal;
    console.log(meal);
    return (
        <div>
            <img src={strMealThumb} />
            <h1>{idMeal}</h1> 
            <p>{strMeal}</p>
        </div>
    );
};

export default Meal;
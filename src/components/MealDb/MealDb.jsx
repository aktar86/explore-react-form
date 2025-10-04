import React, { use, useEffect, useState } from "react";
import Meal from "./Meal";

const MealDb = ({mealPromise}) => {
//   const [meal, setMeal] = useState(null);
const mealArry = use(mealPromise)
const mealData = mealArry.meals;
console.log(mealData);

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((res) => res.json())
//       .then((data) => {
//         setMeal(data.meals[0]); // প্রথম খাবারটা সেট করা হচ্ছে
//       });
//   }, []);

//   if (!meal) {
//     return <p>Loading...</p>;
//   }


console.log(mealData);

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
      {/* <h2>{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "10px", textAlign: "justify" }}>
        {meal.strInstructions}
      </p> */}

      {
        mealData.map((meal, index) => <Meal key={index} meal={meal}></Meal> )
      }
    </div>
  );
};

export default MealDb;

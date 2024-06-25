import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Findmeal } from "./Findmeal";

export function RandomMeal() {

   const [dishes, setDishes] = useState([]);
   const navigate = useNavigate();
   
    useEffect(() => {
      axios
         .get("https://www.themealdb.com/api/json/v1/1/random.php")
         .then((res) => {
            console.log(res);
            setDishes(res.data.meals);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <ul>
            <h1>Meal of the Day</h1>

            {dishes.map((meal) => (
                 <>
                 <div>
                  <div>
                  <Link to={`/${meal.idMeal}`}>
                   {meal.strMeal}
                 </Link>
                  </div>
                 
                     <div>
                      <span>{meal.strCategory}</span>|<span>{meal.strArea}</span>
                    </div>
                     <div>
                     <Link to={`/${meal.idMeal}`}>
                     <img src={meal.strMealThumb} alt={meal.strMeal}/>
                  </Link>
                
                      </div>
                 

                 </div>
                 </>
                 
               
              ))}
         </ul>
         
         <Findmeal />
      </div>
   );
};



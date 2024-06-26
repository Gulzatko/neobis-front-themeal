import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Findmeal } from "./Findmeal";
import styles from "./RandomMeal.module.scss";

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
      <div className={styles.random}>
        
            <h1 className={styles.random_h1}>Meal of the Day</h1>
               {dishes.map((meal) => (
                  <div className={styles.random_section}>
                       <Link className={styles.random_title} to={`/${meal.idMeal}`}>
                           {meal.strMeal}
                          </Link>
                          <div className={styles.random_category}>
                            <span >{meal.strCategory}</span>|<span>{meal.strArea}</span>
                           </div>
                         <Link className={styles.img_link} to={`/${meal.idMeal}`}>
                           <img className={styles.random_img} src={meal.strMealThumb} alt={meal.strMeal}/>
                         </Link>
                   </div>
                   
              ))}
       
         
         <Findmeal />
      </div>
   );
};



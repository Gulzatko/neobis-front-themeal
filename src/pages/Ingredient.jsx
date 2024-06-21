
import{useParams, useNavigate} from "react-router-dom";
import React,{useState, useEffect } from 'react';

import {getMealDetails} from "../api";




const  Ingredient=()=>  {
  const {id}= useParams();
  
  const[mealData, setMealData]=useState([]);
  const [mealYoutube, setMealYoutube]=useState();
  const [mealIngredients, setMealIngredients]=useState([])

  const navigate = useNavigate();
  const goBack =()=> navigate(-1);

  function getYoutubedEmbed(url){
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
   const match = url.match(regExp);
   return(match && match[2].length ===11) 
   ? match[2]: null;
  }
  
 useEffect(()=>{
  getMealDetails(id).then((data)=>{
        const meal = data.data.meals[0];
        console.log(meal);
        setMealData(meal);
        let mealCount = 1;
        const mealIngredientsArray = []
         setMealYoutube(getYoutubedEmbed(meal.strYoutube))

         while(meal[`strIngredient${mealCount}`]){
            const mealData = {
                ingredient : meal[`strIngredient${mealCount}`],
                measure: meal[`strMeasure${mealCount}`]
            }
            mealIngredientsArray.push(mealData);
            mealCount++
         }
         setMealIngredients(mealIngredientsArray)

    })
 },[])
 
 
  return ( <>
      <div className="meal-info-container">
        <button onClick={goBack}>Go back</button>
        <div className = "meal-info">
            <h1>{mealData.strMeal}</h1>
            <h3>{mealData.strCategory}</h3>
            <h3>{mealData.strArea}</h3>
            <div className="meal-ingredients">
              {mealIngredients.map((value, index)=>
               <h2 key={value.ingredient}>
                {value.ingredient}-
                 <strong>{value.measure}</strong>
               </h2>)}
            </div>

        </div>
        <div className="meal-instruction">
            <h1>Instruction</h1>
            <p>{mealData.strInstructions}</p>
            {/* <iframe className="meal_iframe" allow ="fullscreen;"
              src={mealData.strYoutube}></iframe> */}

        </div>
         
           
     </div>
     </>
  )
  
}
export {Ingredient};


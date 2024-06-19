
import{useParams, Link, useNavigate} from "react-router-dom";
import React,{useState, useEffect } from 'react';
import axios from 'axios';


const Ingredient=()=>  {
  const {idMeal}= useParams();
  const [dish, setDishes] = useState(null);
  const navigate = useNavigate();

  const goBack =()=> navigate(-1);
  useEffect(()=>{
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php/i=${idMeal}")
      .then(res =>{
           console.log(res);
           setDishes(res.data.meals);
      })
      .catch(err=>{
          console.log(err)
      })
  },[dish])
 
 
  return (
      <div>
        <button onClick={goBack}>Go back</button>
        {dish && (
            <>
             <h1>{dish.strMeal}</h1>
             <p>
    
             </p>
             <img src={dish.strMealThumb}/>
             <Link to={`/dishes/${idMeal}/youtube`}>Watch on Youtube Channel</Link>
            </>
        )}
     </div>
  )
  
}
export {Ingredient};

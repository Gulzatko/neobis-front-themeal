
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import{Link, useParams, useNavigate} from 'react-router-dom';

const RandomMeal =()=>{
   
    
    const [dishes, setDishes] = useState([]);
    const navigate = useNavigate();
    
   
   
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res =>{
             console.log(res);
             setDishes(res.data.meals);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
        <ul>
            <h1>Meal of the Day</h1>
          
            {
            dishes.map(meal =>
                <Link key={meal.idMeal} to={`/dishes/${meal.idMeal}`}>
                
                <h1>{meal.strMeal}</h1>
                <h2>{meal.strCategory}</h2>
                <img src={meal.strMealThumb}></img>
                 
                </Link>
             )
            }
        </ul>
    </div>
    )
 
}

export  {RandomMeal};
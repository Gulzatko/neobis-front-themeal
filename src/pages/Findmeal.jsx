import React, {useState, useEffect} from 'react';
import{useParams, Link, useSearchParams} from "react-router-dom";
import axios from 'axios';

const Findmeal =()=> {
  const {findmeal} = useParams([])
  const [searchDish, setSearchDish] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const mealQuery = searchParams.get('meal')|| "";
  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({searchDish:query})
  }
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php")
        .then(res =>{
             console.log(res);
             setSearchDish(res.data.meals)
           })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
  return (
    <>
     <h1>Find your Meal</h1>
     <form autoComplete='off' onSubmit={handleSubmit}>
      <input type="text" value="search" />
      <button type="button">Search</button>
    </form>
    <Link to="/findmeal">  </Link>
        {searchDish.filter(
          dish=> dish.strMeal.includes(mealQuery)
        ).map(dish=>(
          <Link key={dish.idMeal} to={`/findmeal/${dish.idMeal}`}>
             <li>
               <h1>{dish.strMeal}</h1>
               <img src={dish.strMealThumb}></img>
             </li>
          </Link>
        ))
       }
    </>     
   
  )
}
export {Findmeal};
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Findmeal =()=> {

  const [searchDish, setSearchDish] = useState({});
  const [id, setId ] = useState('');
  const [buttonClick, setButtonClick] = useState("");
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buttonClick}`)
        .then(res =>{
             console.log(res);
             setSearchDish(res.data.meals[0])
           })
        .catch(err=>{
            console.log(err)
        })
    },[buttonClick])
    const handleButton = ()=>{
      setButtonClick(id)
    }

  return (
    <div>
        <ul>
            <h1>Find your Meal</h1>
            <input type="text"  value={id} onChange={e =>setId(e.target.value)} placeholder='Find your meal'/> 
            <button type="button" onClick={handleButton} >Search</button>
            
            <ul>
             {
             buttonClick.map(meal => <li key={meal.idmeal}>
                <h1>{meal.strMeal}</h1>
                <h2>{meal.strCategory}</h2>
                <img src={meal.strMealThumb}></img>
                 </li>)
            }
            </ul>
           
        </ul>
    </div>
  )
}

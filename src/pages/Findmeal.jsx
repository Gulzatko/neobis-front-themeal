import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const Findmeal = () => {
   const { findmeal } = useParams([]);
   const [searchDish, setSearchDish] = useState([]);

   //  const mealQuery = searchParams.get("meal") || "";
   const [searchVal, setSearchVal] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      if (searchVal) {
         fetchSearchData(searchVal);
      }
   };

   const fetchSearchData = async (searchParam) => {
      return axios
         .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`)
         .then((res) => {
            console.log("resres ", res);
            setSearchDish(res.data.meals);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleSearch = (e) => {
      setSearchVal(e.target.value);
   };

   return (
      <>
         <h1>Find your Meal</h1>
         <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" value={searchVal} onChange={handleSearch} />
            <button type="submit">Search</button>
         </form>
         <Link to="/findmeal"> </Link>
         {searchDish.map((dish) => (
            <Link key={dish.idMeal} to={`/findmeal/${dish.idMeal}`}>
               <li>
                  <h1>{dish.strMeal}</h1>
                  <img src={dish.strMealThumb}></img>
               </li>
            </Link>
         ))}
      </>
   );
};
export { Findmeal };

import React, { useState } from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios";
import styles from './Findmeal.module.scss';

export function Findmeal () {
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
      <div className={styles.findmeal}>
         <h1 className={styles.findmeal_h1}>Find your Meal</h1>
         <form className={styles.findmeal_form} autoComplete="off" onSubmit={handleSubmit}>
            <input className={styles.findmeal_input} type="text" value={searchVal} onChange={handleSearch} />
            <button className={styles.findmeal_btn} type="submit">Search</button>
         </form>
        {searchDish.map((dish) => (
              
               <Link className={styles.findmeal_link} to={`/${dish.idMeal}`}>
                  <h1 className={styles.link_h1}>{dish.strMeal}</h1>
                  <img className={styles.findmeal_img} src={dish.strMealThumb}></img>
               </Link>
           
         ))}
      </div>
   );
};


import axios from "axios";

const instance = axios.create({
    baseUrl:'http://www.themealdb.com/api/json/v1/1/'
})
export const getRandoMeal=()=>instance.get("random.php");
export const getMealDetails=(id)=>instance.get(`lookup.php?i=${id}`);
export const searchMeals=(search)=>instance.get(`random.php?s={search}`);
export const getCategories=()=>instance.get(`categories.php`);

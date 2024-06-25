
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";


const Ingredient=()=> {
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [mealData, setMealData] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    axios({
      url: url,
    })

      .then((data) => {
       setMealData(data.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [url]);


  const getMealIngredients = (mealData) => {
    const mealIngredientsArray=[];
     
      for (let i = 1; i <= 20; i++) {
        const mealIngredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (mealIngredient) {
          mealIngredientsArray.push(`${measure} ${mealIngredient}`);
        }
      }
      return mealIngredientsArray
    };

    const instructionsFormat = (instructions) => {
      return instructions.split("\r\n").filter((instruction) => instruction);
    };

    return (
      <div>
        {mealData ?(
          <>
            <div className="ingredients_container">
              <div className="ingredients_info">
                <h2>{mealData.strMeal}</h2>
                <div>
                  <span>{mealData.strCategory}</span>|<span>{mealData.strArea}</span>
                </div>
              </div>
              <div className="mealIngridienst_img">
                <img src={mealData.strMealThumb} alt={mealData.strMeal} />
              </div>
            </div>
            <div className="classes.instructions">
              <h3>Instructions</h3>
              <ul>
                {
                  instructionsFormat(mealData.strInstructions).map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li>
                    )
                  )
                }
              </ul>
            </div>

            {mealData.strYoutube && (
              <div className="btn">
                <button onClick={goBack} className="back_btn">
                  Go back
                </button>
                <Link
                  to={mealData.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer">
                  Watch on YouTube
                </Link>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

    );
  }

  export {Ingredient} ;

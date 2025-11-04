import React, { useEffect, useState } from "react";
import axios from "axios";

import '../style/api.scss'

const spoonacularAPIKEY = "4efcd35a1d374719a6c8c9ab2eb5f1ce";

export default function Api({ searchFood, showList }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          apiKey: spoonacularAPIKEY,
          diet: "vegan",
          number: 50,
        },
      })
      .then((resp) => setRecipes(resp.data.results))
      .catch((err) => console.error(err));
  }, []);

  const filteredFood = recipes.filter((food) =>
    food.title.toLowerCase().startsWith(searchFood.toLowerCase())
  );

  return (
    <div>
      <h1>Ricette Vegane 🍃</h1>
      {showList && (
        <ul className="container">
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => (
              <li className='card' key={food.id}>
                <img src={food.image} alt={food.title} width="100%" />
                <strong>{food.title}</strong>
              </li>
            ))
          ) : (
            <p>Nessun food vegan trovato.</p>
          )}
        </ul>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

const spoonacularAPIKEY = "4efcd35a1d374719a6c8c9ab2eb5f1ce";

export default function Api() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [searchFood, setSearchFood] = useState('');
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey: spoonacularAPIKEY,
          diet: "vegan", // <--- filtro per vegano
          number: 50,    // quante ricette vuoi ottenere min 10 max 100 imposto da spoonacular
        },
      })
      .then((resp) => {
        console.log(resp.data.results);
        setRecipes(resp.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

    const filteredFood = recipes.filter((food) =>
        food.title.toLowerCase().startsWith(searchFood.toLowerCase())
    );

    const handleSearch = () => {
        setSearchFood(name.trim());
        setShowList(true);
    };

  return (
    <div>
        <input
            type='text'
            placeholder='search a Ivegan food...'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>serach</button>
      <h1>Ricette Vegane 🍃</h1>
      {/* <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul> */}

      {
        showList && (
            <ul>
                {
                    filteredFood.length > 0 ? (
                        filteredFood.map((food) => (
                            <li key={food.id}>
                                <strong>{food.title}</strong>
                                <img
                                    src={food.image}
                                    alt={food.image}
                                    width='100%'
                                />
                            </li>
                        ))
                    ) : (
                        <p>Nessun food vegan trovato.</p>
                    )
                }
            </ul>
        )}
    </div>
  );
}

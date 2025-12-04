import { useState, useEffect } from "react";

import axios from "axios";
import "../style/App.css";

// Import componenti
import Api from "./Api";
import Navbar from "./Navbar";
import Description from "./Description";
import Header from "./Header";
import TopFood from "./TopFood";
import Footer from './Footer';

export default function AppComponent() {
  const [name, setName] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [showList, setShowList] = useState(false);
  const [recipes, setRecipes] = useState([]);

  //console.table(recipes);

  const spoonacularAPIKEY = "4efcd35a1d374719a6c8c9ab2eb5f1ce";
  //https://spoonacular.com/food-api/docs

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
          apiKey: spoonacularAPIKEY,
          diet: "vegan",
          number: 50,
        },
      }
    )
    .then((resp) => setRecipes(resp.data.results))
    .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    if (name.trim()); // voglio che vengano mostrate tutte le ricette.
    setSearchFood(name.trim());
    setShowList(true); // Mostra il componente Api
  };

  return (
    <>
      {/* Navbar con barra di ricerca */}
      <Navbar name={name} setName={setName} handleSearch={handleSearch} />

      {/* Sezione introduttiva */}
      <Header />
      <Description recipes={recipes} />
      <TopFood recipes={recipes} />

      {/* 🔹 Se showList è true, mostra il componente Api */}
      {showList && (
        <Api
          setRecipes={setRecipes}
          recipes={recipes}
          searchFood={searchFood}
          showList={showList}
        />
      )}
      <Footer />
    </>
  );
}

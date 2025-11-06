import { useState } from "react";

// import component
import "./App.css";
import Api from "./component/Api";
import Navbar from "./component/Navbar";
import Description from './component/Description'

function App() {
  const [name, setName] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [showList, setShowList] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    setSearchFood(name.trim());
    setShowList(true);
  };

  return (
    <>
      <Navbar name={name} setName={setName} handleSearch={handleSearch} />
      <Description recipes={ recipes } />
      <Api setRecipes={setRecipes} recipes={recipes} searchFood={searchFood} showList={showList} />
    </>
  );
}

export default App;
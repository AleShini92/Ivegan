import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// import component
import Api from "./Api";
import Navbar from "./Navbar";
import Description from "./Description";
import Header from "./Header";
import TopFood from "./TopFood";

export default function AppContent() {
  const [name, setName] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [showList, setShowList] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (name.trim());
    setSearchFood(name.trim());
    setShowList(true);
    navigate("/api"); // vai alla pagina dei risultati
  };

  return (
    <>
      {/* Navbar visibile su tutte le pagine */}
      <Navbar name={name} setName={setName} handleSearch={handleSearch} />
      <Header />
      <TopFood recipes={recipes} />
      <Description recipes={recipes} />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          // element='/'
        />

        {/*  Pagina dei risultati */}
        <Route
          path="/api"
          element={
            <Api
              setRecipes={setRecipes}
              recipes={recipes}
              searchFood={searchFood}
              showList={showList}
            />
          }
        />
      </Routes>
    </>
  );
}
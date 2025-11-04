import { useState } from "react";
import "./App.css";
import Api from "./component/Api";
import Navbar from "./component/Navbar";

function App() {
  const [name, setName] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    setSearchFood(name.trim());
    setShowList(true);
  };

  return (
    <>
      <Navbar name={name} setName={setName} handleSearch={handleSearch} />
      <Api searchFood={searchFood} showList={showList} />
    </>
  );
}

export default App;

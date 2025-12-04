import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import component
import './style/App.css'
import AppComponent from './component/AppComponent'
import Details from './component/IveganDetails'
 
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AppComponent />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
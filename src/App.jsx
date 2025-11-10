import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//import component
import './style/App.css'
import AppComponent from './component/AppComponent'
 
function App() {

  return (
    <>
    <Router>
      <AppComponent />
    </Router>
    </>
  );
}

export default App;
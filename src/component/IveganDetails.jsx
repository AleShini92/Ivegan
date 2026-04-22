import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";
import Navbar from "./Navbar";

import "../style/recipe-details.scss"

export default function IveganDetails() {
  const { id } = useParams(); // recupero l'ID dall'URL
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);
  const spoonacularAPIKEY = "4efcd35a1d374719a6c8c9ab2eb5f1ce";

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: { apiKey: spoonacularAPIKEY },
      })
      .then((response) => {
        setFood(response.data);
      })
      .catch((err) => {
        console.error("Errore nel fetch del dettaglio:", err);
        setError("Impossibile caricare i dettagli della ricetta");
      });
  }, [id]);

  // Stato di caricamento
  if (!food && !error) {
    return <p>Caricamento in corso...</p>;
  }

  // Stato di errore
  if (error) {
    return <p>{error}</p>;
  }

  // Stato OK
  return (
    <>
    <Navbar/>
    <article className="recipe-details">

      <h1>{food.title}</h1>
      <figure>
        <img src={food.image} alt={food.title} width="400" />
        <figcaption><h2><b>Ricetta:</b></h2></figcaption>
      </figure>

      <section>
        <div className="description">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/>
          </svg>
          <strong>Tempo di preparazione:</strong>
          <p>{food.readyInMinutes} minuti</p>
        </div>
        {/*  */}
        <div className="description">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
           <path d="M311.2 81C289.1 77.9 266.6 81.9 246.8 92.4L172.8 131.9C153.1 142.4 137.2 158.9 127.4 179L90.7 254.6C80.9 274.7 77.7 297.5 81.6 319.5L96.1 402.3C100 424.4 110.7 444.6 126.8 460.2L187.1 518.6C203.2 534.2 223.7 544.2 245.8 547.3L328.8 559C350.9 562.1 373.4 558.1 393.2 547.6L467.2 508.1C486.9 497.6 502.8 481.1 512.6 460.9L549.3 385.4C559.1 365.3 562.3 342.5 558.4 320.5L543.8 237.7C539.9 215.6 529.2 195.4 513.1 179.8L452.9 121.5C436.8 105.9 416.3 95.9 394.2 92.8L311.2 81zM272 208C289.7 208 304 222.3 304 240C304 257.7 289.7 272 272 272C254.3 272 240 257.7 240 240C240 222.3 254.3 208 272 208zM208 400C208 382.3 222.3 368 240 368C257.7 368 272 382.3 272 400C272 417.7 257.7 432 240 432C222.3 432 208 417.7 208 400zM432 336C449.7 336 464 350.3 464 368C464 385.7 449.7 400 432 400C414.3 400 400 385.7 400 368C400 350.3 414.3 336 432 336z"/>
          </svg>
          <strong>Porzioni:</strong>
          <p>{food.servings}</p>
        </div>
      </section>

      <section className="ingredients">
      <h3><b>Ingredienti:</b></h3>
      <ul>
        {food.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      </section>
    </article>
    <Footer />
    </>
  );
}

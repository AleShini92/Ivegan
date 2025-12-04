import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

  // 🔹 Stato di caricamento
  if (!food && !error) {
    return <p>Caricamento in corso...</p>;
  }

  // 🔹 Stato di errore
  if (error) {
    return <p>{error}</p>;
  }

  // 🔹 Stato OK
  return (
    <section className="recipe-details">
      <Link to="/">← Torna alla lista</Link>

      <h1>{food.title}</h1>
      <img src={food.image} alt={food.title} width="400" />

      <p>
        <strong>Tempo di preparazione:</strong> {food.readyInMinutes} minuti
      </p>
      <p>
        <strong>Porzioni:</strong> {food.servings}
      </p>

      <h2>Ingredienti</h2>
      <ul>
        {food.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      {/* <h2>Istruzioni</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: food.instructions || "Nessuna istruzione disponibile.",
        }}
      /> */}
    </section>
  );
}

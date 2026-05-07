import { Link } from "react-router-dom";

import '../style/api.scss'

export default function Api({ recipes, searchFood, showList }) {

  const filteredFood = recipes.filter((food) =>
    food.title.toLowerCase().startsWith(searchFood.toLowerCase())
  );

  return (
    <main className="m-block-20">
      {showList && (
        <ul className="recipes d-grid">
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => (
              <li className="card__recipe pointer" key={food.id}>
                <Link to={`/${food.id}`}>
                  <div className="container__card">
                    <figure className="card__img">
                      <img src={food.image} alt={food.title} title={food.title} width="100%" />
                    </figure>
                    <figcaption className="description">
                      <strong>{food.title}</strong>
                    </figcaption>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>Nessun food vegan trovato.</p>
          )}
        </ul>
      )}
    </main>
  );
}

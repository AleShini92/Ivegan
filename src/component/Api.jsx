import { Link } from "react-router-dom";

import '../style/api.scss'

export default function Api({ recipes, searchFood, showList }) {

  const filteredFood = recipes.filter((food) =>
    food.title.toLowerCase().startsWith(searchFood.toLowerCase())
  );

  return (
    <main className="container__recipes">
      <div className="logo">
        {/* Logo Ivegan */}
        <svg width="50" height="60" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55.9296 3.36984L54.4236 4.86343C50.5724 8.71468 50.5724 14.973 54.4236 18.8242C56.3493 20.7498 58.2749 22.6755 60.2128 24.6134C64.0641 28.4647 70.3224
            28.4647 74.1736 24.6134L75.6672 23.1198C76.4325 22.3545 76.4325 21.0955 75.6672 20.3302L74.1736 18.8366C70.3224 14.9853 64.0641 14.9853 60.2128 18.8366C64.0641
            14.9853 64.0641 8.72702 60.2128 4.87577L58.7193 3.36984C57.9539 2.60452 56.6949 2.60452 55.9296 3.36984ZM40.9319 19.75C35.3525 19.75 30.1805 22.2681 26.7366 26.4527L33.7355
            33.4516C34.8958 34.6119 34.8958 36.4881 33.7355 37.6361C32.5752 38.7841 30.6989 38.7964 29.551 37.6361L23.6507 31.7481L8.29504 65.5206C7.61613 67.0142 7.93707 68.7794 9.09738 69.952C10.2577
            71.1247 12.0229 71.4333 13.5288 70.7544L31.0075 62.805L25.601 57.3984C24.4407 56.2381 24.4407 54.3619 25.601 53.2139C26.7613 52.0659 28.6375 52.0536 29.7855 53.2139L36.7597 60.1881L48.5233
            54.8433C55.0779 51.8684 59.2871 45.3262 59.2871 38.1175C59.2871 27.9709 51.0661 19.75 40.9196 19.75H40.9319Z"
          fill="#FF9500"/>
        </svg>
        <h2 className="title">Ricette Vegane</h2>
      </div>
      {showList && (
        <ul className="recipes">
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => (
              <li className='card__recipe' key={food.id}>
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

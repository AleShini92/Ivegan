import { Link } from "react-router-dom";
import '../style/topFood.scss';
import logo from '../img/logo-xs.svg'

export default function TopFood({recipes = []}) {

    const maxRecipes = 4;
    const limitedRecipes = recipes.slice(0, maxRecipes);

    return (
        <section className="container__top-food">
            <div className="top__food">
                {/* Logo Ivegan */}
                <div className="top__food-text d-flex">
                    <img src={logo} alt="Ivegan logo" title="I love Ivegan" width="50px"/>
                    <p>
                        <span className="f-2">Benessere</span>
                        <span className="f-1">Top Food</span>
                    </p>
                </div>
                {/* Top Food */}
                <ul className="recipes d-flex">
                    {limitedRecipes.length > 0 ? (
                    limitedRecipes.map((food) =>
                        <li className="card__recipe" key={food.id}>
                            <Link to={`/${food.id}`}>
                                <figure className="card__img">
                                    <img src={food.image} alt={food.title} width="100%" />
                                </figure>
                                <figcaption className="description">
                                    <strong>{food.title}</strong>
                                </figcaption>
                            </Link>
                        </li>
                    )
                    ) : (
                    <li>Nessuna ricetta trovata</li>
                    )}
                </ul>
            </div>
            <div className="recipe__search">
                <h2 className="h2">Ricette vegane</h2>
                <span>ricercale tramite la Search bar</span>
            </div>
        </section>
    )
}
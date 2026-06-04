import '../style/header.scss'
import bg_recipe from '../img/bg_recipe.png'

export default function Header() {
    return (
        <header>
            <div className="container__bg d-flex space-around">
                <div className="description">
                    <h1 className="header__text">
                        <p className="title__text m-20"><span>healthy eating</span> is an <span>important</span> part of <span>lifestyle</span>!!</p>
                        <p className="mission__text ml-20 b-f">prepare our delicious recipe vegan food!</p>
                    </h1>
                </div>
                {/* <img src={bg_recipe} alt="image recipe for basil pesto" title="recipe for basil pesto"/> */}
                <div class='photo'>
                    <picture>
                        <source media='(min-width: 300px)'
                            srcset={bg_recipe}/>
                        <source media='(max-width: 500px)'
                            srcset={bg_recipe}/>
                        <img src={bg_recipe}/>
                    </picture>
                </div>
            </div>
        </header>
    )
}
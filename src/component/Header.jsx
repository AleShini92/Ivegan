import '../style/header.scss'
import bg_recipe from '../img/bg_recipe.png'

export default function Header() {
    return (
        <header>
            <div className="container__bg">
                <div className="description">
                    <h2 className='header__text'>
                        <p className='title__text'><span>healthy eating</span> is an <span>important</span> part of <span>lifestyle</span>!!</p>
                        <p className='mission__text'>prepare our delicious recipe vegan food!</p>
                    </h2>
                </div>
                <img src={bg_recipe} alt='image recipe for basil pesto' title='recipe for basil pesto'/>
            </div>
        </header>
    )
}
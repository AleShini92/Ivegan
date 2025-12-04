import '../style/header.scss'
import bg from '../img/background.png';

export default function Header() {
    return (
        <header>
            <div className="container__bg">
                <div className="description">
                    <h2 className='header__text'>
                        <p><span>healthy eating</span> is an <span>important</span> part of <span>lifestyle</span>!!</p>
                        <p className='mission__text'>prepare our delicious recipe vegan food!</p>
                    </h2>
                </div>
                <img src={bg} alt='background image' title='mixed salad'/>
            </div>
        </header>
    )
}
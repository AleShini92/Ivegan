import '../style/footer.scss'
import Yt from '../img/youtube.svg'
import Fb from '../img/Fb.svg'
import In from '../img/In.svg'
import logo from '../img/logo-xs.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container__footer d-flex space-around">
                <div className='footer__logo'>
                    {/* Logo Ivegan */}
                    <img src={logo} alt="Ivegan logo" title="I love Ivegan" width="50px"/>
                    <div className="social space-evenly d-flex gap-2.5">
                        <img src={In} alt="Instagram social" title="Instagram" />
                        <img src={Fb} alt="Facebook social" title="Facebook" />
                        <img src={Yt} alt="Youtube social" title="Youtube" />
                    </div>
                </div>
                {/* link list */}
                <div className="footer__menu d-flex">
                    <div className='products'>
                    <ul>
                        <li>
                            products:
                        </li>
                        <li>
                            product
                        </li>
                        <li>
                            pricing
                        </li>
                        <li>
                            log in
                        </li>
                        <li>
                            request access
                        </li>
                        <li>
                            partnerships
                        </li>
                    </ul>
                    </div>
                    <div className='about__us'>
                    <ul>
                        <li>
                            about us:
                        </li>
                        <li>
                            about ivegan
                        </li>
                        <li>
                            contact us
                        </li>
                        <li>
                            featurs
                        </li>
                        <li>
                            careers
                        </li>
                    </ul>
                    </div>
                    <div className="resources">
                    <ul>
                        <li>
                            resources:
                        </li>
                        <li>
                            help center
                        </li>
                        <li>
                            blog
                        </li>
                    </ul>
                    <div className="container__social">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
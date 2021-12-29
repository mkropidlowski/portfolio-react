import paperPlane from './img/paper-plane.png';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { MenuLink } from './HamburgerMenu/MenuLink';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { HashLink as Link} from 'react-router-hash-link';

const Home = () => {


    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <div className="main-section">
              <div className="header"> 
            <div className="page-name">
                <h1>&lt;/ MK.PL &gt;</h1>
            </div>  

                <IconContext.Provider value={{color: '#fff'}}> 
                <div className="navbar"> 
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                
                    <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                            </li>
                            {MenuLink.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <Link smooth to={`/page${item.path}`}>
                                    <span>{item.title}</span>
                                </Link>
                                </li>
                            );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>
         
        

            <div className="info-home-box">
                <h2>Junior Front-End Developer</h2>
                <p>Cześć jestem Michał, zajmuję się tworzeniem stron internetowych dla małych przedsiębiorstw.
                    Jeśli chcesz posiadać własną stronę WWW związaną z Twoim biznesem, skontaktuj się ze mną w celu omówienia szczegółów.
                </p>
                <a href="#contact" className="btn-contact-skip"><button className="contact-btn">Skontaktuj się ze mną! <img className="paper-plane-btn" alt ="paper-plane" src={paperPlane}/></button></a>
            </div>
        </div>
     );
}
 
export default Home;

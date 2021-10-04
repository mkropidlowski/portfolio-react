import paperPlane from './img/paper-plane.png';

const Home = () => {
    return ( 
        <div className="main-section">
            <div className="header">
                <div className="page-name">
                    <h1>&lt;/ MK.PL &gt;</h1>
                </div>

                <div className="hamburger">
                    <div className="barF"></div>
                    <div className="barS bar-hide"></div>
                    <div className="barT"></div>
                </div>

                <div className="menu">
                    <ul className="menu-bar menuView">
                        <li><a href="#about" className="underline">O MNIE</a></li>
                        <li><a href="#portfolio" className="underline text-indent">PORTFOLIO</a></li>
                        <li><a href="#contact" className="underline text-indent-sec">KONTAKT</a></li>
                    </ul>
                </div>
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

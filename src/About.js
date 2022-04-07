import myPhoto from './img/me.jpg';
import gitLogo from './img/github.png';

const About = () => {
    return ( 
        <div className="about-section" id="about">

            <div className="bio">
                <h1 className="about-header">O MNIE</h1>
                <img className="my-photo" alt="myphoto" src={myPhoto}/>
                
                <p className="about-me-text">Mam na imię Michał technologiami webowymi zacząłem się interesować
                    w Technikum Informatycznym, sukcesywnie starałem się poszerzać swoją wiedzę, większość wiedzy zdobyłem sam z różnych
                    poradników czy też kursów. Po skończeniu szkoły zdecydowałem się na rozpoczęcie studiów, jestem absolwentem
                    studiów Informatycznych w Wyższej Szkole Bankowej w Gdańsku o specjalizacji Programowanie.   
                </p>
            </div>

            <div className="skills">

                <h1 className="about-header">TECHNOLOGIE</h1>
                <p className="top-list-text">Tworząc strony WWW posługuję się niżej wymienionymi technologiami, stale staram się rozwijać w nowych gałęziach programowania.</p>
                <ul>
                    <li className="skills-checkbox">HTML/CSS</li>
                    <li className="skills-checkbox">JavaScript</li>
                    <li className="skills-checkbox">Responsive Design</li>
                    <li className="skills-checkbox">Firebase/Firestore</li>
                    <li className="skills-checkbox">MySQL</li>
                    <li className="skills-checkbox">API Fetch</li>
                    <li className="skills-checkbox">React - w trakcie nauki</li>
                </ul>

                <h3 className="special-skills">Dodatkowo:</h3>
                <p>Photoshop, GIMP, git, Microsoft Office </p>

                <div className="git-btn">
                    <button><a className="gitLink" href="https://github.com/mkropidlowski" target="_blank" rel="noreferrer">Profil GitHub</a><img alt="githublogo" src={gitLogo}/></button>
                </div>
            </div>
        </div>

     );
}
 
export default About;
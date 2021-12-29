import flipCardIcon from './img/flip-card-web-icon.png';
import gitCardIcon from './img/github-card-icon.png';
import bmwPage from './img/bmw-page.PNG';
import chrisChems from './img/chrisbio.PNG';
import weatherApp from './img/weatherapp.PNG';
import firebaseNote from './img/noteappFirebase.PNG';
import mealGen from './img/meal-gen.PNG';
import movieFinder from './img/movie-finder.PNG';
import bookGen from './img/book-gen.PNG';
import system from './img/system.PNG';
import employeePanel from './img/panel_pracownika.PNG';



const Project = () => {
    return ( 
            <div className="project-container" id="porfolio"> 
                <h1 className="portfolio-header"> PORTFOLIO</h1>
                <h3 className="porfolio-container-title">Strony oraz aplikacje WWW</h3>

                <div className="project-box">
                    <div>
                        <img src={system} alt="system" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/panel_logowania/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/panel_logowania" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS / BOOTSTRAP</b></span>
                    <span className="text-lt"><b>Firebase Auth / Firestore DB</b></span>
                    <span className="panel-desc">System do zarządania zleceniami firmowymi wraz z opcją raportowania. Na podstawie zaraportowanych zleceń 
                    mamy do wglądu informacje o czasie pracy pracownika, wykonywanej operacji, ponadto postęp każdego zlecenia. Ten panel jest panelem zarządania, natomiast
                    poprzedza go panel logowania do całego systemu przy użyciu Firebase Auth oraz dla pracownika dostępny panel do raportowania.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={employeePanel} alt="employeePanel" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/panel_logowania/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://mkropidlowski.github.io/panel_logowania/panel_pracownika/index.html" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS / BOOTSTRAP</b></span>
                    <span className="text-lt"><b>Firebase Auth / Firestore DB</b></span>
                    <span className="panel-desc">Panel pracownika, który jest częscią systemu zarządania zleceniami, tutaj każdy pracownik raportuje swoje zlecenia
                    następnie są one przesyłane do bazy Firestore i dostępne do wglądu osobie mającej dostęp do systemu zarządzania.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={bmwPage} alt="bmwPage" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/bmw-landing-page/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/bmw-landing-page" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JAVASCRIPT</b></span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={chrisChems} alt="chrisChems" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/chrishemsbio/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/chrishemsbio" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JAVASCRIPT</b></span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={firebaseNote} alt="firebase" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/noteapp/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/noteapp" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                     
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS </b></span>
                    <span className="text-lt"><b>LOCAL STORAGE</b></span>
                    <span className="panel-desc">Aplikacja do tworzenia notatek które można dodawać i usuwać, dane zapisywane są w localstorage przeglądarki.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={weatherApp} alt="weatherApp" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/weatherapp/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/weatherapp" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS / API </b></span>
                    <span className="panel-desc">Prosta aplikacja pogodowa która wykorzystuje API, po przez wpisanie nazwy miasta zwaracana jest aktualna pogoda.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={mealGen} alt="mealGen" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/meal-generator/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/meal-generator" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS / API </b></span>
                    <span className="panel-desc">Aplikacja kulinarna która wykorzystuje darmowe API do generowania losowych przepisów na posiłki.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={movieFinder} alt="movieFinder" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/movie-finder/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/movie-finder" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JS / API </b></span>
                    <span className="panel-desc">Aplikacja, która wykorzystuje API imdb zawierąjce szczegółowo informacje o obsadzie filmu, roku produkcji czy box officie.
                    </span>
                    </div>
                </div>

                <div className="project-box">
                    <div>
                        <img src={bookGen} alt="system" className="thumbnail-style"/>
                    </div>
                    <div className="demo-code">
                        <a href="https://mkropidlowski.github.io/bookgenerator/" target="_blank" rel="noreferrer"><img alt="flipCard" src={flipCardIcon}/></a>           
                        <a href="https://github.com/mkropidlowski/bookgenerator" target="_blank" rel="noreferrer"><img alt="githubCard" src={gitCardIcon}/></a>                                      
                    </div>
                    <div className="used-stack">
                    <span className="text-lt">Technologie:</span>
                    <span className="text-lt"><b>HTML / CSS / JAVASCRIPT</b></span>
                    <span className="text-lt"><b>BOOTSTRAP / LOCAL STORAGE</b></span>
                    <span className="panel-desc">Strona służąca do wprowadzania np: listy książek które chcemy przeczytać, a następnie możemy wylosować jedną z pozycji,
                        służy nam jako losowy generator. Ponadto wpisane dane znajdują się w pamięci przeglądarki. Dostepne opcje to dodawanie, usuwanie, losowanie.
                    </span>
                    </div>
                </div>
            
                
             
            </div>

        
  

     );
}
 
export default Project;
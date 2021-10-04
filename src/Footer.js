import emailImg from './img/email.png';

const Footer = () => {
    return ( 
        <div className="contact-section">
        <div className="contact-box">
           <img src={emailImg} alt="email" />
           <p>Jeśli masz jakieś pytania skontaktuj się przez adres:  
           <b> mkropidlowsky@gmail.com</b></p>
           </div>

       <div className="footer-copyright">
           <span>2021 -  Wykonał Michał Kropidłowski</span>
       </div>
       
   </div>
     );
}
 
export default Footer;
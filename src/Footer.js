import emailImg from './img/email.png';

const Footer = () => {
    return ( 
        <div className="contact-section" id="contact">
        <div className="contact-box">
           <img src={emailImg} alt="email" />
           <p>Jeśli masz jakieś pytania skontaktuj się przez adres:  
           <b> mkropidlowsky@gmail.com</b></p>
           </div>

       <div className="footer-copyright">
           <span>2022 -  Wykonał Michał Kropidłowski</span>
       </div>
       
   </div>
     );
}
 
export default Footer;
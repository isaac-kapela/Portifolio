import { IoIosArrowUp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/io";

import * as S from './Footer_Style';

export default function Footer() {
  return (
    <S.FooterContainer>
    <footer className="footer">
      <div className="footer-texto">
        <p>copyright &copy; 2024 Por Isaac Kapela | todos os direitos reservados.</p>
      </div>
      <div className="footer-icon">
      
            <a href="https://www.linkedin.com/in/isaac-kapela-a75141250/" target="_blank" >  <FaLinkedin /> </a>
            <a href="https://www.instagram.com/isaacdjk/" target="_blank"> <FaInstagram /> </a>
            <a href="https://github.com/isaac-kapela" target="_blank"> <FaGithub />  </a>
            <a href="https://www.facebook.com/isaac.kapela.1/" target="_blank">  <FaFacebook /> </a>
          
        <a href="#"> <IoIosArrowUp /></a>

      </div>
    </footer>
    </S.FooterContainer>
  );
}

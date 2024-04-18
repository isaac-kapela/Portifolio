import { IoIosArrowUp, } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";








import * as S from './Footer_Style';

export default function Footer() {
  return (
    <S.FooterContainer>
      <footer className="footer">
        <div className="footer-texto">
          <p>copyright &copy; 2024 Por Isaac Kapela | todos os direitos reservados.</p>
        </div>
        <div className="media-social social-footer">

          <a href="https://www.linkedin.com/in/isaac-kapela-a75141250/" target="_blank" >  <ImLinkedin /> </a>
          <a href="https://www.instagram.com/isaacdjk/" target="_blank"> <AiOutlineInstagram /> </a>
          <a href="https://github.com/isaac-kapela" target="_blank"> <AiOutlineGithub />  </a>
          <a href="https://www.facebook.com/isaac.kapela.1/" target="_blank">  <BsFacebook /> </a>
          <a href="https://api.whatsapp.com/send?phone=5511977848903&text=Olá,%20tudo%20bem?%20Acabei%20de%20ver%20o%20seu%20portfolio,%20gostaria%20de%20falar%20com%20você" target="_blank"><AiOutlineWhatsApp /></a>

        </div>

        <div className="footer-icon">

          <a href="#"> <IoIosArrowUp /></a>

        </div>
      </footer>
    </S.FooterContainer>
  );
}

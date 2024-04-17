import { IoIosArrowUp } from "react-icons/io";

import * as S from './Footer_Style';

export default function Footer() {
  return (
    <S.FooterContainer>
    <footer className="footer">
      <div className="footer-texto">
        <p>copyright &copy; 2024 Por Isaac Kapela | todos os direitos reservados.</p>
      </div>
      <div className="footer-icon">
        <a href="#"> <IoIosArrowUp /></a>
      </div>
    </footer>
    </S.FooterContainer>
  );
}

import { Link } from 'react-router-dom';
import * as S from './Header_Style';


export default function Header() {
  return (

    <S.HeaderContainer>
    <header className="header">
      <a href="/" className="logo">Portifolio</a>
      <i className="fa-solid fa-bars" id="menu-icons"></i>
      <nav className="navBar">
        <ul>
          <li><Link to="/" className="ativa">Home</Link></li>
          <li><Link to="/Sobre">Sobre</Link></li>
          <li><Link to="/Servicos">Serviços</Link></li>
          <li><Link to="/Portifolio">Portifolio</Link></li>
          <li><Link to="/Contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
    </S.HeaderContainer>
  );
}

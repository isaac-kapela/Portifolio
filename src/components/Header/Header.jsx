import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header_Style';
import { MdOutlineMenu } from "react-icons/md";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.HeaderContainer open={menuOpen}>
      <header className="header">
        <a href="/" className="logo">Isaac D. kapela joão</a>
      
        <MdOutlineMenu className="menu-icon" onClick={toggleMenu} />
        <nav className={`navBar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className="ativa">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Servicos">Serviços</Link></li>
            <li><Link to="/Formacoes">Formações</Link></li>
            <li><Link to="/Portifolio">Portfólio</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </S.HeaderContainer>
  );
}

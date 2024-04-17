import * as S from './Home_Style';
import Perfil from '../../assets/profiledp.png';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  const BaixarCV = () => {
    const url = '/caminho/para/seu/curriculo.pdf';
    window.open(url, '_blank');
  };

  return (
    <S.HomeContainer> 
      <section className="Home">
        <div className="home-content">
          <h3>Olá, eu sou</h3>
          <h1>Isaac Kapela</h1>
          <h3>E eu sou um <span>desenvolvedor frontend</span></h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem a explicabo laborum harum neque possimus incidunt blanditiis cumque enim eaque quia numquam quo perspiciatis earum at officia, quibusdam ratione architecto.
          </p>
          <div className="media-social">
            <a href="https://www.linkedin.com/in/isaac-kapela-a75141250/" target= "_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/isaacdjk/" target= "_blank"><FaInstagram /></a>
            <a href="https://github.com/isaac-kapela" target= "_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/isaac.kapela.1/" target= "_blank"><FaFacebook /></a>
          </div>
          <button className="btn" onClick={BaixarCV}>Baixar meu CV</button>
        </div>
        <div className="home-img">
          <img src={Perfil} alt="" />
        </div>
      </section>
    </S.HomeContainer>
  );
}

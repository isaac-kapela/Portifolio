
import { useState } from "react";
import * as S from "./Servicos_style";
import Card from "./Card";
import { FaTimes, FaFigma, FaLaptopCode, FaCode } from "react-icons/fa";
import NavBar from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"


export default function Servicos() {
  const [modalAberto, setModalAberto] = useState(null);

  const handleAbrirModal = (id) => {
    setModalAberto(id);
  };

  const handleFecharModal = () => {
    setModalAberto(null);
  };

  return (
    <S.ServicosContainer>
        <NavBar/>
      <section className="servicos" id="servicos">
        <h2 className="cabecalho">
          Meus <span>Serviços</span>
        </h2>

        <div className="servicos-container">
          <div className="servicos-box">
            <Card
              titulo="UI/UX Design"
              icone={<FaFigma />}
              texto="Olá! Sou apaixonado por dar vida ao visual das ideias. Meu trabalho é como uma aventura criativa, onde mergulho fundo nos conceitos para transformá-los em algo tangível e marcante. Cada projeto é uma jornada de descoberta, cheia de esboços e experimentos, onde transformo pensamentos abstratos em algo concreto e cativante. "/>
            <button className="btn" onClick={() => handleAbrirModal(1)}>
              Ler Mais
            </button>
          </div>

          <div className="servicos-box">
            <Card
              titulo="Desenvolvimento Web"
              icone={<FaLaptopCode />}
              texto="Olá! Sou apaixonado por criar experiências digitais que cativam e facilitam a vida das pessoas. Meu foco principal está em desenvolver aplicações web que combinam funcionalidade e design de forma harmoniosa.   " />
            <button className="btn" onClick={() => handleAbrirModal(2)}>
              Ler Mais
            </button>
          </div>

          <div className="servicos-box">
            <Card
              titulo=" Desenvolvimento front"
              icone={<FaCode />}
              texto="Olá! Meu foco é transformar conceitos visuais em experiências interativas e envolventes na web. Como desenvolvedor front-end, minha paixão reside em dar vida aos designs, criando interfaces que não apenas atraem, mas também cativam os usuários. "
            />
            <button className="btn" onClick={() => handleAbrirModal(3)}>
              Ler Mais
            </button>
          </div>
        </div>

      
        {modalAberto === 1 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}>
                <FaTimes />
              </span>
              <h2>Detalhes do Serviço UI/UX Design</h2>
              <p>Minha missão é capturar a essência única de cada marca ou conceito, criando uma identidade visual que conte sua história de forma envolvente.<br/> Eu acredito que o design vai além da estética; é sobre conexão e comunicação. Cada cor, forma e detalhe são escolhidos com cuidado para transmitir<br/> uma mensagem clara e memorável, <br/>deixando uma impressão duradoura em quem a vê. Então, se precisar de um protótipo interativo ou uma identidade visual que se destaque, <br/>estou aqui para ajudar a tornar sua visão uma realidade visual, com estilo e autenticidade.</p>
            </div>
          </div>
        )}

        {modalAberto === 2 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}>
                <FaTimes />
              </span>
              <h2>Detalhes do Serviço Desenvolvimento Web</h2>
              <p>Cada linha de código que escrevo é impulsionada pela busca de oferecer soluções eficientes e intuitivas.  Minhas aplicações são mais do que apenas interfaces;<br/> são ferramentas poderosas que simplificam processos e tornam a interação online uma experiência memorável. Seja um projeto simples ou complexo,<br/> estou comprometido em entregar produtos que atendam às necessidades dos usuários, proporcionando uma jornada digital fluida e agradável.<br/> Estou aqui para transformar suas ideias em aplicações web de alto desempenho, conectando você ao mundo digital de forma eficaz e impactante.</p>
            </div>
          </div>
        )}

        {modalAberto === 3 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}>
                <FaTimes />
              </span>
              <h2>Detalhes do Serviço Desenvolvimento Frontend</h2>
              <p>Cada linha de código que escrevo é cuidadosamente trabalhada para garantir que a experiência do usuário seja fluida e intuitiva.<br/> Desde a implementação de layouts responsivos até a integração de animações e interatividade, estou comprometido em fornecer<br/>  uma experiência de navegação excepcional. Minha abordagem é centrada no usuário, priorizando a acessibilidade e a usabilidade<br/>  em todos os projetos.   Estou aqui para colaborar com você na criação de aplicações front-end que não apenas impressionam visualmente,<br/>  mas também oferecem uma experiência digital memorável e eficaz.</p>
            </div>
          </div>
        )}
  <div className="skills-container">
  <h2 className="cabecalho">
    Minhas Hards <span>Skills</span>
  </h2>
  
  <div className="skills">
    <img src="https://techstack-generator.vercel.app/java-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="45" width="45" />
    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" />
    <img style={{ display: 'flex', alignItems: 'flex-start' }} src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="45" width="45" />
    <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" width="50" height="50" alt="" style={{ backgroundColor: '#191f36', borderRadius: '10px' }} />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="50" height="50" />
    <img style={{ display: 'flex', alignItems: 'flex-start' }} src="https://techstack-generator.vercel.app/cpp-icon.svg" alt="icon" width="65" height="65" />
    <img src="https://imgur.com/I7Sobjv.gif" width="65" height="65" style={{ backgroundColor: '#191f36', borderRadius: '10px' }} alt="" />
  </div>
</div>        
  </section>
      
      <Footer/>
    </S.ServicosContainer>
  );
}

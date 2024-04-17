import * as S from './Portifolio._Style';
import IMG1 from "../../assets/IMG-1.jpg";


export default function Portfolio() {
  return (
<S.PortifolioContainer>
    <section className="portifolio" id="portifolio">
      <h2 className="cabecalho">Meus <span>Projetos</span></h2>
      <div className="portifolio-container">
        <div className="portifolio-box">
          <img src={IMG1} alt="" />
          <div className="portifolio-layer">
            <h4>Designer de Web</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-share-from-square"></i>
          </div>
        </div>

        <div className="portifolio-box">
          <img src={IMG1} alt="" />
          <div className="portifolio-layer">
            <h4>Desenvolvimeto front-end</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-share-from-square"></i>
          </div>
        </div>

        <div className="portifolio-box">
          <img src={IMG1} alt="" />
          <div className="portifolio-layer">
            <h4>Estudos</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-share-from-square"></i>
          </div>
        </div>

        <div className="portifolio-box">
          <img src={IMG1} alt="" />
          <div className="portifolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-share-from-square"></i>
          </div>
        </div>
      </div>
    </section>
    </S.PortifolioContainer>
  );
}

import * as S from './Portifolio._Style';
import IMG1 from "../../assets/IMG-1.jpg";
import IMG2 from "../../assets/IMG-2.jpg";
import IMG3 from "../../assets/IMG-HAMB.jpg";
import IMG4 from "../../assets/IMG-sextaM.jpg"
import IMG5 from "../../assets/IMG-3.jpg";
import IMG6 from "../../assets/IMG-4.jpg";

import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Header/Header"



import  { useState } from 'react';
export default function Portfolio() {
  
  const projetos = [
    {
      nome: 'Designer de Web',
      img: IMG1,
      link: 'https://garimpoanjos.vercel.app/',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      nome: 'Desenvolvimeto front-end',
      img: IMG2,
      link: 'https://github.com/isaac-kapela/Sal-o',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      nome:'Loja de produtos naturais',
      img: IMG5,
      link: 'https://github.com/isaac-kapela/Vai_na_web/tree/main/Desafios/Quatro',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

    },
    {
      nome: 'Projeto Burguer King',
      img: IMG3,
      link: 'https://github.com/isaac-kapela/Vai_na_web/tree/main/Modulo%202/Atividades/atividade3',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      nome: 'Site de Formula 1',
      img: IMG4,
      link: 'https://github.com/isaac-kapela/Sexta-Marcha-Trainee-2023.2',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      nome: 'Clinica odontologica',
      img: IMG6,
      link: 'https://github.com/isaac-kapela/clinica-odontologica',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  const [MostrarProjetos, setMostrarProjetos] = useState(2); 
  const [MostreMais, setMostreMais] = useState(false);

  const handleShowMore = () => {
    setMostrarProjetos(prevVisibleProjects => prevVisibleProjects + 2);
    setMostreMais(true);
  };

  const handleShowLess = () => {
    setMostrarProjetos(4);
    setMostreMais(false);
  };

  return (

    <S.PortifolioContainer>
        <NavBar/>
      <section className="portifolio" id="portifolio">
        <h2 className="cabecalho">Meus <span>Projetos</span></h2>
        <div className="portifolio-container">
          {projetos.slice(0, MostrarProjetos).map((project, index) => (
            <a key={index} href={project.link} target="_blank">
              <div className="portifolio-box">
                <img src={project.img} alt={project.nome} />
                <div className="portifolio-layer">
                  <h4>{project.nome}</h4>
                  <p>{project.descricao}</p>
                  <i className="fa-solid fa-share-from-square"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="btn-container">
          {!MostreMais && MostrarProjetos < projetos.length && (
            <button className='btn' onClick={handleShowMore}>Ver-mais</button>
          )}
          {MostreMais && (
            <button className='btn' onClick={handleShowLess}>Ver-menos</button>
          )}
        </div>
      </section>
      <Footer/>
    </S.PortifolioContainer>
  );
}

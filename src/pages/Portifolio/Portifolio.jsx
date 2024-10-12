import * as S from './Portifolio_style';
import IMG1 from "../../assets/IMG-1.jpg";
import IMG2 from "../../assets/IMG-2.jpg";
import IMG3 from "../../assets/IMG-HAMB.jpg";
import IMG4 from "../../assets/IMG-sextaM.jpg"
import IMG5 from "../../assets/IMG-3.jpg";
import IMG6 from "../../assets/IMG-4.jpg";
import IMG7 from "../../assets/img7.jpg"

import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Header/Header"



import  { useState } from 'react';
export default function Portfolio() {
  
  const projetos = [
    {
      nome: 'Loja de roupas',
      img: IMG1,
      link: 'https://garimpoanjos.vercel.app/',
      descricao: 'Desenvolvi usando ele em react é uma loja de roupas.',
    },
    {
      nome: 'Salão de Beleza',
      img: IMG2,
      link: 'https://github.com/isaac-kapela/Sal-o',
      descricao: 'Desenvolvi usando html css e js, trabalhei como freelancer onde fiz uma landing page para um salão de beleza.',
    },
    {
      nome: 'Calendario de eventos',
      img: IMG7,
      link: 'https://github.com/isaac-kapela/calendrio-de-Tarefas',
      descricao: 'Desenvolvi usando react é um calendario onde da para adiconar tarefas e fazer o controles delas.',
    },
    {
      nome:'Loja de produtos naturais',
      img: IMG5,
      link: 'https://github.com/isaac-kapela/Vai_na_web/tree/main/Desafios/Quatro',
      descricao: 'Desenvolvi usando html e css é uma loja de produtos naturais.',

    },
    {
      nome: 'Projeto Burguer King',
      img: IMG3,
      link: 'https://github.com/isaac-kapela/Vai_na_web/tree/main/Modulo%202/Atividades/atividade3',
      descricao: 'Aqui eu fiz uma landing do Bk usando react.',
    },
    {
      nome: 'Site de Formula 1',
      img: IMG4,
      link: 'https://github.com/isaac-kapela/Sexta-Marcha-Trainee-2023.2',
      descricao: 'Desenvolvi esse projeto durante um processo trainee em uma empresa junior da faculdade usando html css php e bootstrap.',
    },
    {
      nome: 'Clinica odontologica',
      img: IMG6,
      link: 'https://github.com/isaac-kapela/clinica-odontologica',
      descricao: 'Desnvolvi em next .',
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

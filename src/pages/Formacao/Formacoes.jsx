import * as S from "./Formacaoes_style";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Header/Header";
import Card from "./Card";
import IFSP from "../../assets/imgIfsp.png";
import UFJF from "../../assets/UFJF-Logo.png";
import vaiNaWeb from "../../assets/vaiNaWeb.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Formacoes() {
  const [modalAberto, setModalAberto] = useState(null);

  const handleAbrirModal = (id) => {
    setModalAberto(id);
  };

  const handleFecharModal = () => {
    setModalAberto(null);
  };

  return (
    <>
      <S.FormacaoContainer>
        <NavBar />

        <section className="formacaoes">
          <h2 className="cabecalho">
            Meus <span>Serviços</span>
          </h2>

          <div className="formacaoes-container">
            <div className="formacaoes-box">
              <Card titulo="Desenvolvimento de sistemas" img={IFSP} texto="" />
              <button className="btn" onClick={() => handleAbrirModal(1)}>
                Ler Mais
              </button>
            </div>

            <div className="formacaoes-box">
              <Card
                titulo="Desenvolvimento Front-end"
                img={vaiNaWeb}
                texto=""
              />
              <button className="btn" onClick={() => handleAbrirModal(2)}>
                Ler Mais
              </button>
            </div>

            <div className="formacaoes-box">
              <Card titulo="Sistemas de informação" img={UFJF} texto="" />
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
                <h2>Detalhes da formação</h2>
                <p>
                  Durante meu curso no IFSP, explorei disciplinas de ciência da
                  computação e desenvolvimento de software. No primeiro módulo,
                  aprendi programação procedural com Portugol. No segundo,
                  mergulhei no desenvolvimento web com Node.js, JavaScript,
                  HTML, CSS e Angular, além da programação orientada a objetos.
                  No terceiro, aprofundei-me em Spring Boot em Java e no
                  front-end com Angular. Essa experiência ampla me proporcionou
                  uma base sólida para enfrentar desafios profissionais e
                  continuar crescendo na área de tecnologia da informação.
                </p>
              </div>
            </div>
          )}

          {modalAberto === 2 && (
            <div className="modal">
              <div className="modal-content">
                <span className="fechar" onClick={handleFecharModal}>
                  <FaTimes />
                </span>
                <h2>Detalhes da formação</h2>
                <p>
                  Na escola Vai na Web, mergulhei no desenvolvimento front-end
                  durante seis meses intensos. Explorei HTML, CSS, JavaScript e
                  React, os pilares da web moderna. Cada linha de código
                  representava uma oportunidade para expressar minha
                  criatividade e transformar ideias em realidade digital. Com
                  HTML, criei estruturas sólidas; com CSS, adicionei estilos
                  elegantes. JavaScript deu vida aos projetos com
                  interatividade, enquanto o React me permitiu criar aplicativos
                  poderosos e responsivos. Além do técnico, essa jornada também
                  foi de desenvolvimento pessoal, aprimorando minhas habilidades
                  interpessoais e preparando-me para o ambiente profissional
                  dinâmico.
                </p>
              </div>
            </div>
          )}

          {modalAberto === 3 && (
            <div className="modal">
              <div className="modal-content">
                <span className="fechar" onClick={handleFecharModal}>
                  <FaTimes />
                </span>
                <h2>Detalhes da formação</h2>
                <p>
                  Em 2023, ingressei na UFJF para cursar Sistema de Informação.
                  Este passo marcou uma nova fase em minha vida acadêmica, rumo
                  ao domínio da tecnologia da informação. Na UFJF, encontrei um
                  ambiente acadêmico estimulante, onde cada disciplina do curso
                  amplia meu conhecimento em programação, algoritmos, banco de
                  dados e sistemas distribuídos. Além das aulas, participo de
                  grupos de estudo, projetos de pesquisa e eventos
                  extracurriculares que enriquecem minha experiência e
                  desenvolvem minhas habilidades práticas. Estou comprometido em
                  aproveitar todas as oportunidades disponíveis, enfrentar
                  desafios e preparar-me para uma carreira gratificante e
                  impactante na área de tecnologia da informação.
                </p>
              </div>
            </div>
          )}
        </section>

        <Footer />
      </S.FormacaoContainer>
    </>
  );
}

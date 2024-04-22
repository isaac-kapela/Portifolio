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
                  Durante meu curso no Instituto Federal de Educação, Ciência e
                  Tecnologia de São Paulo (IFSP), explorei uma ampla gama de
                  disciplinas relacionadas à ciência da computação e ao
                  desenvolvimento de software.
                  <br />
                  No primeiro módulo, concentrei-me nos princípios fundamentais
                  da programação procedural, adquirindo habilidades em lógica de
                  programação com a linguagem Portugol. Essa base sólida
                  estabeleceu os alicerces necessários para os desafios
                  subsequentes.
                  <br />
                  No segundo módulo, mergulhei no mundo do desenvolvimento web,
                  onde aprendi sobre servidores, solicitações e respostas, além
                  de dominar a criação de sistemas utilizando tecnologias como
                  Node.js, JavaScript, HTML, CSS e Angular. Além disso, nesse
                  período, também fui introduzido à programação orientada a
                  objetos, um paradigma crucial no desenvolvimento de software
                  moderno.
                  <br />
                  No terceiro módulo, aprofundei meu conhecimento em
                  desenvolvimento de software, explorando conceitos avançados e
                  ferramentas poderosas, como o framework Spring Boot em Java.
                  Continuando minha jornada, expandi ainda mais minhas
                  habilidades no desenvolvimento front-end, explorando as
                  capacidades do Angular para criar interfaces de usuário
                  modernas e responsivas.
                  <br />
                  Essa experiência multidisciplinar proporcionou-me uma
                  compreensão abrangente dos princípios fundamentais da
                  programação, desde lógica de programação até o desenvolvimento
                  de sistemas web complexos. Estou confiante de que esses
                  conhecimentos me preparam não apenas para enfrentar os
                  desafios do mundo profissional, mas também para continuar
                  aprendendo e crescendo em um campo tão dinâmico quanto a
                  tecnologia da informação.
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
                  Na brilhante jornada pela escola Vai na Web, mergulhei de
                  cabeça no vasto universo do desenvolvimento front-end. Durante
                  seis meses intensos, mergulhei nas profundezas do HTML, CSS,
                  JavaScript e React, os pilares que sustentam a beleza e a
                  funcionalidade da web moderna.
                  <br />
                  Cada linha de código foi mais do que simplesmente uma
                  sequência de caracteres; foi uma oportunidade de expressar
                  minha criatividade, transformando ideias em realidade digital.
                  Com o HTML, esculpi estruturas sólidas para dar forma aos meus
                  sonhos digitais, enquanto o CSS me permitia adorná-las com
                  estilos elegantes e envolventes.
                  <br />
                  Mas foi com o JavaScript que descobri o verdadeiro poder da
                  interatividade, dando vida aos meus projetos com
                  funcionalidades dinâmicas e animações fluidas. E então,
                  mergulhei de cabeça no React, uma ferramenta que me permitiu
                  criar aplicativos poderosos e responsivos, onde cada
                  componente se tornou uma peça crucial de um quebra-cabeça
                  digital.
                  <br />
                  Além do domínio técnico, esses seis meses foram também uma
                  jornada de desenvolvimento pessoal. Ao trabalhar em projetos
                  desafiadores e colaborar com colegas apaixonados, desenvolvi
                  minhas habilidades interpessoais e aprimorei minhas
                  capacidades de comunicação. A escola Vai na Web não apenas me
                  forneceu conhecimento técnico, mas também cultivou minhas soft
                  skills, preparando-me não apenas para enfrentar os desafios do
                  desenvolvimento front-end, mas também para prosperar em um
                  ambiente profissional dinâmico e colaborativo.
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
                  Em 2023, embarquei em uma emocionante jornada ao ingressar na
                  renomada Universidade Federal de Juiz de Fora (UFJF), onde
                  estou dedicando-me ao curso de Sistema de Informação. Este
                  importante passo marcou não apenas o início de uma nova etapa
                  em minha vida acadêmica, mas também o começo de uma
                  emocionante jornada rumo ao domínio dos fundamentos e práticas
                  da área de tecnologia da informação.
                  <br />
                  Na UFJF, encontrei um ambiente acadêmico dinâmico e
                  estimulante, repleto de oportunidades de aprendizado e
                  crescimento. Ao mergulhar nas disciplinas do curso de Sistema
                  de Informação, tenho a oportunidade de explorar uma variedade
                  de tópicos essenciais, desde programação e algoritmos até
                  banco de dados e sistemas distribuídos. Cada aula é uma
                  oportunidade de expandir meu conhecimento e aprofundar minha
                  compreensão dos princípios fundamentais que sustentam a
                  ciência da computação.
                  <br />
                  Além das disciplinas específicas do curso, a UFJF oferece uma
                  ampla gama de recursos e atividades extracurriculares que
                  enriquecem minha experiência acadêmica. Participar de grupos
                  de estudo, projetos de pesquisa e eventos da comunidade
                  universitária me permite desenvolver habilidades práticas,
                  colaborar com colegas e explorar áreas especializadas dentro
                  da tecnologia da informação.
                  <br />
                  Ao longo do meu tempo na UFJF, estou comprometido em
                  aproveitar ao máximo todas as oportunidades disponíveis para
                  mim. Estou ansioso para enfrentar os desafios que surgirem no
                  caminho, enquanto continuo a expandir meus horizontes,
                  aprimorar minhas habilidades e preparar-me para uma carreira
                  gratificante e impactante no campo da tecnologia da
                  informação.
                  <br />
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

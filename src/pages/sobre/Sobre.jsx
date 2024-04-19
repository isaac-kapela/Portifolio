import  { useState } from 'react';
import * as S from './Sobre_style';
 import Perfil2 from "../../assets/sobre-img.jpg";
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Header/Header"
export default function Sobre() {
  const [mostrarMaisTexto, setMostrarMaisTexto] = useState(false);

  const handleMostrarMaisTexto = () => {
    setMostrarMaisTexto(!mostrarMaisTexto);
  };

  return (
  

    <S.SobreContainer>
          <NavBar/>
      <section className="sobre" id="sobre">
        <div className="img-sobre">
           <img src={Perfil2} alt="" /> 
        </div>

        <div className="sobre-content">
          <h2 className="cabecalho">Programador</h2>
          
          <p>
            {mostrarMaisTexto ? (
              "Em cada projeto, busco aplicar o que aprendo para resolver problemas de forma eficiente e criativa. Minha visão vai além das fronteiras, buscando não só contribuir para o avanço da tecnologia em Angola, mas também inspirar uma nova geração de inovadores. Estou pronto para os desafios que o futuro reserva, ansioso para transformar ideias em realidade por meio da tecnologia. Seja bem-vindo à minha jornada rumo a um amanhã digital vibrante e inclusivo."            

            ) : (
              "Olá! Sou o Isaac, um apaixonado por tecnologia que encontrou na Universidade Federal de Juiz de Fora o cenário ideal para explorar meu potencial. Nascido em Angola em 2005, trago uma perspectiva única para o mundo da informática. Atualmente, estou cursando Sistemas de Informação, onde cada linha de código é uma oportunidade para criar soluções inovadoras. Com conhecimentos em React, Next.js, Node.js, C++, JavaScript, TypeScript, Tailwind CSS, styled-components, Java e Angular, estou pronto para enfrentar qualquer desafio."
            )}

          </p>
          <button className="btn" onClick={handleMostrarMaisTexto}>
            {mostrarMaisTexto ? "Leia menos" : "Leia mais"}
          </button>
        </div>
      </section>
      <Footer/>
    </S.SobreContainer>
  );
}

import { useEffect } from "react";
import Typed from "typed.js"; // Importe o Typed aqui
import * as S from "./Home_style";
import Perfil from "../../assets/perfil.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import {  AiOutlineWhatsApp } from "react-icons/ai";


import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Header/Header"


export default function Home() {
  useEffect(() => {
    const digitei = new Typed(".digitado", {
      strings: [
        "Desenvolvedor Web",
        "Desenvolvedor Front-End",
        "Desenvolvedor Full-Stack",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      digitei.destroy();
    };
  }, []);

  const BaixarCV = () => {
    const url =
      "https://raw.githubusercontent.com/isaac-kapela/Portifolio/main/Curriculo-Isaac%20kapela.pdf";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ocorreu um problema ao baixar o arquivo.");
        }
        return response.blob();
      })
      .then((blob) => {
        const urlBlob = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = urlBlob;
        link.setAttribute("download", "Curriculo-Isaac kapela.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Erro ao baixar o arquivo:", error));
  };

  return (
    <S.HomeContainer>
        <NavBar/>
      <section className="Home">
        <div className="home-content">
          <h3>Olá, eu sou</h3>
          <h1>Isaac Kapela</h1>
          <h3>
            E eu sou um <span className="digitado"></span>
          </h3>
          <p>
            Olá! Sou o Isaac, um apaixonado por tecnologia que encontrou em Juiz
            de Fora, na Universidade Federal, <br/> o cenário ideal para explorar meu
            potencial. Nascido em Angola em 2005, trago uma perspectiva única <br/>
            para o mundo da informática.
          </p>
          <div className="media-social">
            <a
              href="https://www.linkedin.com/in/isaac-kapela-a75141250/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/isaacdjk/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/isaac-kapela" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/isaac.kapela.1/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511977848903&text=Olá,%20tudo%20bem?%20Acabei%20de%20ver%20o%20seu%20portfolio,%20gostaria%20de%20falar%20com%20você" target="_blank"><AiOutlineWhatsApp/></a>

          </div>
          <button className="btn" onClick={BaixarCV}>
            Baixar meu CV
          </button>
        </div>
        <div className="home-img">
          <img src={Perfil} alt="" />
        </div>
      </section>
        <Footer/>
    </S.HomeContainer>
  );
}

import  { useState } from 'react';
import * as S from './Sobre_style';
 import Perfil2 from "../../assets/sobre-img.jpg";

export default function Sobre() {
  const [mostrarMaisTexto, setMostrarMaisTexto] = useState(false);

  const handleMostrarMaisTexto = () => {
    setMostrarMaisTexto(!mostrarMaisTexto);
  };

  return (
    <S.SobreContainer>
      <section className="sobre" id="sobre">
        <div className="img-sobre">
           <img src={Perfil2} alt="" /> 
        </div>

        <div className="sobre-content">
          <h2 className="cabecalho"></h2>
          <h3>Desenvolvedor Frontend</h3>
          <p>
            {mostrarMaisTexto ? (
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat veritatis doloribus numquam explicabo, similique quos. Magnam sunt molestias ipsum vitae? Amet eaque quaerat illo quia, minus laudantium obcaecati dolore corrupti."
            ) : (
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat veritatis doloribus numquam explicabo."
            )}
          </p>
          <button className="btn" onClick={handleMostrarMaisTexto}>
            {mostrarMaisTexto ? "Leia menos" : "Leia mais"}
          </button>
        </div>
      </section>
    </S.SobreContainer>
  );
}

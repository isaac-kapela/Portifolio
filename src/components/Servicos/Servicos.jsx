  // import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './Servicos_style';
import Card from "./Card";
import { FaTimes, FaFigma, FaLaptopCode, FaCode } from "react-icons/fa";

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
      <section className="servicos" id="servicos">
        <h2 className="cabecalho">Meus <span>Serviços</span></h2>

        <div className="servicos-container">
          <div className="servicos-box">
            <Card icone={<FaFigma />} texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, nostrum magni voluptate, omnis nemo autem laudantium eligendi quasi molestiae molestias quisquam animi. Debitis reiciendis dolore delectus eaque voluptas maxime accusantium" />
            <button className="btn" onClick={() => handleAbrirModal(1)}>Ler Mais</button>
          </div>

          <div className="servicos-box">
            <Card icone={<FaLaptopCode />} texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, nostrum magni voluptate, omnis nemo autem laudantium eligendi quasi molestiae molestias quisquam animi. Debitis reiciendis dolore delectus eaque voluptas maxime accusantium" />
            <button className="btn" onClick={() => handleAbrirModal(2)}>Ler Mais</button>
          </div>

          <div className="servicos-box">
            <Card icone={<FaCode />} texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, nostrum magni voluptate, omnis nemo autem laudantium eligendi quasi molestiae molestias quisquam animi. Debitis reiciendis dolore delectus eaque voluptas maxime accusantium" />
            <button className="btn" onClick={() => handleAbrirModal(3)}>Ler Mais</button>
          </div>
        </div>

        {/* Modais */}
        {modalAberto === 1 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}><FaTimes /></span>
              <h2>Detalhes do Serviço UI/UX Design</h2>
              <p>Mais informações sobre UI/UX Design...</p>
            </div>
          </div>
        )}

        {modalAberto === 2 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}><FaTimes /></span>
              <h2>Detalhes do Serviço Desenvolvimento Web</h2>
              <p>Mais informações sobre Desenvolvimento Web...</p>
            </div>
          </div>
        )}

        {modalAberto === 3 && (
          <div className="modal">
            <div className="modal-content">
              <span className="fechar" onClick={handleFecharModal}><FaTimes /></span>
              <h2>Detalhes do Serviço Desenvolvimento Frontend</h2>
              <p>Mais informações sobre Desenvolvimento Frontend...</p>
            </div>
          </div>
        )}
      </section>
    </S.ServicosContainer>
  );
}

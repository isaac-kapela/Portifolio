import PropTypes from 'prop-types';

export default function Card({ titulo, img, texto }) {
  return (
    <>
      <h2>{titulo}</h2>
      <img src={img} alt={titulo} /> 
      <p>{texto}</p>
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired
};

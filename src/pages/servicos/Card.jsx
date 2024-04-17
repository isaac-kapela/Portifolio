import PropTypes from 'prop-types';

export default function Card({ titulo, icone, texto }) {
    return (
      <>
        <h2>{titulo}</h2>
        <i>{icone}</i>
        <p>{texto}</p>
        
      </>
    );
  }
  
  Card.propTypes = {
    icone: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
    
  };
  
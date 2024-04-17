import PropTypes from 'prop-types';

export default function Card({ icone, texto }) {
    return (
      <>
        <i>{icone}</i>
        <p>{texto}</p>
        
      </>
    );
  }
  
  Card.propTypes = {
    icone: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
    
  };
  
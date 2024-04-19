import styled from 'styled-components';

export const ServicosContainer = styled.section`
  .servicos h2 {
    margin-bottom: 5rem;
    text-align: center;
  }

  .servicos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .servicos-container .servicos-box {
    flex: 1 1 30rem;
    background: #191f36;
    padding: 3rem 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    border: 0.2rem solid #f1c40f;
    transition: 0.5s ease;
  }

  .servicos-container .servicos-box:hover {
    border-color: #f1c40f;
    transform: scale(1.02);
  }

  .servicos-box i {
    font-size: 3rem;
    color: #f1c40f;
  }

  .servicos-box h3 {
    font-size: 2.6rem;
  }

  .servicos-box p {
    font-size: 1.6rem;
    margin: 1rem 0 3rem;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: #f1c40f;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #f1c40f;
    font-size: 1.6rem;
    color: #191f36;
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: 0.5s ease;
    cursor: pointer;
  }

  /* Modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: grey;
    padding: 50px;
    border-radius: 8px;
    border: 1px solid #f1c40f;
    
  }

  .servicos-box {
    position: relative;
  }
  .span{
    color: black
  }

  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
  }
  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    text-align: center;
  }
  
  // .iframe-container {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin-top: 20px; /* Ajuste conforme necessário */
  // }
    
  @media screen and (max-width: 768px) {
    .servicos-container .servicos-box {
      flex: 1 1 100%;
    }

    .servicos h2 {
      font-size: 2.6rem;
    }

    .servicos-box h3 {
      font-size: 2rem;
    }

    .servicos-box p {
      font-size: 1.4rem;
    }

    .servicos-box i {
      font-size: 2.5rem;
    }

    .btn {
      padding: 0.8rem 2.4rem;
      font-size: 1.4rem;
    }

    .modal-content {
      padding: 20px;
    }

    .servicos-container {
      gap: 1rem;
    }

    .servicos-container .servicos-box {
      padding: 2rem 1rem 3rem;
    }

    .servicos-container .servicos-box:hover {
      transform: scale(1.01);
    }

    .modal-close {
      padding: 5px;
    }

    .modal-close i {
      font-size: 1.6rem;
    }

    .modal-close:hover {
      transform: scale(1.1);
    } 

    .modal-close:hover i {
      color: #f1c40f;
    }

    .modal-content {
      padding: 20px;
    }

    .modal-content h2 {
      font-size: 1.8rem;
    }
  }
`;

import styled from 'styled-components';


export const PortifolioContainer = styled.section`


.portifolio{
    background: #191f36;
}

.portifolio h2{
    margin-bottom: 4rem;
    text-align: center;
}

.portifolio-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 2.5rem;
}

.portifolio-container .portifolio-box{
    position: relative;
    border-radius: 2rem;
    box-shadow: 0 0 1rem #f1c40f;
    overflow: hidden;
    display: flex;
    cursor: pointer;
}

.portifolio-box img{
        width: 100%;
        transition: .5s ease;
        
        
}

.portifolio-box img:hover{
    transform: scale(1.1);
    opacity: 0.7;
}
.portifolio-box .portifolio-layer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1) #3c5acf); 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 4rem;
    transform: translateY(100%);
    transition: .5s ease;
}


.portifolio-box:hover .portifolio-layer{
    transform: translateY(0);
}

.portifolio-box h4{
    font-size: 3rem;
}

.portifolio-layer p{
    font-size: 1.6rem;
    margin: .3rem 0 1rem;
}

.portifolio-layer a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background: #f1c40f;
    border-radius: 50%;
}

.portifolio-layer a i{
    font-size: 2rem;
    color: #191f36;
}

.btn-container {
    text-align: center; 
    margin-top: 4rem;
  }
  
  .btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: #f1c40f;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #f1c40f;
    font-size: 1.6rem;
    color: #191f36;
    letter-spacing: .1rem;
    font-weight: 600;
    transition: .5s ease;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px){
    .portifolio-container{
        grid-template-columns: 1fr;
    }
    .portifolio-box img{
        width: 100%;
    }
    .portifolio-box .portifolio-layer{
        padding: 0 2rem;
    }
    .portifolio-box h4{
        font-size: 2.5rem;
    }
    .portifolio-layer p{
        font-size: 1.4rem;
    }
    .portifolio-layer a{
        width: 4rem;
        height: 4rem;
    }
    .btn{
        padding: 1rem 2.5rem;
    }

    .btn-container {
        margin-top: 2rem;
      }

}
  

`;

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


`;

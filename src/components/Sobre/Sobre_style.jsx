import styled from 'styled-components';


export const SobreContainer = styled.section`


/* Sobre */
.sobre{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: #191f36;
}

.img-sobre img{
    width: 35vw;
}

.cabecalho{
    text-align: center;
    font-size: 4.5rem;
}

.sobre-content h2{
    text-align: left;
    line-height: 1.2;
}

.sobre-content h3{
    font-size: 2.6rem;
}

.sobre-content p{
    font-size: 1.6rem;
    margin: 2rem  0 3rem;
}

.btn{
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
}

`;

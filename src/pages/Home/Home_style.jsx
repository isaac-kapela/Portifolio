import styled from 'styled-components';


export const HomeContainer = styled.section`

.Home{
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-content h3{
    font-size: 3.2rem;
    font-weight: 700;
}
.home-content h3:nth-of-type(2){
    margin-bottom: 2rem;
}

span{
    color: #f1c40f;
}

.home-content h1{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
}

.home-img img{
    width: 23vw;
    animation: floatImage  4s ease-in-out infinite  ;
    border-radius: 60%;
}

@keyframes floatImage {
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-2.4rem);
    }
    100%{
        transform: translateY(0);
    }
}

.home-content p{
    font-size: 1.6rem;
    margin-right: 5rem;
}

.media-social a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: .2rem  solid #f1c40f;
    border-radius: 50%;
    font-size: 2rem;
    color : #f1c40f;
    margin: 3rem 1.5rem 3rem 0;
    transition: .5s ease;
}

.media-social a:hover{
    background: #f1c40f;
    color: #191f36;
    box-shadow: 0 0 1rem #f1c40f;
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
    cursor: pointer;
}

.btn:hover{
    box-shadow: none;
}


@media (max-width: 768px){
    .Home{
        flex-direction: column;
    }

    .home-content h3{
        font-size: 2rem;
    }

    .home-content h1{
        font-size: 4rem;
    }

    .home-img img{
        width: 50vw;
        margint-top:30px;
        text-align: center;
    }

    .home-content p{
        margin-right: 0;
    }

    .media-social a{
        margin: 1rem;
    }
}
`;


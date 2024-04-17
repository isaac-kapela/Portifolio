
import styled from "styled-components";

export const FooterContainer = styled.footer`



.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background: #111424;
}

.footer-texto{
    font-size: 1.6rem;
}

.footer-icon{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .8rem 1rem;
    background: #f1c40f;
    border-radius: .8rem;
    transition: .5s ease;
}

.footer-icon a:hover{
    box-shadow: 0 0 1rem #f1c40f;
}

.footer-icon a i{
    font-size: 2.4rem;
    color: #191f36;
    cursor: pointer;
}


`;
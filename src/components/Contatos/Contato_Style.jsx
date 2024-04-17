
import styled from "styled-components";

export const ContatoContainer = styled.section`

.contato h2 {
    margin-top: 3rem;
    text-align: center;
}

.contato form {
    max-width: 70rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;
}

.contato form .input-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.contato form .input-box input,
.contato form textarea {
    width: 100%;
    padding: 15px; 
    font-size: 1.6rem;
    color: black;
    background-color: white;
    border-radius: .8rem;
    margin: .7rem 0;
    
}

.contato form .input-box input {
    width: 49%;
}

.contato form textarea {
    resize: none;
}

.contato form .btn {
    margin-top: 2rem;
    cursor: pointer;
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

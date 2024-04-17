
import styled from "styled-components";

export const HeaderContainer = styled.header`


/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background: #111424;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }
  
  .logo {
    font-size: 2.5rem;
    font-weight: 700;
    color: wheat;
    cursor: default;
  }
  
  .navBar {
    width: auto;
    display: flex;
    justify-content: flex-end;
  }
  
  .navBar ul {
    list-style: none; 
    display: flex;
  }
  
  .navBar ul li {
    margin-left: 2rem; 
  }
  
  .navBar  a {
    font-size: 1.5rem;
    color: wheat;
    font-weight: 700;
  }
  
  .navBar a:hover,
  .navBar a.active {
    color: #f1c40f;
  }
  
      /* #meu-icons {
      font-size: 3.6rem;
      color: wheat;
      display: none;
      } */
  
 `;

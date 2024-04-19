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
    margin: 0;
    padding: 0;
  }
  
  .navBar ul li {
    margin-left: 2rem; 
  }
  
  .navBar a {
    font-size: 1.5rem;
    color: wheat;
    font-weight: 700;
    text-decoration: none;
  }
  
  .navBar a:hover,
  .navBar a.ativa {
    color: #f1c40f;
  }

  .menu-icon {
    font-size: 2rem;
    color: wheat;
    cursor: pointer;
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .navBar {
      position: fixed;
      top: 4rem;
      right: 0;
      width: 100%;
      height: calc(35vh - 2rem);
      background: #111424;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      transition: max-height 0.3s ease-out;
      max-height: ${props => (props.open ? "500px" : "0")};
      overflow: hidden;
      border-radius: 20px
      
    }
    .navBar ul {
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        display: ${props => (props.open ? "flex" : "none")};
        text-align: center;
    }
    .logo{
        font-size: 2rem;
    }

    .navBar ul li {
      width: 100%; 
      margin: 1rem 0; 
    }

    .menu-icon {
      display: block;
    }
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background: #111424;
    width: 100%;
  }

  .footer-texto {
    font-size: 1.6rem;
  }

  .footer-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1rem;
    background: #f1c40f;
    border-radius: 0.8rem;
    transition: 0.5s ease;
  }

  .footer-icon a:hover {
    box-shadow: 0 0 1rem #f1c40f;
  }

  .footer-icon a i {
    font-size: 2.4rem;
    color: #191f36;
    cursor: pointer;
  }

  .social-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
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
`;

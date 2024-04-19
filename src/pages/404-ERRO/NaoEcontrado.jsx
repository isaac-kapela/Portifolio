import Nao404 from "../../assets/erro404.png";
import * as S from './erro_style';
import NavBar from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NaoEcontrado() {
  return (
    <>
    <S.Erro>
      <NavBar/>
    <section>
      <img src={Nao404} alt=""/>
      </section>
      <Footer/>
      </S.Erro>
    </>
  )
}

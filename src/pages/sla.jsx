import Header from "../components/Header/Header"
import Inicio from "../components/Inicio/Home"
import Portfolio from "../components/Portifolio/Portifolio"
import Servicos from "../components/Servicos/Servicos"
import Sobre from "../components/Sobre/Sobre"
import Contato from "../components/Contatos/Contato"
import Footer from "../components/Footer/Footer"
export default function sla() {
  return (
    <>
    <Header />
    <Inicio />
    <Sobre />
    <Servicos />
    <Portfolio />
    <Contato />     
    <Footer />
    </>
  )
}

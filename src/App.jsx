import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/sobre/Sobre";
import Servicos from "./pages/servicos/Servicos";
import Portifolio from "./pages/Portifolio/Portifolio";
import Contato from "./pages/Contato/Contata"
import Nao44 from "./pages/404-ERRO/NaoEcontrado"
import Formacoes from "./pages/Formacao/Formacoes";

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/formacoes" element={<Formacoes />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Nao44/>} />
     </Routes>
     </BrowserRouter>


      
      
    </>
  )
}

export default App

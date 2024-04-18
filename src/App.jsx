import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/sobre/Sobre";
import Servicos from "./pages/servicos/Servicos";
import Portifolio from "./pages/Portifolio/Portifolio";
import Contato from "./pages/Contato/Contata"

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/contato" element={<Contato />} />
     </Routes>
     </BrowserRouter>


      
      
    </>
  )
}

export default App

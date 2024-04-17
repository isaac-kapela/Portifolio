import  { useState } from 'react';
import * as S from './Contato_style';
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/Header/Header"


export default function Contato() {
  const [formDados, setformDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleMudanca = (evento) => {
    setformDados({ ...formDados, [evento.target.name]: evento.target.value });
  };

  const handleEnviar = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    const subject = `Assunto: ${formDados.assunto}`;
    const body = `
      Nome: ${formDados.nome}
      Email: ${formDados.email}
      Telefone: ${formDados.telefone}
      Mensagem: ${formDados.mensagem}
    `;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "kapelajoao4@gmail.com"
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <S.ContatoContainer>
        <NavBar/>
      <section className="contato" id="contato">
        <h2 className="cabecalho">Meus <span>Contatos</span></h2>
        <form onSubmit={handleEnviar}>
          <div className="input-box">
            <input type="text" name="nome" placeholder="Nome" value={formDados.nome} onChange={handleMudanca} required />
            <input type="email" name="email" placeholder="Email" value={formDados.email} onChange={handleMudanca} required />
          </div>

          <div className="input-box">
            <input type="tel" name="telefone" placeholder="Telefone" value={formDados.telefone} onChange={handleMudanca} />
            <input type="text" name="assunto" placeholder="Assunto do Email" value={formDados.assunto} onChange={handleMudanca} required />
          </div>
          <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Mensagem" value={formDados.mensagem} onChange={handleMudanca} required></textarea>
          <button type="submit" value="Enviar Mensagem" className="btn btn1" >Enviar </button>
        </form>
      </section>
        <Footer/>
    </S.ContatoContainer>
  );
}

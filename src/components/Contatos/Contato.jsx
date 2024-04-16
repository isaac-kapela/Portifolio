
export default function Contato() {
    return (
      <section className="contato" id="contato">
        <h2 className="cabecalho">Meus <span>Contatos</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
          </div>
  
          <div className="input-box">
            <input type="tel" placeholder="Telefone" />
            <input type="text" placeholder="Assunto do Email" />
          </div>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem"></textarea>
          <input type="submit" value="Enviar Mensagem" className="btn btn1" />
        </form>
      </section>
    );
  }
  
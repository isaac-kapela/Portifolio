

export default function Home() {
  return (
    <section className="Home">
      <div className="home-content">
        <h3>Olá, eu sou</h3>
        <h1>Isaac Kapela</h1>
        <h3>E eu sou um <span>desenvolvedor frontend</span></h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem a explicabo laborum harum neque possimus incidunt blanditiis cumque enim eaque quia numquam quo perspiciatis earum at officia, quibusdam ratione architecto.
        </p>
        <div className="media-social">
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <a href="" className="btn">Baixar meu CV</a>
      </div>
      <div className="home-img">
        <img src="/assets/profiledp.png" alt="" />
      </div>
    </section>
  );
}

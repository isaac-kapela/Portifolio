
export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">Portifolio</a>
      <i className="fa-solid fa-bars" id="menu-icons"></i>
      <nav className="navBar">
        <ul>
          <li><a href="/" className="ativa">Home</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Serviços</a></li>
          <li><a href="/">Portifolio</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

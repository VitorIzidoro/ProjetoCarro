import { Link } from "react-router-dom";
import "../style/navbar.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FunilariaX</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/trabalhos">Trabalhos</Link></li>
        <li><Link to="/novidades">Novidades</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

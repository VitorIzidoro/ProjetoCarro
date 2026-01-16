import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="/logo.png" alt="Prover16" />
        <span>Prover16</span>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trabalho">Serviços</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/novidades">Orçamento</Link></li>
      </ul>

    </nav>
  );
}

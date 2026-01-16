import Header from "../components/navbar";
import Footer from "../components/footer";
import "../style/Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Funilaria & Pintura Automotiva</span>
          <h2>Seu carro tratado com perfeição</h2>
          <p>
            Recuperamos, pintamos e valorizamos seu veículo com técnicas
            modernas e acabamento impecável.
          </p>

          <Link to="/novidades" className="cta-btn">
  Solicitar orçamento
</Link>
        </div>
      </section>

      <section className="services" id="servicos">
        <h3>Nossos serviços</h3>

        <div className="services-grid">
          <div className="service-box">
            <span>🔧</span>
            <h4>Funilaria</h4>
            <p>Correções estruturais, alinhamento e reparos completos.</p>
          </div>

          <div className="service-box">
            <span>🎨</span>
            <h4>Pintura automotiva</h4>
            <p>Pintura premium com brilho, durabilidade e precisão.</p>
          </div>

          <div className="service-box">
            <span>✨</span>
            <h4>Estética automotiva</h4>
            <p>Polimento, revitalização e proteção da pintura.</p>
          </div>
        </div>
      </section>

      <section className="cta-final" id="contato">
  <h3>Quer deixar seu carro como novo?</h3>
  <p>Fale conosco agora mesmo e solicite um orçamento sem compromisso.</p>

  <Link to="/novidades" className="cta-btn">
  Solicitar orçamento
</Link>

</section>

      <Footer />
    </>
  );
}
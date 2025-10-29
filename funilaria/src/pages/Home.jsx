import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <h1>Seu carro com acabamento impecável</h1>
          <p>Funilaria e pintura com excelência e profissionais especializados</p>
          <a
            className="btn-cta"
            href="https://wa.me/551199999999999"
            target="_blank"
          >
            Solicitar Orçamento
          </a>
        </div>
      </header>

      <section className="services">
        <h2>Nossos Serviços</h2>
        <div className="service-list">

          <div className="service-card">
            <span>🔧</span>
            <h3>Funilaria</h3>
            <p>Correção estrutural e reparos completos.</p>
          </div>

          <div className="service-card">
            <span>🎨</span>
            <h3>Pintura Automotiva</h3>
            <p>Acabamento perfeito e brilho renovado.</p>
          </div>

          <div className="service-card">
            <span>✨</span>
            <h3>Estética Automotiva</h3>
            <p>Polimento, revitalização e limpeza técnica.</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

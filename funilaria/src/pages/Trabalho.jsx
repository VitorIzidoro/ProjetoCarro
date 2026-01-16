import "../style/Trabalho.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Servicos() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="servicos-hero">
        <div className="servicos-hero-content">
          <h1>Serviços & Trabalhos Realizados</h1>
          <p>
            Confira nossos serviços e veja na prática a transformação que
            entregamos em cada veículo.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="servicos-lista">
        <div className="servico-card">
          <h3>🔧 Funilaria com padrão de qualidade</h3>
          <p>
            Trabalhamos com atenção aos detalhes, materiais de qualidade e
            profissionais experientes para garantir um resultado durável e
            visualmente impecável.
          </p>
        </div>

        <div className="servico-card">
          <h3>🎨 Pintura Automotiva</h3>
          <p>
             Realizamos pintura completa ou parcial com preparação adequada,
  aplicação uniforme e acabamento de alto brilho, garantindo
  durabilidade, proteção e valorização do veículo.
          </p>
        </div>

        <div className="servico-card">
          <h3>✨ Estética Automotiva</h3>
          <p>Serviços de polimento técnico, revitalização da pintura e
  limpeza detalhada, focados em realçar o visual e preservar
  a aparência do seu carro por mais tempo.</p>
        </div>
      </section>

      {/* TRABALHOS */}
      <section className="trabalhos">
        <h2>Antes e Depois</h2>
        <p className="trabalhos-sub">
          Resultados reais de alguns dos nossos trabalhos.
        </p>

        <div className="trabalhos-grid">
          <div className="trabalho-card">
            <img src="/antes1.jpg" alt="Antes do serviço" />
            <img src="/depois1.jpg" alt="Depois do serviço" />
          </div>

          <div className="trabalho-card">
            <img src="/antes2.jpg" alt="Antes do serviço" />
            <img src="/depois2.jpg" alt="Depois do serviço" />
          </div>

          <div className="trabalho-card">
            <img src="/antes3.jpg" alt="Antes do serviço" />
            <img src="/depois3.jpg" alt="Depois do serviço" />
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

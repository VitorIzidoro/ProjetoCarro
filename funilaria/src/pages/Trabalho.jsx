import "../style/Trabalho.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import imagemantes1 from "../assets/imagemcarroantes1.jpeg"
import imagemdepois1 from "../assets/imagemcarrodepois1.jpeg"
import imagemantes2 from "../assets/imagemcarroantes2.jpeg"
import imagemdepois2 from "../assets/imagemcarrodepois2.jpeg"
import imagemantes3 from "../assets/imagemcarroantes3.jpeg"
import imagemdepois3 from "../assets/imagemcarrodepois3.jpeg"
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
  <h3>🔧 Funilaria e Reparos</h3>
  <p>
     Correção de amassados e imperfeições causadas por pequenos
    impactos, garantindo um acabamento uniforme e bem executado.
    O serviço preserva a estética do veículo, devolvendo a
    harmonia visual e valorizando o carro.
  </p>
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
            <img src={imagemantes1} alt="Antes do serviço" className="antes-carro" />
            <img src={imagemdepois1} alt="Depois do serviço" className="depois-carro"/>
          </div>

          <div className="trabalho-card">
            <img src={imagemantes2} alt="Antes do serviço" className="antes-carro" />
            <img src={imagemdepois2} alt="Depois do serviço" className="depois-carro" />
          </div>

          <div className="trabalho-card">
            <img src={imagemantes3} alt="Antes do serviço" className="antes-carro" />
            <img src={imagemdepois3} alt="Depois do serviço" className="depois-carro" />
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

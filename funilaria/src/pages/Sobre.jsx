import "../style/Sobre.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <>
    <Navbar/>
    <section className="sobre-container">
      
      <div className="sobre-intro">
        <h1>Sobre a Prover16</h1>
        <p>
          A Prover16 é uma empresa especializada em funilaria, pintura e
          estética automotiva, focada em devolver ao seu veículo a aparência,
          segurança e valorização que ele merece. Trabalhamos com soluções
          completas, atendendo desde pequenos reparos até serviços mais
          complexos, sempre com atenção aos mínimos detalhes.
        </p>
        <p>
          Nosso compromisso é oferecer um atendimento transparente,
          personalizado e de alta qualidade, garantindo que cada cliente
          tenha confiança e tranquilidade durante todo o processo.
        </p>
      </div>

      <div className="sobre-historia">
        <h2>Nossa História</h2>
        <p>
          A Prover16 nasceu da paixão por automóveis e da vontade de entregar
          serviços diferenciados no mercado automotivo. Desde o início,
          buscamos unir técnica, dedicação e responsabilidade para criar
          resultados que realmente façam a diferença.
        </p>
        <p>
          Ao longo do tempo, aprimoramos nossos processos, investimos em
          conhecimento e aperfeiçoamos nossos métodos de trabalho, sempre
          acompanhando as evoluções do setor automotivo. Cada projeto é
          tratado de forma única, respeitando as características e necessidades
          de cada veículo.
        </p>
      </div>

      <div className="sobre-diferenciais">
        <h2>Por que escolher a Prover16?</h2>
        <ul>
          <li>
            ✔ Profissionais qualificados e experientes, preparados para lidar
            com diferentes tipos de reparos e acabamentos.
          </li>
          <li>
            ✔ Uso de equipamentos adequados e técnicas modernas, garantindo
            precisão e qualidade em cada serviço.
          </li>
          <li>
            ✔ Acabamento de alto padrão, com foco em estética, durabilidade e
            valorização do veículo.
          </li>
          <li>
            ✔ Atendimento transparente, com comunicação clara em todas as
            etapas do serviço.
          </li>
        </ul>
      </div>

      <div className="sobre-valores">
        <h2>Nosso Compromisso</h2>
        <p>
          Nosso compromisso vai além da entrega do serviço. Prezamos pela
          confiança, respeito e satisfação de cada cliente, trabalhando com
          responsabilidade e ética em todas as etapas.
        </p>
        <p>
          Na Prover16, cada veículo é tratado como se fosse nosso. Buscamos
          sempre entregar segurança, qualidade e resultados que superem as
          expectativas, fortalecendo relacionamentos duradouros com nossos
          clientes.
        </p>
      </div>

    </section>
    <Footer/>
    </>
  );
}

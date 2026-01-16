import { useState } from "react";
import "../style/Orcamento.css";
import Footer from "../components/footer"
import Navbar from "../components/navbar"


export default function Orcamento() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    veiculo: "",
    descricao: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const mensagem = `
📌 *NOVO ORÇAMENTO*

👤 Nome: ${form.nome}
📞 Telefone: ${form.telefone}
🚗 Veículo: ${form.veiculo}
🛠 Serviço: ${form.descricao}
    `;

    const mensagemFormatada = encodeURIComponent(mensagem);

    window.open(
      `https://wa.me/5516997002006?text=${mensagemFormatada}`,
      "_blank"
    );
  }

  return (
    <>
    <Navbar/>
    <section className="orcamento-container">

      <div className="orcamento-header">
        <h1>Solicite um Orçamento</h1>
        <p>
          Preencha o formulário abaixo e fale conosco diretamente pelo
          WhatsApp.
        </p>
      </div>

      <form className="orcamento-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone / WhatsApp</label>
          <input
            type="tel"
            name="telefone"
            placeholder="(11) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Veículo</label>
          <input
            type="text"
            name="veiculo"
            placeholder="Ex: Gol 2018"
            value={form.veiculo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Descrição do serviço</label>
          <textarea
            name="descricao"
            placeholder="Descreva o problema ou serviço desejado"
            rows="4"
            value={form.descricao}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-orcamento">
          Enviar pelo WhatsApp
        </button>

      </form>

    </section>
    <Footer/>
            </>
  );
}

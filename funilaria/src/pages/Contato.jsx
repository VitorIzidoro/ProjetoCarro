

export default function Contato() {
  return (
    <>
      <Navbar />
      <main className="page">
        <h1>Contato</h1>
        <p>Telefone: (11) 99999-9999</p>
        <p>Endereço: Rua Exemplo, 123 - SP</p>
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </main>
      <Footer />
    </>
  );
}

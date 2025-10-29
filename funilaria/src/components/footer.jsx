import "../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FunilariaX — Todos os direitos reservados</p>
    </footer>
  );
}
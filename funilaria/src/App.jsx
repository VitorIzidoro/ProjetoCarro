import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Trabalhos from "./pages/Trabalho";
import Contato from "./pages/Contato";
import Novidades from "./pages/Novidades";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/trabalho" element={<Trabalhos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/novidades" element={<Novidades />} />
      </Routes>
    </Router>
  );
}

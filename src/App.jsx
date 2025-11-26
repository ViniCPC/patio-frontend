// App.jsx
import { useState } from "react";
import "./App.css";
import { BoxSelection } from "./compnents/BoxSelection";
import { Header } from "./compnents/Header/Header";
import { InputTableSelection } from "./compnents/InputTableSelection";
import { Dialog } from "./compnents/Dialog";
import { Carrossel } from "./compnents/Carrossel";
import { ContactSection } from "./compnents/ContactSection";
import { Footer } from "./compnents/Footer";
import { HeroSection } from "./compnents/HeroSection";
import { HowItWorks } from "./compnents/HowItWorks";
import { PreConsultTips } from "./compnents/PreConsultTips";
import { ImportantNotices } from "./compnents/ImportantNotices";

function App() {
  const [query, setQuery] = useState(""); // CPF ou placa digitado
  const [showDialog, setShowDialog] = useState(false);
  const [veiculo, setVeiculo] = useState(null); // dados do veículo
  const [error, setError] = useState(null); // mensagem de erro

  const fecharDialog = () => {
    setShowDialog(false);
    setError(null);
    setVeiculo(null);
  };

  const buscarVeiculo = async () => {
    if (!query.trim()) return;

    try {
      setError(null);
      setVeiculo(null);

      const resp = await fetch(
        `https://patio-backend.onrender.com/veiculos/buscar?query=${encodeURIComponent(
          query
        )}`
      );

      if (resp.status === 404) {
        setError("Veículo não encontrado.");
        setShowDialog(true);
        return;
      }

      if (!resp.ok) {
        setError("Erro ao buscar veículo.");
        setShowDialog(true);
        return;
      }

      const data = await resp.json();
      setVeiculo(data);
      setShowDialog(true);
    } catch (e) {
      console.error("ERRO NO FETCH:", e);
      setError(`Erro de conexão com o servidor: ${e.message}`);
      setShowDialog(true);
    }
  };

  return (
    <>
      <Dialog
        isOpen={showDialog}
        onClose={fecharDialog}
        veiculo={veiculo}
        error={error}
      />

      <Header />
      <HeroSection />
      <Carrossel />
      <BoxSelection />
      <HowItWorks />
      <PreConsultTips />

      {/* Passo o valor digitado + handlers para baixo */}

      <InputTableSelection
        query={query}
        onChangeQuery={setQuery}
        onBuscar={buscarVeiculo}
      />

      <ImportantNotices />

      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

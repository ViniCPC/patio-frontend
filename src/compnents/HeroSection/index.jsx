import "./hero-section-style.css";

export const HeroSection = () => {
  return (
    <section id="inicio" className="hero">
      <h1>Sistema de Consulta de Veículos Apreendidos</h1>
      <p>
        Consulte de forma rápida e segura a situação do seu veículo, o pátio
        responsável e os valores estimados de guincho, diária de pátio e taxas
        administrativas.
      </p>

      <a href="#consulta" className="hero-button">
        Consultar veículo agora
      </a>
    </section>
  );
};

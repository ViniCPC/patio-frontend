import "./how-works-style.css";

export const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>Como funciona</h2>
      <p className="how-works-text">
        Entenda os passos básicos para consultar a situação do seu veículo.
      </p>

      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <h3>Informe os dados</h3>
          <p>Digite o CPF do condutor ou a placa do veículo na área de consulta.</p>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <h3>Veja a situação</h3>
          <p>
            O sistema localiza o pátio responsável, o status do veículo e demais
            informações relevantes.
          </p>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <h3>Confira os valores</h3>
          <p>
            Consulte a estimativa de valores relacionados a guincho, diárias e
            taxas administrativas.
          </p>
        </div>
      </div>
    </section>
  );
};

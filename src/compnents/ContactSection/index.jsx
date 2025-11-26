// ContactSection.jsx
import "./contact-section-style.css";

export const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Fale conosco</h2>
        <p className="contact-subtitle">
          Em caso de dúvidas sobre veículos, pátio ou valores, entre em contato
          preenchendo o formulário abaixo.
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            // futuramente você pode mandar isso para o backend
            alert("Mensagem enviada! (aqui depois você faz o backend 😄)");
          }}
        >
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <input
              id="assunto"
              type="text"
              placeholder="Ex: Dúvida sobre veículo removido"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="4"
              placeholder="Descreva sua solicitação ou dúvida"
              required
            />
          </div>

          <button type="submit" className="btn-enviar">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

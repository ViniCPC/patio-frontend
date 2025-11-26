// Footer.jsx
import "./footer-style.css";

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Sistema de Consulta Veicular</h4>
          <p>
            Protótipo acadêmico integrado entre PRF, pátios veiculares e
            condutores. Informações meramente ilustrativas.
          </p>
        </div>

        <div className="footer-right">
          <p>
            Contato: <a href="mailto:contato@sistema.com.br">contato@sistema.com.br</a>
          </p>
          <p>Atendimento: 08h às 18h (dias úteis)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sistema de Consulta Veicular — Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

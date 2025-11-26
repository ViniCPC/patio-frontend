// Header.jsx
import "./header-style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo / Nome do sistema */}
        <div className="logo-block">
          <div className="logo-badge">
            <span>PRF</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">Polícia Rodoviária</span>
            <span className="logo-subtitle">Sistema de Consulta Veicular</span>
          </div>
        </div>

        {/* Navegação */}
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#consulta">Consultar Veículos</a>
          <a href="#tabela">Tabela de valores</a>
          <a href="#contato">Fale conosco</a>
        </nav>
      </div>
    </header>
  );
};

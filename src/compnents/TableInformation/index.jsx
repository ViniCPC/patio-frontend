import "./table-information-style.css";

export const TableInformation = ({ tabela, texto }) => {
  return (
    <div className="table-info-container">
      <h4 className="table-title">{tabela}</h4>

      <p className="table-description">{texto}</p>

      <ul className="table-list">
        <li>
          <span>Guincho</span>
          <span>R$ 250,00</span>
        </li>

        <li>
          <span>Diário de pátio</span>
          <span>R$ 80,00</span>
        </li>

        <li>
          <span>Taxa administrativa</span>
          <span>R$ 80,00</span>
        </li>

        <li className="total">
          <span>Total</span>
          <span>R$ 450,00</span>
        </li>
      </ul>
    </div>
  );
};

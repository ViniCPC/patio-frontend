// src/compnents/ImportantNotices.jsx
import "./important-notices-style.css";
import { MdInfoOutline } from "react-icons/md";

export const ImportantNotices = () => {
  return (
    <section className="important-notices">
      <div className="important-notices-inner">
        <div className="important-notices-icon">
          <MdInfoOutline />
        </div>

        <div className="important-notices-text">
          <h3>Avisos importantes</h3>
          <ul>
            <li>
              Os valores exibidos são estimativas e podem sofrer ajustes no momento
              da liberação do veículo.
            </li>
            <li>
              Em caso de divergência, prevalecem as informações fornecidas pelos
              pátios credenciados e órgãos oficiais.
            </li>
            <li>
              Este sistema possui caráter informativo e não substitui orientações
              presenciais ou legais.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

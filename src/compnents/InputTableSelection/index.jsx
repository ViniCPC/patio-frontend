// InputTableSelection.jsx
import { SelectionInformation } from "../SelectionInformation";
import { TableInformation } from "../TableInformation";
import "./input-table-selection-style.css";

export const InputTableSelection = ({ query, onChangeQuery, onBuscar }) => {
  return (
    <section id="consulta">
      <div className="div-select-table">
        <div className="col-left">
          <SelectionInformation
            query={query}
            onChangeQuery={onChangeQuery}
            onBuscar={onBuscar}
          />
        </div>
        <div className="col-right">
          <TableInformation
            tabela="Tabela de valores"
            texo="Valores que deve pagar"
          />
        </div>
      </div>
    </section>
  );
};

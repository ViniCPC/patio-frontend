// SelectionInformation.jsx
import { ConsultInformation } from "../ConsultInformation";
import { InputPlacasCpf } from "../ImputPlacasCpf";
import './selection-information-style.css'

export const SelectionInformation = ({ query, onChangeQuery, onBuscar }) => {
  return (
    <div className="selection-container">
      <ConsultInformation
        titulo="Consultar veículo/condutor"
        texto="Informe dados do veículo e do condutor "
      />
      <InputPlacasCpf
        value={query}
        onChange={e => onChangeQuery(e.target.value)}
        onBuscar={onBuscar}
      />
    </div>
  );
};

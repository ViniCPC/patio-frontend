import "./imput-placas-cpf-style.css";

export const InputPlacasCpf = ({ value, onChange, onBuscar }) => {
  return (
    <div className="input-container">
      <input
        className="input-consulta"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite CPF ou placa"
      />

      <button className="btn-buscar" onClick={onBuscar}>
        Buscar
      </button>
    </div>
  );
};

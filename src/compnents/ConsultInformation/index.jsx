import "./consult-information-style.css";

export const ConsultInformation = ({ titulo, texto }) => {
  return (
    <div className="consult-container">
      <h3 className="consult-title">{titulo}</h3>
      <p className="consult-text">{texto}</p>
    </div>
  );
};

import "./Box-information-style.css";

export const BoxInformation = ({ titulo, texto, Icon }) => {
  return (
    <>
      <div className="div-box-information">
        <div className="title-box-information">
          {Icon && <Icon className="box-icon" />}
          <h2>{titulo}</h2>
        </div>
        <p>{texto}</p>
      </div>
    </>
  );
};

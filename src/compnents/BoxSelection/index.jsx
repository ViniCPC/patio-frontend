import { BoxInformation } from "../BoxInformation";
import "./box-selection-style.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiTable } from "react-icons/bi";

export const BoxSelection = () => {
  return (
    <div className="box-selection">
      <BoxInformation
        titulo="Consultar veículo"
        texto="Informe os dados do veículo ou do condutor para saber em qual pátio o seu veículo se encontra"
        Icon={FaMagnifyingGlass}
      />
      <BoxInformation
        titulo="Tabela de valores"
        texto="Regras, documentos necessários e valores atualizados"
        Icon={BiTable}
      />
      <BoxInformation
        titulo="Fale conosco / Suporte"
        texto="Canais de atendimento, telefone e suporte rápido"
        Icon={BsFillTelephoneFill}
      />
    </div>
  );
};

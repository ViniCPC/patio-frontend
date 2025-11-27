// Dialog.jsx
import { useEffect, useRef } from "react";
import "./dialog-setyle.css"; // sugiro renomear o arquivo pra isso

export const Dialog = ({ isOpen, onClose, veiculo, error }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
    onClose && onClose();
  };

  const isLoading = !veiculo && !error && isOpen;

  return (
    <dialog ref={dialogRef} className="custom-dialog" onCancel={handleClose}>
      <div className="dialog-header">
        <h2>{error ? "Aviso" : "Informações do veículo"}</h2>
        <button
          type="button"
          className="dialog-close"
          onClick={handleClose}
          autoFocus
        >
          ×
        </button>
      </div>

      <div className="dialog-body">
        {isLoading && <p>Buscando informações, aguarde...</p>}

        {error && (
          <div className="dialog-message dialog-error">
            <p>{error}</p>
          </div>
        )}

        {veiculo && (
          <div className="dialog-info">
            <p>
              <strong>Placa:</strong> {veiculo.placa}
            </p>
            <p>
              <strong>Propretário:</strong> {veiculo.propretario}
            </p>
            <p>
              <strong>CPF/CNPJ:</strong> {veiculo.cpfCnpj}
            </p>
            <p>
              <strong>Pátio:</strong> {veiculo.patio}
            </p>
            <p>
              <strong>Modelo:</strong> {veiculo.modelo}
            </p>
            <p>
              <strong>Cidade:</strong> {veiculo.cidade}
            </p>
            <p>
              <strong>Rua:</strong> {veiculo.rua}
            </p>
            <p>
              <strong>Status:</strong> {veiculo.status}
            </p>
            <p>
              <strong>Multa:</strong> {veiculo.multa}
            </p>
            {/* adiciona outros campos se quiser */}
          </div>
        )}
      </div>

      <div className="dialog-footer">
        <button type="button" className="dialog-button" onClick={handleClose}>
          Fechar
        </button>
      </div>
    </dialog>
  );
};

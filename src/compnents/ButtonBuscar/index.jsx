import "./button.buscar.style.css";

export const ButtonBuscar = ({ children, ...props }) => {
  return (
    <button {...props}>
        {children}
    </button>
  )
};

import ControlDePresupuesto from "./ControlDePresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos
}) => {
  return (
    <div>
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlDePresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
      </header>
    </div>
  );
};

export default Header;

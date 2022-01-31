import ControlDePresupuesto from "./ControlDePresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <div>
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlDePresupuesto
          presupuesto={presupuesto}
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

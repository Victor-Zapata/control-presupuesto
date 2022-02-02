import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlDePresupuesto = ({ presupuesto, gastos }) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
   
    // Calcular el pocentaje gastado
    setTimeout;
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 800);
  }, [gastos]);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
        styles={buildStyles({
          pathColor:'#3B82F6',
          trailColor:'#F5F5F8', 
          textColor: '#3B82F6', 
        })}
        value={porcentaje} 
        text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatter.format(presupuesto)}
        </p>

        <p>
          <span>Disponible:</span> {formatter.format(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formatter.format(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlDePresupuesto;

import { useEffect, useState } from "react";

const ControlDePresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  
  useEffect(() => {
  const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
  
  console.log(totalGastado);
  
  setGastado(totalGastado)
  setDisponible(presupuesto - totalGastado)
  
  }, [gastos]);

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> { formatter.format(presupuesto)} 
        </p>

        <p>
          <span>Disponible:</span> { formatter.format(disponible)} 
        </p>        
        
        <p>
          <span>Gastado:</span> { formatter.format(gastado)} 
        </p>

      </div>
    </div>
  );
};

export default ControlDePresupuesto;

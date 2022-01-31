const ControlDePresupuesto = ({presupuesto}) => {

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
          <span>Disponible:</span> { formatter.format(0)} 
        </p>        
        
        <p>
          <span>Gastado:</span> { formatter.format(0)} 
        </p>

      </div>
    </div>
  );
};

export default ControlDePresupuesto;

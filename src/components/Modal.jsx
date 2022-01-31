import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombreGasto, setNombreGasto] = useState("");

  const handleGasto = (e) => {
    setNombreGasto(e.target.value);
    console.log(e.target.value);
  };

  const [cantidad, setCantidad] = useState("");

  const handleCantidad = (e) => {
    setCantidad(Number(e.target.value));
    console.log(Number(e.target.value));
  };

  const [categoria, setCategoria] = useState("");

  const handleCategoria = (e) => {
    setCategoria(e.target.value);
    console.log(e.target.value);
  };

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (nombreGasto.length === 0) {
      setMensaje("pone gasto");
    } else if (cantidad === "") {
      setMensaje("pone cantidad");
    } else if (categoria === "") {
      setMensaje("pone categoria");
    }

    guardarGasto({nombreGasto, cantidad, categoria})

  };

  const [mensaje, setMensaje] = useState('');

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleForm}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
            value={nombreGasto}
            onChange={handleGasto}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade el nombre del Cantidad: ej. 300"
            value={cantidad}
            onChange={handleCantidad}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={handleCategoria}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;

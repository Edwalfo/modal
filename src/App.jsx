// Importamos las dependencias necesarias
import { useState } from "react";
import Modal from "./Modal";

// Definimos el componente App
function App() {
  // Definimos el estado para controlar la visibilidad del modal y el nodo
  const [showModal, setShowModal] = useState(false);
  const [nodo, setNodo] = useState("");

  // Función para cerrar el modal
  const handleModalClose = () => setShowModal(false);

  // Función para actualizar el nodo
  const handleUpdateNodo = () => {
    console.log("Update nodo", nodo);
    setShowModal(false); // Cerramos el modal después de actualizar
  };

  // Función para editar el nodo
  const handleEditNodo = (id) => {
    console.log("Edit nodo", id);
    setNodo("Administrador"); // Establecemos un valor predeterminado para el nodo
    setShowModal(true); // Abrimos el modal para editar
  };

  // Función para manejar el cambio de valor del nodo
  const handleInputChange = (e) => {
    setNodo(e.target.value); // Actualizamos el valor del nodo con el valor ingresado
  };

  // Renderizamos el componente
  return (
    <>
      <h1>Hello world</h1>

      <i
        className="fa-solid fa-plus text-primary me-1 pointer"
        onClick={() => console.log("Agregar")} // Log al agregar
      ></i>

      <i
        className="fa-solid fa-pen-to-square text-warning me-1 pointer"
        onClick={() => handleEditNodo(10)} // Llamamos a la función de edición al hacer clic
      ></i>
      <i
        className="fa-solid fa-trash text-danger pointer"
        onClick={() => console.log("Eliminar")} // Log al eliminar
      ></i>

      {/* Renderizamos el modal con las props necesarias */}
      <Modal
        onClose={handleModalClose}
        showModal={showModal}
        updateNodo={handleUpdateNodo}
        nodo={nodo}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

// Exportamos el componente App
export default App;
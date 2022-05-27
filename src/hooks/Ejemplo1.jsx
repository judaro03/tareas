/**
 * Ejemplo del hook useState
 *
 * Crear un Componente de tipo funcion y acceder  a su estado
 * privado a traves de un hook  y ademas poder modificarlo
 */
import React, { useState } from "react";

const Ejemplo1 = () => {
  //Valor inicial para un contador
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: "Juan",
    email: "juanrojasb03@gmail.com",
  };
  /**
   * Queremos que el VALORINICIAL Y PERSONAINICIAL
   * sean parte del estado del componente para asi poder gestionar su cambio
   * y este se vea reflejado en la vista del componente
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);
  /**
   * Funcion para actualizar el estado privado del contador
   */
  function incrementarContador() {
    setContador(contador + 1);
  }
  /**
   * Funcion para actualizar el estado privado de la persona
   */
  function actualizarPersona() {
    setPersona({
      nombre: "pepe",
      email: "pepe@gmail.com",
    });
  }
  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>CONTADOR:{contador}</h2>
      <h2>DATOS PERSONA</h2>
      <h3>Nombre:{persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={incrementarContador}>INCREMENTAR</button>
      <button onClick={actualizarPersona}>CAMBIAR PERSONA</button>
    </div>
  );
};

export default Ejemplo1;

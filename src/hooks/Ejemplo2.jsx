/**
 * Ejemplo de uso de :
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //Dos contadores con valores diferentes
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  //Vamos a crear una Referencia con useRef()  para asociar una variable
  //con un elemento del DOM del componente
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }
  /**
   * Trabajando con useEffect
   *
   */
  /**
   * ? caso 1: Ejecutar SIEMPRE un snippet de codigo
   * cada vez que haya uun cambio en el estado del componente
   * se ejecuta aquello que este dentro del useEffect()
   */
  //   useEffect(() => {
  //     console.log("cambio en el estado del componente");
  //     console.log("Mostrando Referencia a elemento del DOM:");
  //     console.log(miRef);
  //   });
  /**
   * ? caso 2: Ejecutar SOLO CUANDO cambie CONTADOR 1
   * cada vez que haya uun cambio en el estado del contador 1
   * se ejecuta aquello que este dentro del useEffect()
   * En caso de que cambie contador 2 no habra ejecucion
   */
  //   useEffect(() => {
  //     console.log("cambio en el estado del contador 1");
  //     console.log("Mostrando Referencia a elemento del DOM:");
  //     console.log(miRef);
  //   }, [contador1]);
  /**
   * ? caso 3: Ejecutar SOLO CUANDO cambie CONTADOR 1 o CONTADOR 2
   * cada vez que haya uun cambio en el estado del contador 1 o 2
   * se ejecuta aquello que este dentro del useEffect()
   * En caso de que cambie otro no habra ejecucion
   */
  useEffect(() => {
    console.log("cambio en el estado del contador 1 o 2");
    console.log("Mostrando Referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1, contador2]);
  return (
    <div>
      <h1>***Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>CONTADOR1: {contador1}</h2>
      <h2>CONTADOR2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* botones para cambiar los contadores */}
      <button onClick={incrementar1}>INCREMENTAR CONTADOR 1</button>
      <button onClick={incrementar2}>INCREMENTAR CONTADOR 2</button>
    </div>
  );
};

export default Ejemplo2;

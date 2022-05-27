/**
 * Ejemplo de uso del metodo componetn willunmount
 * en componente clase y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    //aqui no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);
  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
};

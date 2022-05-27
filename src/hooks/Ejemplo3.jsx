/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */
import React, { useState, useContext } from "react";
/**
 * Componente 1 dispone de un contexto que va tener un valor que recibe del padre
 *
 */
const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es:{state.token}</h1>
      {/* Compoente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesión es: {state.session}</h2>
    </div>
  );
};

export default function MiComponenteConContexto() {
  const estadoinicial = {
    token: "1234567",
    session: 1,
  };
  //Creamos el estado del componente
  const [sessionData, setSessionData] = useState(estadoinicial);
  function actualizarSesion() {
    setSessionData({
      token: "JWT123123123",
      session: sessionData.session + 1,
    });
  }
  return (
    <miContexto.Provider value={sessionData}>
      {/*todo lo que esta aqui dentro  puede leer los datos  de session data
        ademas si se actualiza, los componentes de aqui tambien lo actualizan
      */}
      <h1>*** Ejemplo de useState() y useContext() ***</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar session</button>
    </miContexto.Provider>
  );
}

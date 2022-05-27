import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("Componente actualizado");
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("actualizacion del componente");
    }, 1000);
    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div>
      <h1>Todos los ciclos</h1>
    </div>
  );
};

export default AllCycles;

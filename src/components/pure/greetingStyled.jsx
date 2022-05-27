import React, { useState } from "react";

//definiendo estilos en constantes:
//? Estilo para usuario logueado
const loggedStyle = {
  color: "white",
};
//? Estilo para usuario no logueado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};
const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);
  const greetingUser = () => <p>Hola {props.name}</p>;
  const pleaseLogin = () => <p>Please Login</p>;
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}

      <button
        onClick={() => {
          console.log("Boton Pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "logout" : "login"}
      </button>
    </div>
  );
};

export default GreetingStyled;

/**
 * Componente que va a contener un formulario para
 * autenticación de usuarios
 */
import React, { useState } from "react";

const LoginForm = () => {
  const initialData = [{ user: "", name: "", password: "", email: "" }];
  const [data, setData] = useState(initialData);
  return <div></div>;
};

export default LoginForm;

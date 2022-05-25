import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Juan",
    "Rojas",
    "loco0302.jr@gmail.com",
    false
  );
  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };
  return (
    <div>
      <h1>Tareas</h1>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;

/**
 * Ejemplo de componente de tipo clase que dispone de los metodos
 * del ciclo de vida
 */
import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR CUANDO SE INSTANCIA EL COMPONENTE");
  }

  componentWillMount() {
    console.log("WILLMOUNT: ANTES DEL MONTAJE");
  }

  componentDidMount() {
    console.log(
      "DIDMOUNT: JUSTO AL ACABER EL MONTAJE DEL COMPONENETE ANTES DE PINTARLO"
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("WILLRECEIVEPROPS: SI VA RECIBIR NUEVAS PROPS");
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controla si el componente debe o no actualizarse
     */
    //   return true / false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("WILLUPDATE: JUSTO ANTES DE ACTUALIZARSE");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DID UPDATE: JUSTO DESPUES DE ACTUALIZARSE");
  }

  componentWillUnmount() {
    console.log("WILLUNMOIUNT: JUSTO ANTES DE DESAPARECER");
  }

  render() {
    return <div></div>;
  }
}


export default LifeCycleExample;

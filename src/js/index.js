import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// incluye tus estilos en el paquete de webpack
import "../styles/index.css";

function SimpleCounter(props) {
  // Mapeamos cada dígito a un color específico
  const digitColors = {
    0: "white",
    1: "blue",
    2: "salmon",
    3: "orange",
    4: "purple",
    5: "cyan",
    6: "red",
    7: "yellow",
    8: "fuchsia",
    9: "green"
  }; 

  return (

    <div className="BigCounter">
      <div className="Contador">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
      </div>
      {/* Aplicamos el color según el dígito */}
      <div style={{ color: digitColors[props.digitSeis % 10] }}>{props.digitSeis % 10}</div>
      <div style={{ color: digitColors[props.digitCinco % 10] }}>{props.digitCinco % 10}</div>
      <div style={{ color: digitColors[props.digitCuatro % 10] }}>{props.digitCuatro % 10}</div>
      <div style={{ color: digitColors[props.digitTres % 10] }}>{props.digitTres % 10}</div>
      <div style={{ color: digitColors[props.digitDos % 10] }}>{props.digitDos % 10}</div>
      <div style={{ color: digitColors[props.digitUno % 10] }}>{props.digitUno % 10}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitSeis: PropTypes.number,
  digitCinco: PropTypes.number,
  digitCuatro: PropTypes.number,
  digitTres: PropTypes.number,
  digitDos: PropTypes.number,
  digitUno: PropTypes.number
};

let Contador = 0;
setInterval(function () {
  const seis = Math.floor(Contador / 100000);
  const cinco = Math.floor(Contador / 10000);
  const cuatro = Math.floor(Contador / 1000);
  const tres = Math.floor(Contador / 100);
  const dos = Math.floor(Contador / 10);
  const uno = Math.floor(Contador / 1);
  console.log(seis, cinco, cuatro, tres, dos, uno);
  Contador++;
  // renderiza tu aplicación React
  ReactDOM.render(
    <SimpleCounter
      digitUno={uno}
      digitDos={dos}
      digitTres={tres}
      digitCuatro={cuatro}
      digitCinco={cinco}
      digitSeis={seis}
    />,
    document.querySelector("#app")
  );
}, 1000);

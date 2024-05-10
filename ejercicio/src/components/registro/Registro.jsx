import React from "react";

const Registro = ({ eventos }) => {
   return (
      <div>
         <h2>Eventos Registrados</h2>
         <ul>
            {eventos.map((evento, index) => (
               <li key={index}>
                  <h3>{evento.nombre}</h3>
                  <p>
                     <strong>Fecha:</strong> {evento.fecha}
                  </p>
                  <p>
                     <strong>Ubicación:</strong> {evento.ubicacion}
                  </p>
                  <p>
                     <strong>Descripción:</strong> {evento.descripcion}
                  </p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Registro;

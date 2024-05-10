import React, { useState } from "react";
import "./App.css";

function App() {
   const [evento, setEvento] = useState({
      nombre: "",
      fecha: "",
      ubicacion: "",
      descripcion: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setEvento((prevEvento) => ({
         ...prevEvento,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(evento);

      setEvento({
         nombre: "",
         fecha: "",
         ubicacion: "",
         descripcion: "",
      });
   };

   return (
      <div className="App">
         <div className="form-container">
            <section>
               <img className="fondo" src="/src/assets/fondo.png.jpg"></img>
            </section>
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Nombre del Evento:</label>
                  <input
                     type="text"
                     name="nombre"
                     value={evento.nombre}
                     onChange={handleChange}
                     className="input-field"
                  />
               </div>
               <div className="form-group">
                  <label>Fecha:</label>
                  <input
                     type="date"
                     name="fecha"
                     value={evento.fecha}
                     onChange={handleChange}
                     className="input-field"
                  />
               </div>
               <div className="form-group">
                  <label>Ubicación:</label>
                  <input
                     type="text"
                     name="ubicacion"
                     value={evento.ubicacion}
                     onChange={handleChange}
                     className="input-field"
                  />
               </div>
               <div className="form-group">
                  <label>Descripción:</label>
                  <textarea
                     name="descripcion"
                     value={evento.descripcion}
                     onChange={handleChange}
                     className="input-field"
                  />
               </div>
               <button type="submit" className="btn">
                  Registrar Evento
               </button>
            </form>
         </div>
      </div>
   );
}

export default App;

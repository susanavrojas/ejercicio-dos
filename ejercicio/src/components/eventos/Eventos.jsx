import React, { useState } from "react";
import "./App.css";
import EventList from "./components/EventList";

function App() {
   const [eventos, setEventos] = useState([]);

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

      setEventos((prevEventos) => [...prevEventos, evento]);

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
            <form onSubmit={handleSubmit}></form>
         </div>
         <EventList eventos={eventos} />
      </div>
   );
}

export default App;

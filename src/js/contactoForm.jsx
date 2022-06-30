import React,{useState} from "react";
import '../styles/contactoFormulario.css'
import {v4 as uuidv4}from 'uuid'

function ContactoFormulario(props){
const [input,setInput]=useState();


const manejarCambio=e=>{
setInput(e.target.value);
console.log(e.target.value)
}
    const manejarEnvio=e=>{
        e.preventDefault();
        console.log('enviando')
        const contactoNuevo={
           id:uuidv4(),
           texto:input,
           completada:false
        }
     props.onSubmit(contactoNuevo)
    }
 return(
     <form 
     className="contacto-formulario"
     onSubmit={manejarEnvio}>
         <input
         className="contacto-input"
         type='text'
         placeholder="Escribe tu contacto"
         name="texto"
         onChange={manejarCambio}

         />
        <button className="contacto-boton">
             agregar Contacto     
        </button>

     </form>
 )

}
export default ContactoFormulario
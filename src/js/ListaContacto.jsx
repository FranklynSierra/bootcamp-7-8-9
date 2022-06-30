import React,{useState} from "react";

import '../styles/lista.css'
import Contacto from "./contacto";

import ContactoFormulario from "./contactoForm";


function ListaContacto(){

const [contactos,setContacto]=useState([]);
const agregarContacto=contacto=>{
    console.log(contacto)
if(contacto.texto.trim()){

    contacto.texto=contacto.texto.trim();
    const contactosActualizados=[contacto,...contactos]
    setContacto(contactosActualizados)
}
}
const eliminarContacto=id=>{
    const contactosActualizados=contactos.filter(contacto=>contacto.id !==id);
    setContacto(contactosActualizados)
}
const completarContacto=id=>{
    const contactosActualizados=contactos.map(contacto=>{
        if(contacto.id===id){
           contacto.completada=!contacto.completada
        }
    return contacto
    });
    setContacto(contactosActualizados)
}
    return(

       <>
       <ContactoFormulario onSubmit={agregarContacto}/>
       <div className="contacto-lista-contenedor">
           {
               contactos.map((contacto)=>
               <Contacto
               key={contacto.id}
               id={contacto.id}
               texto={contacto.texto}
               completada={contacto.completada}
               eliminarContacto={eliminarContacto}
               completarContacto={completarContacto}
               />
               
               )
           }
       </div>
       </>
    )
}

export default ListaContacto
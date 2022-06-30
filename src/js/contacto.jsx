import React from 'react';
import '../styles/contacto.css'
import { AiOutlineCloseSquare} from "react-icons/ai";
function Contacto({id,texto,completada,completarContacto,eliminarContacto}){

    return(
    <div className={completada?'contacto-contenedor completada' : 'contacto-contenedor'}>
        <div 
        className='contacto-texto'
        onClick={()=>completarContacto(id)}>
            {texto}
        </div>
        <div 
        className='tarea-contenedor-iconos'
        onClick={()=>eliminarContacto(id)}>
            <AiOutlineCloseSquare className='contacto-icono'/>
        </div>
    </div>
    );
}

export default Contacto
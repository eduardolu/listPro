import { useDispatch,useSelector } from "react-redux"

import {crearNuevoProductoAction} from '../actions/productosAction'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaAction";

export const NuevoProducto = () => {
    const history = useNavigate();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const distach = useDispatch();

    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    const agregarProducto = (producto) => distach(crearNuevoProductoAction(producto));
    const submitNuevoProducto = e => {
        e.preventDefault();
        if(nombre.trim() === '' || precio <= 0){
            const respuesta = {
                msg:'todos los campos son obligatorios',
                classes:'alert alert-danger text-center text-uppercase p3'
            }
            distach(mostrarAlerta(respuesta));
            return;
        }   
        distach(ocultarAlertaAction());
        agregarProducto({
            nombre,
            precio
        })
        history('/');
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                        agregar nuevo producto
                     </h2>
                    {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                     <form onSubmit={submitNuevoProducto}>
                        <div className='form-group'>
                            <label>Nombre de producto</label>  
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Nombre de producto'
                                name='nombre'
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                                />  
                        </div>
                        <div className='form-group'>
                            <label>precio de producto</label>  
                            <input 
                                type="number"
                                className='form-control'
                                placeholder='precio de producto'
                                name='precio'
                                value={precio}
                                onChange={e => setPrecio(Number(e.target.value))}
                                />  
                        </div>
                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>agregar</button>
                     </form>
                     {cargando ? <p>cargando...</p> : null}
                     {error ? <p className='alert alert-danger p2 mt-4 text-center'>hubo un error</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

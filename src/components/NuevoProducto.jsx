import { useDispatch,useSelector } from "react-redux"

import {crearNuevoProductoAction} from '../actions/productosAction'
import { useState } from "react";

export const NuevoProducto = ({history}) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const distach = useDispatch();

    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    const agregarProducto = (producto) => distach(crearNuevoProductoAction(producto));
    const submitNuevoProducto = e => {
        e.preventDefault();
        if(nombre.trim() === '' || precio <= 0){
            return;
        }   
        // const nombre = e.target.nombre.value;
        // const precio = e.target.precio.value;
        agregarProducto({
            nombre,
            precio
        })
        history.push('/');
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                        agregar nuevo producto
                     </h2>

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

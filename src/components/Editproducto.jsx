import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productosAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Editproducto = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [producto,guardarProducto] = useState({
        nombre:'',
        precio:''
    });
    const productoEditar = useSelector(state => state.productos.productoeditar);
    useEffect(() => {
        guardarProducto(productoEditar.producto)
    }   
    , [productoEditar]);

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    const {nombre,precio} = producto;

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch( editarProductoAction(producto));
        history('/');
        }
  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                        editar producto
                     </h2>

                     <form onSubmit={submitEditarProducto}>
                        <div className='form-group'>
                            <label>Nombre de producto</label>  
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Nombre de producto'
                                name='nombre'
                                value={nombre}
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
                                />  
                        </div>
                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>guardar cambios</button>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

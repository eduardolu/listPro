import React from 'react'
import { useNavigate } from 'react-router-dom';
import { borrarProductoAction, obtenerProductoEditarAction } from '../actions/productosAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const Producto = (producto) => {
    const {nombre,precio,id} = producto.producto;
    const dispatch = useDispatch();
    const history = useNavigate();

    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: '¿estas seguro?',
            text: "un producto eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33', 
            confirmButtonText: 'si, eliminar',
            cancelButtonText: 'cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));
            }
          })
        }
        const redireccionarEdicion = producto => {
            dispatch(obtenerProductoEditarAction(producto));
            history(`/productos/editar/${producto.producto.id}`)
        }
  return (
    <tr>
        <td>{nombre}</td>
        <td><span className='font-weight-bold'>{precio} €</span></td>
        <td className='acciones'>
            <button 
                type='button' 
                className='btn btn-primary mr-2'
                onClick={()=>redireccionarEdicion(producto)}    
            >
                editar
            </button>
            <button 
                type='button'
                className='btn btn-danger'
                onClick={()=>confirmarEliminarProducto(id)}
            >
                eliminar
            </button>
        </td>
    </tr>
  )
}

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_EXITO,
    COMENZAR_DESCARGA_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export const crearNuevoProductoAction = (productos) => { 
    return async(dispatch) => {
        dispatch( agregarProducto());
        try {
            await clienteAxios.post('/productos', productos);
            dispatch(agregarProductoExito(productos));
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )   
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});
const agregarProductoExito = (productos) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: productos
}); 
const agregarProductoError = (estado) => ({ 
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
}); 

export const obtenerProductosAction = () => {
    return async(dispatch) => {
        dispatch(descargarProductos());
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data));
        } catch (error) {
            dispatch(descargarProductosError());
        }
    }
}
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
}); 

const descargarProductosExitosa = (productos) => ({ 
    type: COMENZAR_DESCARGA_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: COMENZAR_DESCARGA_ERROR,
    payload: true
}); 

export const borrarProductoAction = (id) => {
    return async(dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }   
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({  
    type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = () => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: true
});
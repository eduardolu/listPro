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
    COMENZAR_EDICION_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR,
} from '../types';


const inicialState= {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: null,
}

export const productoReducer =(state = inicialState, action)=> {
    switch(action.type) {
        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
            return ({
                ...state,
                loading: true,
                error: null,
            })
        case AGREGAR_PRODUCTO_EXITO:
            return ({
                ...state,
                loading: false,
                error: null,
                productos: [...state.productos, action.payload]
            })
        case AGREGAR_PRODUCTO_ERROR:
        case COMENZAR_DESCARGA_ERROR:
        case ELIMINAR_PRODUCTO_ERROR:
        case EDITAR_PRODUCTO_ERROR:
            return ({
                ...state,
                loading: false,
                error: true,
            })
        case COMENZAR_DESCARGA_EXITO:
            return ({
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            })
        case OBTENER_PRODUCTO_ELIMINAR:
            return ({
                ...state,
                productoeliminar: action.payload,
                error: null,
            })
        case ELIMINAR_PRODUCTO_EXITO:  
            return ({
                ...state,
                error: null,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar : null
            })
        case OBTENER_PRODUCTO_EDITAR:
            return ({
                ...state,
                error: null,
                productoeditar: action.payload,
            })
        case COMENZAR_EDICION_PRODUCTO:
            return ({
                ...state,
                error: null,
            })
        case EDITAR_PRODUCTO_EXITO:
            return ({
                ...state,
                error: null,
                productos: state.productos.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto
                    ),
                productoeditar: null,
            })
        default:
            return state;
    }
}
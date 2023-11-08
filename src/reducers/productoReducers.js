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


const inicialState= {
    productos: [],
    error: null,
    loading: false,
}

export default function(state = inicialState, action) {
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
        case COMENZAR_DESCARGA_ERROR:
            return ({
                ...state,
                loading: false,
                error: true,
            })
        default:
            return state;
    }
}
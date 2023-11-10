import { useDispatch,useSelector } from "react-redux"
import { obtenerProductosAction } from "../actions/productosAction"
import { useEffect } from "react";
import { Producto } from "./Producto";


export const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const obtenerProductos = () => dispatch(obtenerProductosAction());
    obtenerProductos()
    }, [])
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);
  return (
    <>
        <h2 className='text-center my-5'>listado de productos</h2>

        {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>hubo un error</p> : null}
        {cargando ? <p className='text-center'>cargando...</p> : null}
        
        <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
                <tr>
                    <th scope='col'>nombre</th>    
                    <th scope='col'>precio</th>    
                    <th scope='col'>accion</th>    
                </tr>
            </thead>
            <tbody>
                {
                productos.length === 0 ? 'no hay productos' : (
                  productos.map (producto => (
                    <Producto 
                      key={producto.id}
                      producto={producto}
                      />
                  
                )))}
            </tbody>
        </table>
    </>
  )
}

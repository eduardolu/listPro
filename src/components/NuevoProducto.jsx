
export const NuevoProducto = () => {
  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>
                        agregar nuevo producto
                     </h2>

                     <form action="">
                        <div className='form-group'>
                            <label>Nombre de producto</label>  
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Nombre de producto'
                                name='nombre'
                                />  
                        </div>
                        <div className='form-group'>
                            <label>precio de producto</label>  
                            <input 
                                type="number"
                                className='form-control'
                                placeholder='precio de producto'
                                name='precio'
                                />  
                        </div>
                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>agregar</button>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

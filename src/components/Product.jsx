import React from 'react'

export const Product = () => {
  return (
    <>
        <h2 className='text-center my-5'>listado de productos</h2>
        <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
                <tr>
                    <th scope='col'>nombre</th>    
                    <th scope='col'>precio</th>    
                    <th scope='col'>accion</th>    
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </>
  )
}

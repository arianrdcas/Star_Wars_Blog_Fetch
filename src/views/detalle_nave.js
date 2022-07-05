import React from 'react'

const Detalle_Nave = () => {
  return (
    <>
      <div className="card my-3 container border border-light border-2" style={{ maxWidth: 1000 }}>
        <div className="row g-0 ">
          <div className="col-md-8">
            <div className="card-body">
              
              <h5 className="card-title">Name</h5>
              <p>descripcion</p>
            </div>
          </div>
          <hr className="border border-danger border-2"/>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Model</th>
                <th scope="col">Clase de Nave</th>
                <th scope="col">Manufacturer</th>
                <th scope="col">Longitud</th>
                <th scope="col">Numero de Pasajeros</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">name</th>
                <th scope="col">model</th>
                <th scope="col">vehicle_class</th>
                <th scope="col">manufacturer</th>
                <th scope="col">length</th>
                <th scope="col">passengers</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detalle_Nave;
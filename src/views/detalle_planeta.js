import React from 'react'

const Detalle_Planeta = () => {
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
                <th scope="col">Periodo de Rotacion</th>
                <th scope="col">Periodo Orbital</th>
                <th scope="col">Clima</th>
                <th scope="col">Gravedad</th>
                <th scope="col">Terreno</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">name</th>
                <th scope="col">rotation_period</th>
                <th scope="col">orbital_period</th>
                <th scope="col">climate</th>
                <th scope="col">gravity</th>
                <th scope="col">terrain</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detalle_Planeta;
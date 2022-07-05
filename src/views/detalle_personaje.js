import React from 'react'

const Detalle_Personaje = () => {
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
                <th scope="col">Año de nacimiento</th>
                <th scope="col">Genero</th>
                <th scope="col">Altura</th>
                <th scope="col">Color de piel</th>
                <th scope="col">Color de ojos</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="col">name</th>
                <th scope="col">birth_year</th>
                <th scope="col">gender</th>
                <th scope="col">height</th>
                <th scope="col">skin_color</th>
                <th scope="col">eye_color</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detalle_Personaje;
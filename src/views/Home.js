import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./Estilo.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPlanetSharp } from "react-icons/io5";
import { SiSkyliner } from "react-icons/si";
import { GiAlienBug } from "react-icons/gi";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPersonajes();
    actions.fetchPlanetas();
    actions.fetchNaves();
  }, []);

  const addFavorito = (nombre) => {
    
    actions.addFavorito(nombre)
  }




  return (
    <>
      <h1 className="container text-center text-danger mt-5">“No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes.”</h1>
      <h5 className="container pe-5 text-end text-danger">Maestro Yoda</h5>
      <div className="container">
        <h1 className="mt-5 text-danger">Personajes <GiAlienBug/></h1>
        <div className="d-flex">
            {store.personajes.map((personajes, id) => {
              return (
                  <div className="col-6 col-md-4">  
                    <div key={id} className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {personajes.name}</h5>
                        <p className="card-text">Gender: {personajes.gender}</p>
                        <p className="card-text">Hair color: {personajes.hair_color}</p>
                        <p className="card-text">Eye color: {personajes.eye_color}</p>
                        <Link
                          to="/detalle_personaje"
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                          onClick={()=>addFavorito(personajes.name)}
                        >
                          <IoMdHeartEmpty/>
                        </button>
                      </div>
                    </div>
                  </div>   
              );
            })}
          </div>
      </div>
      <div className="container">
        <h1 className="mt-5 text-danger">Planetas <IoPlanetSharp/></h1>
        <div className="d-flex">
            {store.planetas.map((planetas, id) => {
              return (
                  <div className="col-6 col-md-4">  
                    <div key={id} className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {planetas.name}</h5>
                        <p className="card-text">Periodo de Rotacion: {planetas.rotation_period}</p>
                        <p className="card-text">Gravedad: {planetas.gravity}</p>
                        <p className="card-text">Habitantes: {planetas.population}</p>
                        <Link
                          to="/detalle_personaje"
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                        >
                          <IoMdHeartEmpty/>
                        </button>
                      </div>
                    </div>
                  </div>   
              );
            })}
          </div>
      </div>
      <div className="container mb-3">
        <h1 className="mt-5 text-danger">Naves <SiSkyliner/></h1>
        <div className="d-flex">
            {store.naves.map((naves, id) => {
              return (
                  <div className="col-6 col-md-4">  
                    <div key={id} className="card"  style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {naves.name}</h5>
                        <p className="card-text">Modelo: {naves.model}</p>
                        <p className="card-text">Pasajeros: {naves.passengers}</p>
                        <p className="card-text">Costo: {naves.cost_in_credits}</p>
                        <Link
                          to="/detalle_personaje"
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Detalles
                        </Link>
                        <button
                          type="button"
                          className="btn btn-outline-warning float-end"
                        >
                          <IoMdHeartEmpty/>
                        </button>
                      </div>
                    </div>
                  </div>   
              );
            })}
          </div>
      </div>
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {

  const { store, actions } = useContext(Context);


  const eliminarFavorito = (i) => {
    let index = i;
    actions.eliminarFavorito(index);
  };

  return (
    <nav className="navbar navbar-light bg-light border-bottom border-primary border-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="vinilos-decorativos-logo-star-wars-borde.jpg"
            type="button"
            className="img-thumbnail rounded"
            alt="..."
            width="80px"
          />
        </Link>
      
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu active dropdown-menu-warning" aria-labelledby="dropdownMenuButton2" >
                {store.favoritosList.length > 0 ? store.favoritosList.map((i) => {
                  return(
                    <li key = {i} >
                      <a className="dropdown-item" href="#"> {i}
                        <button className="mx-2 border-0 bg-transparent" 
                          onClick={()=>eliminarFavorito(i)}>
                            <AiFillDelete/>
                        </button> 
                      </a>  
                    </li>
                  )
                }):
                <li>
                  <a className="dropdown-item" href="#">Agrega favoritos </a>
                </li>
                }
              </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

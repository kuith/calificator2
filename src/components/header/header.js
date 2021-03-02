import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
//import { gruposHard } from '../../utils/datos/datos';
import { getGrupos } from '../../utils/consultas/consultas.grupos';

const Header = () => {
  const [grupos, setGrupos] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/grupos");
      //console.log(result.data);
      setGrupos(result.data);
    }; fetchData();
  }, []);

  //grupos
  const gruposNavItem = grupos.map(grupo => (
    <Link className="dropdown-item" key={grupo.id} to={`/grupos/${grupo.id}`}>
      {grupo.curso} {grupo.nombre}
    </Link>
  )); 

  const gruposNav = (
    <li className="nav-item dropdown ">
      <Link
        className="nav-link dropdown-toggle text-dark"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Grupos
      </Link>
      <div
        className="dropdown-menu elementoLista"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {gruposNavItem}
        <Link to="/grupos/nuevoGrupo" className="dropdown-item">
          Nuevo Grupo
        </Link>
      </div>
    </li>
  );

  //Navbar
  const navBarTotal = (
    <nav className="navbar navbar-expand-sm ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-warning text-dark"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
            <Link className="nav-link text-dark" to="/">
              Inicio <span className="sr-only">(current)</span>
            </Link>
          </li> */}
          {gruposNav}
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      {navBarTotal}
    </div>
  );
}

export default Header;
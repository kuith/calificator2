import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../redux/actions';

const Header = () => {

  //Object.values lo usamos para pasar de una lista de objetos a un array
  //para poder mapearlo.
  const grupos = Object.values(useSelector((state) => state.grupos));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  console.log(grupos);
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
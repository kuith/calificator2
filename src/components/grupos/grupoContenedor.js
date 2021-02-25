import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParcialesContenedor from '../parciales/parcialesContenedor';

const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const [grupo, setGrupo] = useState([]);
  const [trimestres, setTrimestres] = useState([]);
  const [trimestreSeleccionado, setTrimestreSelecionado] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/grupos/${props.id}`);
      console.log(result);
      setGrupo(result.data);
    }; fetchData();
  }, [props.id]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/trimestres`);
      console.log(trimestreSeleccionado);
      console.log(trimestres);
      setTrimestres(result.data);
    }; fetchData();
  }, []);

  const actualizarTrimestreSeleccionado = (trimestreSeleccionado)=>{
    setTrimestreSelecionado(trimestreSeleccionado);
    console.log(trimestreSeleccionado);
  }
  
  //trimestres
  const trimestresListItems = trimestres.map(trimestre => (
    <button
      key = {trimestre.id}
      type="button"
      className="btn btn-outline-primary listaTrimestres"
      onClick={() => actualizarTrimestreSeleccionado(trimestre.id)}
      >{trimestre.nombre}</button>
  )); 

  const listaTrimestres = (
    <ul className="flex-center">
      {trimestresListItems}
    </ul>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          Grupo: {grupo.curso} - {grupo.nombre}
        </div>
        <div className="col-8">
          {listaTrimestres}
        </div>
        <div className="col-2">
          Añadir parcial
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <ParcialesContenedor
            idGrupo={grupo.id}
            idTrimestre={trimestreSeleccionado} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          Fila de abajo
        </div>
      </div>
    </div>
  );
}

export default GrupoContenedor;
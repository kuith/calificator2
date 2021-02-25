/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TrimestresNav = () => {
  const [trimestres, setTrimestres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/trimestres");
      console.log(result.data);
      setTrimestres(result.data);
    }; fetchData();
  }, []);

  //trimestres
  const trimestresListItems = trimestres.map(trimestre => (
    <button type="button" class="btn btn-outline-primary">{trimestre.nombre}</button>
  )); 

  const listaTrimestres = (
    <ul className="flex-center">
      {trimestresListItems}
    </ul>
  )

  return (
    <div className="col-8">
      {listaTrimestres}
    </div>
  );

  
}

export default TrimestresNav;
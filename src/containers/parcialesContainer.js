import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AlumnosTable from '../components/alumnos/alumnosTable';
import { fetchRealizasByTrimestreGrupo } from '../redux/actions';

const ParcialesContainer = ({ grupoId }) => {
  const dispatch = useDispatch();
  const selectedTrimestreId = useSelector( state => state.selectedTrimestreId);
  const alumnos = Object.values(useSelector( state => state.alumnos ));
  const realizas = Object.values(useSelector( state => state.realizas ));
  console.log("ParcialesContainer grupoId, selectedTrimestreId, realizas", grupoId, selectedTrimestreId, realizas);

  useEffect(() => {
    dispatch(fetchRealizasByTrimestreGrupo(selectedTrimestreId, grupoId))
  }, [grupoId, selectedTrimestreId]);
  
  if (selectedTrimestreId === 0 ) {
    return <div className="table-warning">Selecione un trimestre</div>;
  }
  
  return (
    <div className="row">
      <div className="col-8">
        <div className="tablaParciales">
          <AlumnosTable 
            alumnos = { alumnos } 
            realizas = { realizas }
          ></AlumnosTable>
        </div>
      </div>
    </div>
  )
}

export default ParcialesContainer;
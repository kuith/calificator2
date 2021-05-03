import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrealizasByAlumnoTrimestre, selectTrimestre } from '../../redux/actions';

const ParcialesTabla = (props) => {
  const SelectedTrimestre = useSelector((state) => state.selectedTrimestre);
  const realizasAlumno = Object.values(useSelector((state) => state.realizas));
  
  //var trimestre = SelectedTrimestre !== null ? SelectedTrimestre : 1
  const dispatch = useDispatch();
  
  console.log("El alumno tiene id: " + props.idAlumno);
  console.log("El trimestre seleccionado tiene id: " + SelectedTrimestre.id);

   useEffect(() => {
      dispatch(fetchrealizasByAlumnoTrimestre(props.idAlumno, SelectedTrimestre.id));
  }, [SelectedTrimestre]); 

  const parcial = realizasAlumno.map(realiza => (
    <tr key={realiza.id}>
      <td>{realiza.nota}</td>
    </tr>
  ));

  return (
    <div>dfggf</div>
    //{parcial}
  )
}

export default ParcialesTabla;
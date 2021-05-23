import React  from 'react';

import Calificacion from './calificacion';

const ParcialesAlumno = ({ realizas  }) => {
    if (!Array.isArray(realizas) || realizas.length === 0) {
        return null;
    }

    return (
        <div>{ realizas.map(
            ({id, nota, idParcial}) => <Calificacion id = { id } nota = { nota } idParcial = { idParcial }></Calificacion>
        )}</div>
    );
}

export default ParcialesAlumno;
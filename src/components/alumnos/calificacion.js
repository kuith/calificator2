import React from 'react';

const Nota = ({ id, nota, idParcial }) => (
    <p key = { `nota_${ id }` }>idParcial: { idParcial} nota: { nota }</p>
);

export default Nota;
import React from 'react';
import AddTrimestreButton from './addTrimestreButton';
import SelectTrimestreButton from './selectTrimestreButton';

const TrimestresList = ({trimestres, onSelectTrimestre, onAddTrimestre }) => (
    <div> { 
        trimestres.map( trimestre => (
            <SelectTrimestreButton 
                id = { trimestre.id }
                nombre = { trimestre.nombre }
                onSelected = { () => onSelectTrimestre(trimestre.id) }
            ></SelectTrimestreButton >
        ))}
        <AddTrimestreButton text = "Nuevo Trimestre" onAdd ={ onAddTrimestre }></AddTrimestreButton>
    </div>
);
export default TrimestresList;
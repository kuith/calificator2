import React from 'react';

const SelectTrimestreButton = ({id, nombre, onSelected }) => (
    <button
        type = "button"
        key = { `trimestreList_item_${ id }` }
        className = "btn btn-info boton"
        onClick = { onSelected }
    >
        { nombre }
    </button>
);

export default SelectTrimestreButton;
import React from 'react';

const AddTrimestreButton = ({text, onAdd}) => (
    <button 
        type="button" 
        className="btn btn-info boton"
        onClick = { onAdd }
    >
        { text }
    </button>
);

export default AddTrimestreButton;
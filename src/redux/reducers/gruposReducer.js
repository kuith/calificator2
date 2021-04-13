/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

import  * as typesClass from '../types';

//En lugar de usar una aproximación de estado por array (devolviendo un array de grupos)
// lo vamos a hacer devolviendo un objeto, por eso el estado inicial es un objeto vacío.
export default (state = {}, action) => { 
  switch (action.type) {
    case typesClass.FETCH_GROUP:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.ADD_GROUP:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.UPDATE_GROUP:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.DELETE_GROUP:
      return _.omit(state, action.payload);
    case typesClass.FETCH_GROUPS:
      //mapKeys es una funcion de lodash que coge un array y devuelve un objeto
      //las claves de ese objeto se van a tomar de cada uno de los elementos del array
      // y se lo pasamos como parametro, diciendole que el valor de la propiedad pasada
      //se convierta en la clave de cada elemento del objeto.
      return {...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state;
  }
};
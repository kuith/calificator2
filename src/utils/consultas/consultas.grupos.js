import axios from 'axios';

//Obtencion de un grupo por su id
export  async function grupoPorId(idGrupo) {
  const result = await axios.get(`/grupos/${idGrupo}`);
  return result;
}




import axios from 'axios';

//Obtencion de un grupo por su id
export  async function grupoPorId(idGrupo) {
  const result = await axios.get(`/grupos/${idGrupo}`);
  return result;
}

//obtencion de todos los grupos
//export async function getGrupos() {
//  const result = await axios.get("/grupos");
//  return result;
//}





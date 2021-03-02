import axios from 'axios';


//obtencion de todos los grupos
export async function getGrupos() {
    await axios.get("/grupos")
      .then(response => {
        const grupos = response.data;
        return grupos;
      }).catch ({ })
}

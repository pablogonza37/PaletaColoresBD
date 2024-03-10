const URL_colores = import.meta.env.VITE_API_COLORES;

console.log(URL_colores);

export const leerColoresAPI = async () => {
    try {
      const respuesta = await fetch(URL_colores);
      const listaColores = await respuesta.json();
      return listaColores;
    } catch (error) {
      console.log(error);
      console.log(listaTareas)
    }
  };

  export const agregarColoresAPI = async (colorNuevo) => {
    try {
      const respuesta = await fetch(URL_colores, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colorNuevo),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
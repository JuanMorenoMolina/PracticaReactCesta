const URL_SERVER = "http://54.156.239.73:3000/";

const fetchProductos = (textoFiltrado, setArticulosDisponibles) => {
    fetch(URL_SERVER + "articulosIniciales?nombre_like=" + textoFiltrado)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((articulos) => {
            setArticulosDisponibles(articulos);
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
};

export default fetchProductos;
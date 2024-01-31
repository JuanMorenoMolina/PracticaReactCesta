export default function ListaDeProductos({articulosDisponibles, filterText, setArticulosDisponibles, setArticulosCesta}) {

    const filtradoDeArticulos = articulosDisponibles.filter(articulo =>
        articulo.nombre.toLowerCase().includes(filterText.toLowerCase())
      );

    const articulosAPintar = filtradoDeArticulos.map(articulo => (
        <tr key={articulo.codigo}>
            <td>{articulo.nombre}</td>
            <td>{articulo.precio}</td>
            <td>{articulo.unidades}</td>
            <td>
                <button onClick={() => comprar(articulo)}>Comprar</button>
            </td>
        </tr>
    ));

    const comprar = (articulo) => {
        
        if (articulo.unidades > 0) {
    
            const codigoArticulo = articulo.codigo;
            const articulosParaComprar = articulosDisponibles.map(articulo =>
                articulo.codigo === codigoArticulo
                    ? { ...articulo, unidades: articulo.unidades - 1 }
                    : articulo
            );

            setArticulosDisponibles(articulosParaComprar);
            setArticulosCesta((prevCesta) => [...prevCesta, articulo]);

        }
        else {
            alert("No hay unidades disponibles");
        }
    };
   
    return (
        <>
            <h3>Articulos disponibles</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosAPintar}
                </tbody>
            </table>
        </>
    );
}

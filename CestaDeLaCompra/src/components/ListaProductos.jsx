export default function ListaDeProductos({articulosDisponibles, filterText, setArticulosDisponibles, setArticulosCesta, articulosCesta}) {

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

    const comprar = (articuloAComprar) => {
        if (articuloAComprar.unidades > 0) {
            const articulosParaComprar = articulosDisponibles.map(articulo =>
                articulo.codigo === articuloAComprar.codigo
                    ? { ...articulo, unidades: articulo.unidades - 1 }
                    : articulo
            );
    
            const articuloParaLaCesta = articulosParaComprar.find(articulo => articulo.codigo === articuloAComprar.codigo);
    
            setArticulosDisponibles(articulosParaComprar);
    
            setArticulosCesta((Cesta) => {
                const articuloEnCesta = Cesta.find(articulo => articulo.codigo === articuloParaLaCesta.codigo);
    
                if (articuloEnCesta) {
              
                    return Cesta.map(articulo =>
                        articulo.codigo === articuloParaLaCesta.codigo
                            ? { ...articulo, unidades: articulo.unidades + 1 }
                            : articulo
                    );
                } else {

                    return [...Cesta, articuloParaLaCesta];
                }
            });
        } else {
            
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

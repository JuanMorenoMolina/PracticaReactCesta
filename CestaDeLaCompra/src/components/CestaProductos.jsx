export default function CestaProductos({articulosDisponibles,setArticulosDisponibles, setArticulosCesta, articulosCesta}) {

  const articulosAPintar = articulosCesta.map((articulo) => (
    <tr key={articulo.codigo}>
      <td>{articulo.nombre}</td>
      <td>{articulo.precio}</td>
      <td>{articulo.cantidad}</td>
      <td>
        <button onClick={() => devolver(articulo)}>Devolver</button>
      </td>
    </tr>
  ));

  const devolver = (articuloADevolver) => {
    if (articuloADevolver.cantidad > 0) {
      const articulosParaDevolver = articulosCesta.map(articulo =>
          articulo.codigo === articuloADevolver.cantidad
              ? { ...articulo, cantidad: articulo.cantidad - 1 }
              : articulo
      );

      const articulosParaLista = articulosParaDevolver.find(articulo => articulo.cantidad === articuloADevolver.cantidad)

      setArticulosCesta(articulosParaDevolver);

      setArticulosDisponibles((Lista) => {
        const articuloEnLista = Lista.find(articulo => articulo.codigo === articulosParaLista.codigo);

        if (articuloEnLista) {
      
            return Lista.map(articulo =>
                articulo.codigo === articulosParaLista.codigo
                    ? { ...articulo, cantidad: articulo.cantidad + 1 }
                    : articulo
            );
        } else {

            return [...Lista, {...articulosParaLista,cantidad:1}];
        }
    });

    } else {

      return [...Lista, {...articuloADevolver,cantidad:1}];
    }
}

  return (
    <>
      <h3>Articulos en la cesta</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Unidades</th>
            <th>Devolver</th>
          </tr>
        </thead>
        <tbody>
          {articulosAPintar}
        </tbody>
      </table>
    </>
  );
}

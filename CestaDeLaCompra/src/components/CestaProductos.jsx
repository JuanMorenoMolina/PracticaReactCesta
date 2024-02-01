export default function CestaProductos({articulosDisponibles, articulosCesta, setArticulosDisponibles, setArticulosCesta }) {

  const articulosAPintar = articulosCesta.map(articulo => (
    <tr key={articulo.codigo}>
      <td>{articulo.nombre}</td>
      <td>{articulo.precio}</td>
      <td>{articulo.cantidad}</td>
      <td>
        <button onClick={() => devolver(articulo)}>Devolver</button>
      </td>
    </tr>
  ));

  const devolver = (articulo) => {
    const codigoArticulo = articulo.codigo;
    const articulosParaDevolver = articulosCesta.map(articulo =>
      articulo.codigo === codigoArticulo
        ? { ...articulo, unidades: articulo.unidades - 1 }
        : articulo
    );

  };

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

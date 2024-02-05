export default function CestaProductos({articulosDisponibles, articulosCesta, setArticulosDisponibles, setArticulosCesta }) {

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
    const articulosParaDevolver = articulosCesta.map(articulo => {
      if (articulo.codigo === articuloADevolver.codigo && articuloADevolver.cantidad > 0) {
        return {
          ...articulo,
          cantidad: articulo.cantidad - 1
        };
      }
      return articulo;
    }).filter(articulo => articulo.cantidad > 0);
  
    setArticulosCesta(articulosParaDevolver);
  
    setArticulosDisponibles(productosDisponibles.map(articulo => {
      if (articulo.codigo === articuloADevolver.codigo) {
        return {
          ...articulo,
          cantidad: articulo.cantidad + 1
        };
      }
      return articulo;
    }));
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

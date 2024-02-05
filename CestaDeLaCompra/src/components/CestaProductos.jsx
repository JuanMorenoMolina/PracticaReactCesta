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
    const articulosParaDevolver = articulosCesta.map(articulo =>{
      if (articuloADevolver.cantidad > 0) 
      return {
        ...p,
        cantidad: p.cantidad -1
      }
          articulo.codigo === articuloADevolver.cantidad
              ? { ...articulo, cantidad: articulo.cantidad - 1 }
              : articulo
  
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

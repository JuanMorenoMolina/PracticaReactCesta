export default function ListaDeProductos({articulosDisponibles}) {
    const articulosAPintar = articulosDisponibles.map(articulo => (
        <tr key={articulo.codigo}>
            <td>{articulo.nombre}</td>
            <td>{articulo.precio}</td>
            <td>{articulo.unidades}</td>
            <button>Comprar</button>
        </tr>
    ));

        return(
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
            
        )
    
}
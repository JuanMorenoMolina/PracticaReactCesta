export default function ListaDeProductos({articulosDisponibles}) {
    const articulosAPintar = articulosDisponibles.map(articulo => (
        <tr key={articulo.codigo}>
            <td>{articulo.codigo}</td>
            <td>codigo</td>
            <td>Codigo</td>
            <td>Codigo</td>
        </tr>
    ));

    console.log(articulosAPintar)

        return(
            <>
            <h3>Articulos disponibles</h3>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
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
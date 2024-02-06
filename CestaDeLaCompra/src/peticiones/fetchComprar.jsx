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
                        ? { ...articulo, cantidad: articulo.cantidad + 1 }
                        : articulo
                );
            } else {

                return [...Cesta, {...articuloParaLaCesta,cantidad:1}];
            }
        });
    } else {
        
        alert("No hay unidades disponibles");
    }
};

export default comprar;
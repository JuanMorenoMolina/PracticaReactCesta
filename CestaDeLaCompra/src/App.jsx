import { useEffect, useState } from 'react'
import BarraDeBusqueda from './components/BarraDeBusqueda';
import ListaDeProductos from './components/ListaProductos';
import CestaProductos from './components/CestaProductos';
import fetchProductos from './peticiones/fetchProductos';
import fetchComprar from './peticiones/fetchComprar'

function App() {

  const [filterText, setFilterText] = useState('');
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);

  useEffect(()=> {
    fetchProductos(filterText, setArticulosDisponibles);
  }, [filterText]);

  return (
    <>
      <div className='Barra'>
        <BarraDeBusqueda
          filterText={filterText}
          setFilterText={setFilterText}
          fetchProductosFiltrados={fetchProductos}
          onFilterTextChange={setFilterText}
        />
      </div>

      <div className='Contenedor'>
        <div>
          <ListaDeProductos
            articulosDisponibles={articulosDisponibles}
            filterText={filterText}
            setArticulosDisponibles={setArticulosDisponibles}
            setArticulosCesta={setArticulosCesta}
          />
        </div>

        <div>
          <CestaProductos 
          articulosCesta={articulosCesta} 
          articulosDisponibles={articulosDisponibles}
          filterText={filterText}
          setArticulosDisponibles={setArticulosDisponibles}
          setArticulosCesta={setArticulosCesta}
          />
        </div>
      </div>
    </>
  );
}

export default App;
import { useState } from 'react'
import BarraDeBusqueda from './components/BarraDeBusqueda';
import ListaDeProductos from './components/ListaProductos';
import CestaProductos from './components/CestaProductos';

function App() {

//Cesta aqui

  const [filterText, setFilterText] = useState('');
  const [articulosDisponibles, setArticulosDisponibles] = useState(articulosIniciales);
  const [articulosCesta, setArticulosCesta] = useState([]);

  return (
    <>
      <div className='Barra'>
        <BarraDeBusqueda
          filterText={filterText}
          setFilterText={setFilterText}
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
          <CestaProductos articulosCesta={articulosCesta} />
        </div>
      </div>
    </>
  );
}

export default App;
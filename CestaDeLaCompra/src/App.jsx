import { useEffect, useState } from 'react'
import BarraDeBusqueda from './components/BarraDeBusqueda';
import ListaDeProductos from './components/ListaProductos';
import CestaProductos from './components/CestaProductos';

function App() {


  const URL_SERVER="http://54.156.239.73:3000/"

  const [filterText, setFilterText] = useState('');
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);

  useEffect(()=> {
    fetchProductos(filterText);
  }, [filterText]);

  const fetchProductos = (textoFiltrado) =>{

    fetch(URL_SERVER + "articulosIniciales?nombre_like=" + textoFiltrado)
    .then(response =>{
      if(response.ok){
        return response.json();
      }else{
        throw new Error(response.status)
      }
    })
    .then((articulos) =>{
      setArticulosDisponibles(articulos);
    })
  }



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
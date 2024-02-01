import { useState } from 'react'
import BarraDeBusqueda from './components/BarraDeBusqueda';
import ListaDeProductos from './components/ListaProductos';
import CestaProductos from './components/CestaProductos';

function App() {

  const  articulosIniciales= [
    { codigo: 1, nombre: "Laptop", precio: 800, unidades: 10, cantidad:0 },
    { codigo: 2, nombre: "Teclado", precio: 50, unidades: 50, cantidad:0 },
    { codigo: 3, nombre: "Mouse", precio: 20, unidades: 30, cantidad:0 },
    { codigo: 4, nombre: "Monitor", precio: 200, unidades: 15, cantidad:0 },
    { codigo: 5, nombre: "Disco Duro", precio: 100, unidades: 25, cantidad:0 },
    { codigo: 6, nombre: "Memoria RAM", precio: 80, unidades: 40, cantidad:0 },
    { codigo: 7, nombre: "Impresora", precio: 150, unidades: 12, cantidad:0 },
    { codigo: 8, nombre: "Router", precio: 60, unidades: 20, cantidad:0 },
    { codigo: 9, nombre: "Tarjeta Gráfica", precio: 250, unidades: 8, cantidad:0 },
    { codigo: 10, nombre: "Cámara Web", precio: 30, unidades: 18, cantidad:0 },
    { codigo: 11, nombre: "Altavoces", precio: 40, unidades: 22, cantidad:0 },
    { codigo: 12, nombre: "Micrófono", precio: 25, unidades: 35, cantidad:0 },
    { codigo: 13, nombre: "Software", precio: 120, unidades: 15, cantidad:0 },
    { codigo: 14, nombre: "Cable HDMI", precio: 10, unidades: 60, cantidad:0 },
    { codigo: 15, nombre: "Fuente de Poder", precio: 45, unidades: 25, cantidad:0 },
    { codigo: 16, nombre: "Tarjeta Madre", precio: 180, unidades: 10, cantidad:0 },
    { codigo: 17, nombre: "Tablet", precio: 150, unidades: 18, cantidad:0 },
    { codigo: 18, nombre: "Batería Portátil", precio: 35, unidades: 30, cantidad:0 },
    { codigo: 19, nombre: "Auriculares", precio: 55, unidades: 28, cantidad:0 },
    { codigo: 20, nombre: "Silla Gaming", precio: 120, unidades: 15 , cantidad:0}
  ];

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
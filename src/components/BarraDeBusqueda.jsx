export default function SearchBar({ filterText, fetchProductosFiltrados, onFilterTextChange}) {

  const manejarFiltro = (e =>{
    const introducido = e.target.value;
    fetchProductosFiltrados(introducido);
    onFilterTextChange(introducido);
  })
  return (
      <input 
        type="text" 
        value={filterText} 
        onChange={manejarFiltro}
        placeholder="Buscar..."/>

  );
}
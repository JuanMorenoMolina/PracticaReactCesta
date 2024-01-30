export default function SearchBar({ filterText,setFilterText }) {
    return (
        <>
        <h2>Lista de la compra</h2>
        <input 
          type="text" 
          value={filterText} 
          onChange={(e)=>setFilterText(e.target.value)}
          placeholder="Buscar..."/>
        </>
    );
}
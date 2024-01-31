export default function SearchBar({ filterText,setFilterText}) {
  return (
      <input 
        type="text" 
        value={filterText} 
        onChange={(e)=>setFilterText(e.target.value)}
        placeholder="Buscar..."/>

  );
}
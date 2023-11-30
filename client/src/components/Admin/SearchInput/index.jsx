import { Search } from "lucide-react";

function SearchInput({ bg = "main", size = 10, id, name }) {
  return (
    <div className="relative w-fit">
      <input
        className={`bg-bg-${bg} ps-2 pe-${size} py-1 rounded-sm border border-bg-main focus:outline-none focus:border-bg-layer-hover/50`}
        type="search"
        name={name}
        id={id}
        placeholder="Pesquisar..."
      />
      <Search className="h-5 w-5 aspect-square absolute top-1.5 right-2" />
    </div>
  );
}

export default SearchInput;

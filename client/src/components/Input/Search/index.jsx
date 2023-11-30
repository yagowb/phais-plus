import { Search as IconSearch } from "lucide-react";

function Search({paddingEnd = '36'}) {
  return (
    <div className="relative ">
      <input
        className={`bg-bg-layer border-none rounded-lg w-full py-2 ps-4 md:pe-${paddingEnd} placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-dark`}
        type="text"
        placeholder="Pesquisar..."
      />

      <IconSearch
        strokeWidth={1}
        className="absolute inset-y-2 end-3 text-gray-400"
      />
    </div>
  );
}

export default Search;

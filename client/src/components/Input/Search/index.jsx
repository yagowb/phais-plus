import { Search as IconSearch } from "lucide-react";

function Search({ placeholder }) {
  return (
    <div className="relative">
      <input
        className="bg-bg-layer w-full rounded-md ps-4 pe-12 py-2 border-2 border-none placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-dark"
        type="text"
        placeholder={placeholder}
      />

      <IconSearch
        strokeWidth={2}
        className="absolute top-2 right-4 text-neutral-200"
      />
    </div>
  );
}

export default Search;

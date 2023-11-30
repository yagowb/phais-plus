import { Search as IconSearch } from "lucide-react";

function Search({ placeholder, paddingEnd = "36" }) {
  return (
    <div className="relative">
      <input
        className={`bg-bg-layer border-none rounded-lg w-full py-2 ps-4 md:pe-${paddingEnd} placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-dark`}
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

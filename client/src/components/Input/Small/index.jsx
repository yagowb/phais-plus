export function Small({ label, placeholder, type, width, full }) {
    return (
      <div className={`space-y-1 flex flex-col ${full && 'flex-1'}`}>
        <label className="font-semibold">{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          className={`bg-bg-layer border-none rounded-lg w-${width} py-2 ps-4 md:pe-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-dark`}
        />
      </div>
    );
  }
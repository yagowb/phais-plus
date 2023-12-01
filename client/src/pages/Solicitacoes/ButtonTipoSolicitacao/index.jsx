export function ButtonTipoSolicitacao({ handleFunction, isActive, label }) {
    return (
      <button
        onClick={handleFunction}
        className={`border-b-[2px] pb-0.5 px-4 ${
          isActive ? "border-neutral-300" : "border-grays-disabled"
        }`}
      >
        {label}
      </button>
    );
  }
function Checkbox({ label, id, name }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="form-checkbox bg-transparent border-neutral-200 rounded-sm checked:focus:outline-none focus:ring-transparent focus:ring-offset-1 focus:border-none checked:focus:bg-green-dark checked:bg-green-dark checked:hover:bg-green-dark"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;

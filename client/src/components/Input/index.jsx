import { forwardRef } from "react";

const Input = forwardRef(({ label, type, placeholder }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-96">
      <label htmlFor="email" className="text-neutral-200 font-medium">
        {label}
      </label>

      <input
        type={type}
        className="text-neutral-200 w-full bg-bg-layer rounded-lg px-4 py-3 pe-12 shadow-md outline-neutral-200"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;

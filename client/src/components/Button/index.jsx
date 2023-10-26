import { Link } from "react-router-dom";

function Button({ children, label, type, redirect, color, ...properties }) {
  let colorStyle =
    color === "primary"
      ? "bg-green-dark hover:bg-green-dark hover:bg-opacity-80"
      : "bg-bg-main hover:bg-bg-main hover:bg-opacity-80";

  return (
    <Link
      to={redirect}
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-14 py-3.5 mt-4 font-medium text-white ${colorStyle}`}
      {...properties}
    >
      {children}
      {label}
    </Link>
  );
}

export default Button;

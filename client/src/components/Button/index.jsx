import { Link } from "react-router-dom";

function Button({ to, label, color, children, ...otherProps }) {
  const colorStyle =
    color === "primary"
      ? "bg-green-dark hover:bg-green-dark hover:bg-opacity-80"
      : "bg-bg-main hover:bg-bg-main hover:bg-opacity-80";

  return (
    <Link
      to={to}
      className={`text-white text-lg font-medium w-full flex items-center justify-center rounded-lg gap-2 py-3 sm:w-fit sm:py-4 sm:px-8 ${colorStyle}`}
      {...otherProps}
    >
      {children}
      <p className="uppercase">{label}</p>
    </Link>
  );
}

export default Button;

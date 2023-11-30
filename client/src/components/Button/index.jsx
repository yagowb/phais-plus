import { Link } from "react-router-dom";

function Button({ to, label, color, size, children, ...otherProps }) {
  const colorStyle =
    color === "primary"
      ? "bg-green-dark hover:bg-green-dark hover:bg-opacity-80"
      : "bg-bg-main hover:bg-bg-main hover:bg-opacity-80";

  let sizeStyle = "py-3 sm:py-4 sm:px-8";
  if (size === "sm") {
    sizeStyle = "py-2 sm:py-3 sm:px-6";
  }

  return (
    <Link
      to={to}
      className={`text-white text-lg font-medium w-full flex items-center justify-center rounded-lg gap-2 sm:w-fit ${colorStyle} ${sizeStyle}`}
      {...otherProps}
    >
      {children}
      <p className="text-center whitespace-nowrap">{label}</p>
    </Link>
  );
}

export default Button;

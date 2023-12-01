import { Link } from "react-router-dom";

function Button({ to, label, color, size, full, children, ...otherProps }) {
  const colors = {
    primary: "bg-green-dark hover:bg-green-dark",
    secondary: "bg-bg-main hover:bg-bg-main",
    success: "bg-urgencyColor-green",
    warning: "bg-urgencyColor-yellow",
    danger: "bg-urgencyColor-red",
    info: "bg-neutral-500",
  };

  if (!(color in colors)) {
    throw new Error("Invalid button color.");
  }

  let sizeStyle = "py-3 sm:py-4 sm:px-8";
  if (size === "sm") {
    sizeStyle = "py-[0.375rem] sm:px-6";
  }

  return (
    <Link
      to={to}
      className={`text-white text-lg font-medium w-full flex items-center justify-center rounded-lg gap-2 shadow hover:bg-opacity-80 ${
        full ? "" : "sm:w-fit"
      } ${colors[color]} ${sizeStyle}`}
      {...otherProps}
    >
      {children}
      <p className="text-center whitespace-nowrap">{label}</p>
    </Link>
  );
}

export default Button;

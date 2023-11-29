import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export const Back = ({ to, position }) => {
  const positions = { left: "left-8", right: "right-8" };

  if (!(position in positions)) {
    throw new Error("Invalid back button position");
  }

  return (
    <Link
      to={to}
      className={`text-neutral-200 absolute top-8 flex items-center justify-center gap-2 cursor-pointer hover:text-neutral-400 ${positions[position]}`}
    >
      <ArrowUturnLeftIcon className="w-5 h-5" />
      <p>Voltar</p>
    </Link>
  );
};

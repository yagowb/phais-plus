import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export const Back = ({ to }) => {
  return (
    <Link
      to={to}
      className="text-neutral-200 absolute top-8 left-6 flex items-center justify-center gap-2 cursor-pointer hover:text-neutral-400"
    >
      <ArrowUturnLeftIcon className="w-5 h-5" />
      <p>Voltar</p>
    </Link>
  );
};

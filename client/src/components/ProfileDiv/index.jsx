import { PenSquare } from "lucide-react";

export const ProfileDiv = ({ title, children }) => {
  return (
    <div className="flex w-full items-center justify-between bg-bg-layer p-6 rounded-md">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="space-y-2">{children}</div>
      </div>

      <div className="flex items-center gap-3 cursor-pointer">
        Editar
        <PenSquare size={20} />
      </div>
    </div>
  );
};

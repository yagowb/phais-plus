import { PenSquare } from "lucide-react";

export const ProfileDiv = ({title, children})=> {
    return <div className="grid grid-cols-[9fr_minmax(200px,_1fr)] grid-rows-2">
        <div className="bg-blue">{title}</div>
        <div className="flex items-center justify-end bg-yellow row-span-2 gap-3">Editar <PenSquare/></div>
        <div className="bg-red">{children}</div>
    </div>
}
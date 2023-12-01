import { Phone, Mail, MapPin } from "lucide-react";

export const ProfileInput = ({ label, content, type, icon }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-neutral-400 text-sm">{label}</label>}
      <p className="flex gap-2 items-center">{icon}{content}</p>
    </div>
  );
};

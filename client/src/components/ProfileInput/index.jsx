import { Phone, Mail, MapPin } from "lucide-react";

export const ProfileInput = ({label, content, type, icon})=> {
    if(icon){
        return (
            <div className="flex gap-2">
                {icon}
                <p>{content}</p>
            </div>
        )
    }

    return <div><label htmlFor={label}>{label}</label><p>{content}</p></div>
}
import { ElementType } from "react";

interface IconProps {
    Icone: ElementType
    text: string
}

export default function Icon({ Icone, text }: IconProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="p-4 rounded-full border-4 border-orange-300">
                <Icone className="text-orange-300 h-10 w-10" />
            </div>
            <h5 className="text-white font-semibold text-xl text-center">{text}</h5>
        </div>
    )
}
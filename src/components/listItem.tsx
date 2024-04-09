import { ElementType, ReactNode } from "react";

interface ListItemProps {
    children: ReactNode
    Icon: ElementType
    IconColor: string
    translate?: boolean
}

export default function ListItem({children, Icon, IconColor, translate}: ListItemProps) {
    return (    
        <li className="relative ps-10 flex items-start sm:text-xl ">
            <Icon className={`absolute left-0 h-8 w-8 ${!translate && 'translate-y-1'} ${IconColor}`} />
            <span className="text-white">{children}</span>
        </li>
    )
}
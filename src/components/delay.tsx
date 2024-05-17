'use client'

import { ReactNode, useState } from "react";

interface DelayProps {
    children: ReactNode
}

export function Delay({ children }: DelayProps) {
    const [openPage, setOpenPage] = useState<boolean>(false)

    setTimeout(() => {
        setOpenPage(true)
    }, 240000); // 240000 milissegundos são iguais a 4 minutos

    return (
        <div>
            {openPage && (
                children
            )}
        </div>
    )
}
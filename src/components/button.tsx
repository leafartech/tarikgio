'use client'
import { ReactNode, useEffect, useState } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({children}: ButtonProps) {
    const [ updatedUrl, setUpdatedUrl] = useState('')
    useEffect(() => {
        let url = 'https://pay.kiwify.com.br/yi7rtPT'
        if (typeof window !== 'undefined') {
            const params = window.top?.location.href.split("?")[1]?.split("&").join('&')
            setUpdatedUrl(`${url}?${params}` )
        }
    }, [])
    return (
        <a href={updatedUrl} className="button text-center my-shadow">{children}</a>
    )
}
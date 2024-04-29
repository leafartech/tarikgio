'use client'
import { ReactNode, useEffect, useState } from "react"

interface ButtonProps {
    children: ReactNode
    checkout?: boolean
}

export default function Button({ children, checkout }: ButtonProps) {
    const [updatedUrl, setUpdatedUrl] = useState('')
    useEffect(() => {
        let url = 'https://pay.kiwify.com.br/yi7rtPT'
        if (typeof window !== 'undefined') {
            const params = window.top?.location.href.split("?")[1]?.split("&").join('&')
            setUpdatedUrl(`${url}?${params}`)
        }
    }, [])

    if (checkout) {
        return (
            <a href={updatedUrl} className="button text-center my-shadow">{children}</a>
        )
    }
    return (
        <a href="/#oferta" className="button text-center my-shadow">{children}</a>
    )
}